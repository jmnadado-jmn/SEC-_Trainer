import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Grid, 
  X, 
  Pause, 
  Play, 
  Eye, 
  Slash, 
  Sparkles, 
  Bookmark,
  Check,
  AlertTriangle
} from 'lucide-react';
import { AnyQuestion, ExamResultSummary, ExamSessionConfig, MultipleChoiceQuestion, UserExamResponse } from '../../types/exam';
import { compileExamResults, formatTime } from '../../utils/scoring';
import { PBQViewer } from './PBQViewer';

interface ExamRunnerProps {
  config: ExamSessionConfig;
  questions: AnyQuestion[];
  onFinishExam: (result: ExamResultSummary) => void;
  onExitExam: () => void;
  onOpenReference: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (qId: string) => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  config,
  questions,
  onFinishExam,
  onExitExam,
  onOpenReference,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, UserExamResponse>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(
    config.timeLimitMinutes > 0 ? config.timeLimitMinutes * 60 : 0
  );
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  
  // Track whether explanation is revealed for each question
  const [isImmediateRevealed, setIsImmediateRevealed] = useState<Record<string, boolean>>({});
  // In-session toggle for instant feedback
  const [liveImmediateFeedback, setLiveImmediateFeedback] = useState<boolean>(config.immediateFeedback);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Current question
  const currentQuestion = questions[currentIndex];
  const currentResponse: UserExamResponse = responses[currentQuestion.id] || {
    questionId: currentQuestion.id,
    selectedAnswers: [],
    isFlagged: false,
    strikethroughs: [],
    timeSpentSeconds: 0
  };

