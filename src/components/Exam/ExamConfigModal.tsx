import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Target, 
  Layers, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Terminal, 
  Bookmark, 
  AlertCircle,
  Hash,
  Info,
  ListChecks
} from 'lucide-react';
import { DomainId, DOMAINS, ExamSessionConfig } from '../../types/exam';
import { 
  calculateDomainDistribution, 
  calculatePBQCountForExam, 
  QUESTION_BANK_STATS 
} from '../../data/questionsIndex';

interface ExamConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartExam: (config: ExamSessionConfig) => void;
  missedQuestionsCount: number;
  bookmarkedQuestionsCount: number;
  preselectedDomain?: DomainId;
  defaultIncludePBQs?: boolean;
}

export const ExamConfigModal: React.FC<ExamConfigModalProps> = ({
  isOpen,
  onClose,
  onStartExam,
  missedQuestionsCount,
  bookmarkedQuestionsCount,
  preselectedDomain,
  defaultIncludePBQs = true
}) => {
  const [selectedMode, setSelectedMode] = useState<ExamSessionConfig['mode']>(
    preselectedDomain ? 'domain-drill' : 'full-simulated'
  );
  const [selectedDomain, setSelectedDomain] = useState<DomainId>(preselectedDomain || 1);
  const [typedQuestionCount, setTypedQuestionCount] = useState<string>(
    preselectedDomain ? '20' : '50'
  );
  const [timeLimit, setTimeLimit] = useState<number>(45);
  // User requested: "every question answered will show the correct answer explanation" - default to true!
  const [immediateFeedback, setImmediateFeedback] = useState<boolean>(true);
  const [includePBQs, setIncludePBQs] = useState<boolean>(defaultIncludePBQs);

  useEffect(() => {
    if (isOpen) {
      if (preselectedDomain) {
        setSelectedMode('domain-drill');
        setSelectedDomain(preselectedDomain);
        setTypedQuestionCount('20');
      } else {
        setSelectedMode('full-simulated');
        setIncludePBQs(defaultIncludePBQs);
      }
    }
  }, [isOpen, preselectedDomain, defaultIncludePBQs]);

  if (!isOpen) return null;

  const parsedQuestionCount = Math.max(1, parseInt(typedQuestionCount, 10) || 10);

  // Compute live preview of weighted distribution
  const estimatedPbqCount = selectedMode === 'full-simulated'
    ? calculatePBQCountForExam(parsedQuestionCount, includePBQs)
    : 0;
  const remainingMC = Math.max(0, parsedQuestionCount - estimatedPbqCount);
  const distribution = calculateDomainDistribution(remainingMC);

  const handleLaunch = () => {
    onStartExam({
      mode: selectedMode,
      domainId: selectedMode === 'domain-drill' ? selectedDomain : undefined,
      questionCount: selectedMode === 'pbq-lab' ? QUESTION_BANK_STATS.totalPBQs : parsedQuestionCount,
      timeLimitMinutes: timeLimit,
      immediateFeedback,
      includePBQs: selectedMode === 'pbq-lab' ? true : includePBQs
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Configure Practice Exam</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {QUESTION_BANK_STATS.totalQuestions} Bank Questions ({QUESTION_BANK_STATS.totalMCQs} MCQ • {QUESTION_BANK_STATS.totalPBQs} PBQ)
                </span>
              </div>
              <p className="text-xs text-slate-400">CompTIA Security+ SY0-701 Weighted Simulator</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Mode Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Select Exam Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option 1: All Domains + PBQ */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('full-simulated');
                  setIncludePBQs(true);
                  if (timeLimit === 0) setTimeLimit(45);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'full-simulated' && includePBQs
                    ? 'border-red-500 bg-red-500/10 ring-1 ring-red-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-red-400" /> All Domains + PBQs
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">
                    Weighted + PBQ
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Full mock exam covering all 5 weighted domains (12% / 22% / 18% / 28% / 20%) plus hands-on PBQ simulations.
                </p>
              </button>

              {/* Option 2: All Domains WITHOUT PBQ (MCQ Only) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('full-simulated');
                  setIncludePBQs(false);
                  if (timeLimit === 0) setTimeLimit(45);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'full-simulated' && !includePBQs
                    ? 'border-emerald-500 bg-emerald-500/10 ring-1 ring-emerald-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <ListChecks className="w-4 h-4 text-emerald-400" /> All Domains (No PBQs)
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    100% MCQ Only
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Exam all 5 domains weighted by SY0-701 percentages using pure Multiple-Choice Questions without PBQs.
                </p>
              </button>

              {/* Option 3: Domain-Specific Option */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('domain-drill');
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'domain-drill'
                    ? 'border-blue-500 bg-blue-500/10 ring-1 ring-blue-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" /> Domain Specific Drill
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                    Single Domain
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Focus questions exclusively on one selected domain (1.0 to 5.0) to master weak areas.
                </p>
              </button>

              {/* Option 4: PBQs Only Option */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('pbq-lab');
                  setIncludePBQs(true);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'pbq-lab'
                    ? 'border-amber-500 bg-amber-500/10 ring-1 ring-amber-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-amber-400" /> PBQ Simulations Only
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    {QUESTION_BANK_STATS.totalPBQs} Scenarios
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  All {QUESTION_BANK_STATS.totalPBQs} Performance-Based Questions: threat matching, SIEM logs, Zero Trust, ACLs, MDM, and DRP.
                </p>
              </button>

              {/* Option 5: Missed Questions Drill */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('missed-drill');
                  setIncludePBQs(false);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'missed-drill'
                    ? 'border-rose-500 bg-rose-500/10 ring-1 ring-rose-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400" /> Review Missed Items
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                    {missedQuestionsCount} Missed
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Practice questions you previously got wrong to eliminate knowledge gaps.
                </p>
              </button>

              {/* Option 6: Bookmarked Questions Drill */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMode('bookmarked-drill');
                  setIncludePBQs(false);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  selectedMode === 'bookmarked-drill'
                    ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-purple-400" /> Bookmarked Items
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">
                    {bookmarkedQuestionsCount} Saved
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Drill questions you bookmarked during previous study or exam sessions.
                </p>
              </button>
            </div>
          </div>

          {/* Domain Picker if in Domain Drill Mode */}
          {selectedMode === 'domain-drill' && (
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-3">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Choose Specific Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {([1, 2, 3, 4, 5] as DomainId[]).map(dId => {
                  const dom = DOMAINS[dId];
                  const isSel = selectedDomain === dId;
                  const domainQCount = QUESTION_BANK_STATS.byDomain[dId];
                  return (
                    <button
                      key={dId}
                      type="button"
                      onClick={() => setSelectedDomain(dId)}
                      className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                        isSel 
                          ? 'border-blue-500 bg-blue-500/20 text-white font-semibold' 
                          : 'border-slate-700 bg-slate-800/70 text-slate-300 hover:bg-slate-700/60'
                      }`}
                    >
                      <div className="truncate pr-2">
                        <span className="font-mono text-slate-400 mr-1.5">{dId}.0</span>
                        <span>{dom.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-1.5 py-0.5 rounded shrink-0">
                        {domainQCount} Qs • {dom.weight}%
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Custom Question Count Section - User can type ANY number */}
          {selectedMode !== 'pbq-lab' && (
            <div className="space-y-3 p-4 rounded-xl bg-slate-850 border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-red-400" /> Type Number of Questions
                </label>
                <span className="text-[11px] text-slate-400">
                  Type any custom count (1 to {QUESTION_BANK_STATS.totalQuestions})
                </span>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <div className="relative flex-1 min-w-[160px]">
                  <input
                    type="number"
                    min="1"
                    max="250"
                    value={typedQuestionCount}
                    onChange={(e) => setTypedQuestionCount(e.target.value)}
                    placeholder="Enter question count..."
                    className="w-full text-sm font-mono font-bold px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-500 font-mono">
                    Questions
                  </span>
                </div>

                {/* Quick preset buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[10, 25, 50, 90, 150, QUESTION_BANK_STATS.totalMCQs].map((cnt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setTypedQuestionCount(cnt.toString())}
                      className={`px-2.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                        parsedQuestionCount === cnt
                          ? 'border-red-500 bg-red-500/20 text-white font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {cnt === QUESTION_BANK_STATS.totalMCQs ? `All (${cnt})` : cnt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic 5-Domain Weighted Breakdown for typed count */}
              {selectedMode === 'full-simulated' && (
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 flex items-center gap-1">
                      <Info className="w-3 h-3 text-red-400" /> SY0-701 Weighted Distribution for {parsedQuestionCount} Questions:
                    </span>
                    {includePBQs ? (
                      <span className="text-amber-400 font-mono font-bold">
                        {estimatedPbqCount} PBQs + {remainingMC} MCQs
                      </span>
                    ) : (
                      <span className="text-emerald-400 font-mono font-bold">
                        0 PBQs • 100% Multiple Choice ({remainingMC} MCQs)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 font-mono text-[10px]">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="text-slate-400 block">D1 (12%)</span>
                      <strong className="text-emerald-400 text-xs">{distribution[1]} MCQs</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="text-slate-400 block">D2 (22%)</span>
                      <strong className="text-rose-400 text-xs">{distribution[2]} MCQs</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="text-slate-400 block">D3 (18%)</span>
                      <strong className="text-blue-400 text-xs">{distribution[3]} MCQs</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="text-slate-400 block">D4 (28%)</span>
                      <strong className="text-amber-400 text-xs">{distribution[4]} MCQs</strong>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="text-slate-400 block">D5 (20%)</span>
                      <strong className="text-purple-400 text-xs">{distribution[5]} MCQs</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Time Limit Setting */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Exam Timer
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'Untimed', val: 0 },
                { label: '20 mins', val: 20 },
                { label: '45 mins', val: 45 },
                { label: '90 mins (Official)', val: 90 }
              ].map(t => (
                <button
                  key={t.val}
                  type="button"
                  onClick={() => setTimeLimit(t.val)}
                  className={`py-2 rounded-lg text-xs font-semibold border transition-all ${
                    timeLimit === t.val
                      ? 'border-amber-500 bg-amber-500/20 text-white font-bold'
                      : 'border-slate-800 bg-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Immediate Explanation Toggle - Highlighted as requested! */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <label className="flex items-start justify-between p-3.5 rounded-xl bg-gradient-to-r from-red-950/30 to-slate-800/40 border border-red-500/30 cursor-pointer hover:bg-slate-800/60 transition-colors">
              <div className="pr-4">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Show Correct Answer & Explanation After Every Question
                </span>
                <span className="text-xs text-slate-300 block mt-0.5 leading-relaxed">
                  As soon as you answer each question, immediately see the correct answer, detailed "Why" explanation, and CompTIA Exam Pro-Tips.
                </span>
              </div>
              <input
                type="checkbox"
                checked={immediateFeedback}
                onChange={(e) => setImmediateFeedback(e.target.checked)}
                className="mt-1 w-5 h-5 rounded text-red-600 focus:ring-red-500 bg-slate-900 border-slate-700"
              />
            </label>

            {selectedMode !== 'pbq-lab' && (
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 cursor-pointer hover:bg-slate-800/60 transition-colors">
                <div>
                  <span className="text-sm font-medium text-white block">Include Performance-Based Questions (PBQs)</span>
                  <span className="text-xs text-slate-400">
                    Include interactive hands-on simulations at the start of the session.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={includePBQs}
                  onChange={(e) => setIncludePBQs(e.target.checked)}
                  className="w-4 h-4 rounded text-red-600 focus:ring-red-500 bg-slate-900 border-slate-700"
                />
              </label>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-850">
          <div className="text-xs text-slate-400 font-mono">
            Ready:{' '}
            <strong className="text-white">
              {selectedMode === 'pbq-lab' ? `${QUESTION_BANK_STATS.totalPBQs} PBQs` : `${parsedQuestionCount} Questions`}
            </strong>
            {selectedMode !== 'pbq-lab' && (includePBQs ? ' • With PBQs' : ' • No PBQs (MCQ Only)')}
            {immediateFeedback ? ' • Instant Explanations ON' : ' • Exam Mode'}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleLaunch}
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-950/40 ring-1 ring-red-400/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Start {selectedMode === 'pbq-lab' ? `${QUESTION_BANK_STATS.totalPBQs} PBQs` : `${parsedQuestionCount} Q Exam`} &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
