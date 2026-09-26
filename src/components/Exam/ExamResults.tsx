import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  AlertTriangle, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Flag, 
  Bookmark, 
  Clock, 
  Target, 
  BarChart3, 
  Filter, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Share2,
  Mail
} from 'lucide-react';
import { AnyQuestion, DOMAINS, DomainId, ExamResultSummary } from '../../types/exam';
import { formatTime } from '../../utils/scoring';
import { toggleBookmarkQuestion } from '../../utils/storage';
import { PBQViewer } from './PBQViewer';
import { EmailResultModal } from './EmailResultModal';

interface ExamResultsProps {
  result: ExamResultSummary;
  questions: AnyQuestion[];
  onRetakeMissed: () => void;
  onNewExam: () => void;
  onReturnDashboard: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (qId: string) => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  result,
  questions,
  onRetakeMissed,
  onNewExam,
  onReturnDashboard,
  bookmarkedIds,
  onToggleBookmark
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct' | 'flagged'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (result.passed) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  }, [result.passed]);

  const filteredQuestions = questions.filter(q => {
    const resp = result.userResponses[q.id];
    if (filterMode === 'incorrect') return resp?.isCorrect === false;
    if (filterMode === 'correct') return resp?.isCorrect === true;
    if (filterMode === 'flagged') return resp?.isFlagged;
    return true;
  });