  // Timer countdown / elapsed
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
      if (config.timeLimitMinutes > 0) {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, config.timeLimitMinutes]);

  const handleAutoSubmit = () => {
    alert('Time limit reached! Submitting your exam session for scoring.');
    const finalResult = compileExamResults(config, questions, responses, elapsedSeconds);
    onFinishExam(finalResult);
  };

  const updateResponse = (updater: (prev: UserExamResponse) => UserExamResponse) => {
    setResponses(prev => {
      const existing = prev[currentQuestion.id] || {
        questionId: currentQuestion.id,
        selectedAnswers: [],
        isFlagged: false,
        strikethroughs: [],
        timeSpentSeconds: 0
      };
      return {
        ...prev,
        [currentQuestion.id]: updater(existing)
      };
    });
  };

  const handleSelectOption = (optionId: string) => {
    if (currentQuestion.type === 'single') {
      updateResponse(prev => ({
        ...prev,
        selectedAnswers: [optionId]
      }));

      // If immediate feedback is active, automatically show the answer explanation immediately!
      if (liveImmediateFeedback) {
        setIsImmediateRevealed(prev => ({ ...prev, [currentQuestion.id]: true }));
      }
    } else if (currentQuestion.type === 'multiple') {
      updateResponse(prev => {
        const set = new Set(prev.selectedAnswers);
        if (set.has(optionId)) {
          set.delete(optionId);
        } else {
          set.add(optionId);
        }
        const nextAnswers = Array.from(set);

        // Auto-reveal if user has chosen the target number of options (usually 2)
        if (liveImmediateFeedback && nextAnswers.length >= (currentQuestion.correctAnswers?.length || 2)) {
          setIsImmediateRevealed(rPrev => ({ ...rPrev, [currentQuestion.id]: true }));
        }

        return {
          ...prev,
          selectedAnswers: nextAnswers
        };
      });
    }
  };

  const handleToggleStrikethrough = (optionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    updateResponse(prev => {
      const set = new Set(prev.strikethroughs);
      if (set.has(optionId)) {
        set.delete(optionId);
      } else {
        set.add(optionId);
      }
      return {
        ...prev,
        strikethroughs: Array.from(set)
      };
    });
  };

  const handleToggleFlag = () => {
    updateResponse(prev => ({
      ...prev,
      isFlagged: !prev.isFlagged
    }));
  };

  const handlePBQAnswer = (serializedAnswer: string) => {
    updateResponse(prev => ({
      ...prev,
      selectedAnswers: [serializedAnswer]
    }));
  };

  const handleFinish = () => {
    const finalResult = compileExamResults(config, questions, responses, elapsedSeconds);
    onFinishExam(finalResult);
  };

  // Stats for review grid
  const answeredCount = questions.filter(q => {
    const r = responses[q.id];
    return r && r.selectedAnswers && r.selectedAnswers.length > 0;
  }).length;
  const flaggedCount = questions.filter(q => responses[q.id]?.isFlagged).length;
  const unansweredCount = questions.length - answeredCount;

  const isBookmarked = bookmarkedIds.includes(currentQuestion.id);
  const isRevealed = liveImmediateFeedback && (isImmediateRevealed[currentQuestion.id] || false);

  // Check correctness of current question for instant indicator
  const isCurrentlyCorrect = currentQuestion.type === 'single'
    ? currentResponse.selectedAnswers[0] === currentQuestion.correctAnswers[0]
    : currentQuestion.type === 'multiple'
    ? currentResponse.selectedAnswers.length === currentQuestion.correctAnswers.length &&
      currentQuestion.correctAnswers.every(ans => currentResponse.selectedAnswers.includes(ans))
    : false;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Top CompTIA Header */}
      <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30">
              CompTIA Security+
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              SY0-701 Simulation
            </span>
          </div>

          {/* Center Timer & Explanations Toggle */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm font-bold border transition-colors ${
              config.timeLimitMinutes > 0 && timeRemainingSeconds < 300
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse'
                : 'bg-slate-800 text-slate-200 border-slate-700'
            }`}>
              <Clock className="w-4 h-4 text-amber-400" />
              <span>
                {config.timeLimitMinutes > 0
                  ? `Time Left: ${formatTime(timeRemainingSeconds)}`
                  : `Elapsed: ${formatTime(elapsedSeconds)}`}
              </span>
            </div>

            {config.timeLimitMinutes > 0 && (
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title={isPaused ? 'Resume Timer' : 'Pause Timer'}
              >
                {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-amber-400" />}
              </button>
            )}

            {/* Quick Live Toggle for Explanations */}
            <button
              type="button"
              onClick={() => setLiveImmediateFeedback(!liveImmediateFeedback)}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                liveImmediateFeedback
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="Show correct answer explanation immediately after answering"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Explanations: <strong className="font-mono">{liveImmediateFeedback ? 'ON' : 'OFF'}</strong></span>
            </button>
          </div>

          {/* Right Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenReference}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
              title="Open Ports & Cheatsheet Reference"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Reference</span>
            </button>

            <button
              onClick={() => setIsGridOpen(!isGridOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
            >
              <Grid className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Questions</span>
              <span className="text-[10px] font-mono bg-slate-900 px-1.5 py-0.5 rounded">
                {currentIndex + 1}/{questions.length}
              </span>
            </button>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow"
            >
              Finish Exam
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 space-y-6">
        {/* Question Header & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono font-bold text-white">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-xs text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              Domain {currentQuestion.domainId}.0
            </span>
            {currentQuestion.type === 'multiple' && (
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                (Select Two)
              </span>
            )}
            {liveImmediateFeedback && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Instant Explanations Active
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(currentQuestion.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                isBookmarked
                  ? 'border-amber-500/40 bg-amber-500/20 text-amber-300'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleToggleFlag}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                currentResponse.isFlagged
                  ? 'border-amber-500 bg-amber-500/20 text-amber-400'
                  : 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${currentResponse.isFlagged ? 'fill-amber-400' : ''}`} />
              <span>{currentResponse.isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>
        </div>

        {/* Question Body */}
        {currentQuestion.type === 'pbq' ? (
          <div className="space-y-4">
            <PBQViewer
              question={currentQuestion}
              savedAnswer={currentResponse.selectedAnswers[0]}
              onSaveAnswer={handlePBQAnswer}
              showExplanation={isRevealed}
            />

            {liveImmediateFeedback && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsImmediateRevealed(prev => ({ ...prev, [currentQuestion.id]: !prev[currentQuestion.id] }))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow flex items-center gap-2 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  {isRevealed ? 'Hide Solution' : 'Check & Reveal Official Solution'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Prompt */}
            <div className="text-base sm:text-lg font-medium text-white leading-relaxed">
              {currentQuestion.prompt}
            </div>

            {/* Code / Log Snippet if applicable */}
            {currentQuestion.codeSnippet && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto shadow-inner">
                {currentQuestion.codeSnippet}
              </div>
            )}

            {/* Answer Options */}
            <div className="space-y-3">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Choose your answer:</span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Slash className="w-3 h-3" /> Click slash icon to eliminate
                </span>
              </div>

              {currentQuestion.options.map(opt => {
                const isSelected = currentResponse.selectedAnswers.includes(opt.id);
                const isStriked = currentResponse.strikethroughs.includes(opt.id);
                const isCorrect = currentQuestion.correctAnswers.includes(opt.id);

                let optionClass = 'border-slate-800 bg-slate-850/60 hover:bg-slate-800 hover:border-slate-700 text-slate-200';

                if (isSelected) {
                  optionClass = 'border-red-500 bg-red-500/15 text-white ring-1 ring-red-500/40 font-semibold';
                }

                if (isRevealed) {
                  if (isCorrect) {
                    optionClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionClass = 'border-rose-500 bg-rose-500/20 text-rose-200 ring-1 ring-rose-500/50';
                  }
                }

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all select-none group relative ${optionClass} ${
                      isStriked ? 'opacity-40' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3.5 pr-8">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                        isRevealed && isCorrect
                          ? 'bg-emerald-500 text-slate-950 font-black'
                          : isRevealed && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white font-black'
                          : isSelected 
                          ? 'bg-red-500 text-white shadow' 
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'
                      }`}>
                        {isRevealed && isCorrect ? '✓' : isRevealed && isSelected && !isCorrect ? '✗' : opt.id}
                      </div>
                      <span className={`text-sm leading-relaxed ${isStriked ? 'line-through text-slate-500' : ''}`}>
                        {opt.text}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isRevealed && isCorrect && (
                        <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          Correct
                        </span>
                      )}
                      {/* Strikethrough toggle button */}
                      <button
                        type="button"
                        onClick={(e) => handleToggleStrikethrough(opt.id, e)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isStriked 
                            ? 'bg-slate-800 border-slate-700 text-rose-400' 
                            : 'border-transparent text-slate-600 hover:text-slate-300 hover:border-slate-700'
                        }`}
                        title="Eliminate / Cross out option"
                      >
                        <Slash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Answer Explanation Section */}
            {liveImmediateFeedback && (
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                {!isRevealed ? (
                  <button
                    onClick={() => setIsImmediateRevealed(prev => ({ ...prev, [currentQuestion.id]: true }))}
                    disabled={currentResponse.selectedAnswers.length === 0}
                    className="self-start px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    Reveal Correct Answer & Explanation
                  </button>
                ) : (
                  <div className={`p-4 rounded-xl border space-y-2.5 animate-fadeIn ${
                    isCurrentlyCorrect
                      ? 'bg-emerald-950/20 border-emerald-500/40'
                      : 'bg-slate-900 border-amber-500/40'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        {isCurrentlyCorrect ? (
                          <span className="text-emerald-400 flex items-center gap-1 font-bold">
                            <CheckCircle2 className="w-4 h-4" /> Correctly Answered!
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1 font-bold">
                            <XCircle className="w-4 h-4" /> Incorrect Answer
                          </span>
                        )}
                        <span className="text-slate-400">• Official Answer: <strong className="text-white font-mono">{currentQuestion.correctAnswers.join(', ')}</strong></span>
                      </div>
                    </div>

                    <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Explanation & Why
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                    {currentQuestion.examTip && (
                      <div className="text-[11px] text-blue-300 bg-blue-950/40 p-2.5 rounded-lg border border-blue-900/50">
                        <strong className="text-blue-400">CompTIA Exam Pro-Tip: </strong>
                        {currentQuestion.examTip}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Sticky Navigation Footer */}
      <footer className="sticky bottom-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          {/* Quick Indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Answered: <strong className="text-white">{answeredCount}</strong> / {questions.length}</span>
            {flaggedCount > 0 && (
              <span className="text-amber-400 font-bold ml-2 flex items-center gap-1">
                <Flag className="w-3 h-3 fill-amber-400" /> {flaggedCount} Flagged
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" /> Review & Submit
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* Question Grid Drawer */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Grid className="w-4 h-4 text-emerald-400" /> Question Navigator
              </h3>
              <button
                onClick={() => setIsGridOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500" /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500" /> Flagged
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-800 border border-slate-700" /> Unanswered
              </span>
            </div>

            {/* Grid Cells */}
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2 max-h-72 overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const r = responses[q.id];
                const isAnswered = r && r.selectedAnswers && r.selectedAnswers.length > 0;
                const isFlg = r?.isFlagged;
                const isCur = currentIndex === idx;

                let cellClass = 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700';
                if (isFlg) cellClass = 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold';
                else if (isAnswered) cellClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';

                if (isCur) cellClass += ' ring-2 ring-white scale-105';

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsGridOpen(false);
                    }}
                    className={`h-10 rounded-xl border text-xs font-mono transition-all flex flex-col items-center justify-center relative ${cellClass}`}
                  >
                    <span>{idx + 1}</span>
                    {q.type === 'pbq' && (
                      <span className="text-[8px] uppercase tracking-tighter text-amber-400 font-sans">PBQ</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Submit Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Submit Examination?
            </h3>

            <div className="space-y-2 text-xs text-slate-300 bg-slate-850 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <strong className="text-white">{questions.length}</strong>
              </div>
              <div className="flex justify-between">
                <span>Completed / Answered:</span>
                <strong className="text-emerald-400">{answeredCount}</strong>
              </div>
              {unansweredCount > 0 && (
                <div className="flex justify-between text-rose-400">
                  <span>Unanswered Items:</span>
                  <strong>{unansweredCount}</strong>
                </div>
              )}
              {flaggedCount > 0 && (
                <div className="flex justify-between text-amber-400">
                  <span>Flagged for Review:</span>
                  <strong>{flaggedCount}</strong>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Once submitted, your answers will be graded against the official CompTIA Security+ SY0-701 scoring rubric (100–900 scale).
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800"
              >
                Return to Exam
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg"
              >
                Confirm & Submit Score
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