  const missedCount = result.totalQuestions - result.correctCount;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Score Hero Card */}
      <div className={`rounded-3xl border p-8 shadow-2xl relative overflow-hidden text-center sm:text-left ${
        result.passed
          ? 'bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-900 border-emerald-500/40'
          : 'bg-gradient-to-br from-rose-950/50 via-slate-900 to-slate-900 border-rose-500/40'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border ${
                result.passed
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
              }`}>
                {result.passed ? 'PASSED COMPTIA SY0-701' : 'NEEDS ADDITIONAL STUDY'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Passing standard: 750 / 900 pts
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {result.passed ? 'Outstanding Work, Candidate!' : 'Good Effort! Keep Grinding.'}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              {result.passed
                ? 'Your scaled score exceeds the official CompTIA Security+ certification passing standard of 750 points. Review any missed items below to reinforce mastery.'
                : 'You scored below the 750 cut score. Security+ requires mastery across all 5 domains. Focus on the domain breakdowns below and drill missed concepts.'}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Time Spent: <strong className="text-white">{formatTime(result.timeTakenSeconds)}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-blue-400" />
                <span>Accuracy: <strong className="text-white">{result.correctCount} / {result.totalQuestions} ({result.percentage}%)</strong></span>
              </div>
            </div>
          </div>

          {/* Scaled Score Circle */}
          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <div className={`w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center shadow-xl ${
              result.passed
                ? 'border-emerald-500 bg-emerald-500/10 shadow-emerald-950/50'
                : 'border-rose-500 bg-rose-500/10 shadow-rose-950/50'
            }`}>
              <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                {result.scaledScore}
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider font-semibold">
                Scaled Score (100-900)
              </span>
            </div>
            <span className="mt-2 text-xs font-bold text-slate-400">
              Cut Score: 750 pts
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {missedCount > 0 && (
              <button
                onClick={onRetakeMissed}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/40 flex items-center gap-2 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Drill Missed Questions ({missedCount})
              </button>
            )}
            <button
              onClick={onNewExam}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center gap-2 transition-colors"
            >
              <Target className="w-3.5 h-3.5 text-red-400" /> Start Another Drill
            </button>
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-950/40 flex items-center gap-2 transition-all"
            >
              <Mail className="w-3.5 h-3.5" /> Send Result to Email
            </button>
          </div>

          <button
            onClick={onReturnDashboard}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            Return to Dashboard &rarr;
          </button>
        </div>
      </div>

      {/* Domain Mastery Breakdown */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-blue-400" /> Domain Mastery Breakdown
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {([1, 2, 3, 4, 5] as DomainId[]).map(dId => {
            const dom = DOMAINS[dId];
            const dScore = result.domainScores[dId];
            const hasData = dScore && dScore.total > 0;
            const pct = hasData ? dScore.percentage : 0;
            const isProficient = pct >= 80;

            return (
              <div 
                key={dId}
                className="p-3.5 rounded-xl bg-slate-850 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-mono">Domain {dId}.0</span>
                    <span className="font-mono">{dom.weight}% wt</span>
                  </div>
                  <h4 className="text-xs font-bold text-white line-clamp-1 mb-2" title={dom.name}>
                    {dom.name}
                  </h4>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-[11px] text-slate-400">
                      {hasData ? `${dScore.correct}/${dScore.total}` : 'N/A'}
                    </span>
                    <span className={`font-mono font-bold text-xs ${
                      !hasData ? 'text-slate-500' : isProficient ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {hasData ? `${pct}%` : '-'}
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        !hasData ? 'bg-slate-700' : isProficient ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${hasData ? pct : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Review Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white">Item Review & Explanations</h3>
            <p className="text-xs text-slate-400">Examine correct answers, detailed justifications, and official CompTIA exam pointers.</p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-semibold ${
                filterMode === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              onClick={() => setFilterMode('incorrect')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-semibold flex items-center gap-1 ${
                filterMode === 'incorrect' ? 'bg-rose-600/30 text-rose-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 text-rose-400" />
              Missed ({missedCount})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-semibold flex items-center gap-1 ${
                filterMode === 'correct' ? 'bg-emerald-600/30 text-emerald-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Correct ({result.correctCount})
            </button>
          </div>
        </div>

        {/* Question List */}
        <div className="space-y-3">
          {filteredQuestions.map((q, idx) => {
            const resp = result.userResponses[q.id];
            const isCorrect = resp?.isCorrect;
            const isExpanded = expandedQuestionId === q.id;
            const isBookmarked = bookmarkedIds.includes(q.id);

            return (
              <div 
                key={q.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isCorrect
                    ? 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                    : 'border-rose-900/40 bg-slate-900/90'
                }`}
              >
                {/* Header Row */}
                <div 
                  onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                  className="p-4 flex items-center justify-between cursor-pointer select-none hover:bg-slate-850/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                      isCorrect
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    </span>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-mono font-bold text-white">
                          Question {idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                          Domain {q.domainId}.0
                        </span>
                        {q.type === 'pbq' && (
                          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30">
                            PBQ Simulation
                          </span>
                        )}
                        {resp?.isFlagged && (
                          <span className="text-[10px] text-amber-400 flex items-center gap-0.5">
                            <Flag className="w-3 h-3 fill-amber-400" /> Flagged
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-1 max-w-xl">
                        {q.prompt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(q.id);
                      }}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isBookmarked 
                          ? 'border-amber-500/40 bg-amber-500/20 text-amber-400' 
                          : 'border-slate-800 text-slate-500 hover:text-slate-300'
                      }`}
                      title={isBookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-4 bg-slate-950/40">
                    <div className="text-sm font-medium text-white leading-relaxed">
                      {q.prompt}
                    </div>

                    {q.type === 'pbq' ? (
                      <PBQViewer
                        question={q}
                        savedAnswer={resp?.selectedAnswers?.[0]}
                        onSaveAnswer={() => {}}
                        showExplanation={true}
                      />
                    ) : (
                      <div className="space-y-2">
                        {q.options.map(opt => {
                          const isUserSelected = resp?.selectedAnswers?.includes(opt.id);
                          const isAnswerCorrect = q.correctAnswers.includes(opt.id);

                          let borderBg = 'border-slate-800 bg-slate-850/60 text-slate-300';
                          if (isAnswerCorrect) {
                            borderBg = 'border-emerald-500/60 bg-emerald-950/30 text-emerald-200 font-semibold';
                          } else if (isUserSelected && !isAnswerCorrect) {
                            borderBg = 'border-rose-500/60 bg-rose-950/30 text-rose-200';
                          }

                          return (
                            <div 
                              key={opt.id}
                              className={`p-3 rounded-xl border flex items-center justify-between text-xs ${borderBg}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono font-bold text-[10px] ${
                                  isAnswerCorrect 
                                    ? 'bg-emerald-500 text-slate-950' 
                                    : isUserSelected 
                                    ? 'bg-rose-500 text-white' 
                                    : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {opt.id}
                                </span>
                                <span>{opt.text}</span>
                              </div>

                              <div className="text-[11px] font-mono">
                                {isAnswerCorrect && (
                                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer
                                  </span>
                                )}
                                {isUserSelected && !isAnswerCorrect && (
                                  <span className="text-rose-400 font-bold flex items-center gap-1">
                                    <XCircle className="w-3.5 h-3.5" /> Your Choice
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Official Justification */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 space-y-2">
                      <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" /> CompTIA Exam Explanation & Justification
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {q.explanation}
                      </p>
                      {q.type !== 'pbq' && q.examTip && (
                        <div className="text-[11px] text-blue-300 bg-blue-950/30 p-2.5 rounded-lg border border-blue-900/40">
                          <strong className="text-blue-400">CompTIA Exam Pro-Tip: </strong>
                          {q.examTip}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <EmailResultModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        result={result}
        questions={questions}
      />
    </div>
  );
};
