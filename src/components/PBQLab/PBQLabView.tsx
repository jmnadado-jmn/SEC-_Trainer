import React, { useState } from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Shield, 
  Eye, 
  Lock,
  Layers,
  Key,
  Server
} from 'lucide-react';
import { ALL_PBQS } from '../../data/questionsIndex';
import { evaluateQuestionAnswer } from '../../utils/scoring';
import { PBQViewer } from '../Exam/PBQViewer';

export const PBQLabView: React.FC = () => {
  const [activePbqIndex, setActivePbqIndex] = useState(0);
  const [pbqAnswers, setPbqAnswers] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<Record<string, { isCorrect: boolean; checked: boolean }>>({});

  const currentPbq = ALL_PBQS[activePbqIndex];
  const currentAnswer = pbqAnswers[currentPbq.id] || '';
  const currentStatus = submittedStatus[currentPbq.id] || { isCorrect: false, checked: false };

  const handleSaveAnswer = (serialized: string) => {
    setPbqAnswers(prev => ({ ...prev, [currentPbq.id]: serialized }));
  };

  const handleCheckSolution = () => {
    const isCorrect = evaluateQuestionAnswer(currentPbq, {
      questionId: currentPbq.id,
      selectedAnswers: [currentAnswer],
      isFlagged: false,
      strikethroughs: [],
      timeSpentSeconds: 0
    });

    setSubmittedStatus(prev => ({
      ...prev,
      [currentPbq.id]: { isCorrect, checked: true }
    }));
  };

  const handleResetCurrent = () => {
    setPbqAnswers(prev => ({ ...prev, [currentPbq.id]: '' }));
    setSubmittedStatus(prev => ({ ...prev, [currentPbq.id]: { isCorrect: false, checked: false } }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* PBQ Lab Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> Hands-On Simulation Laboratory
              </span>
              <span className="text-xs text-slate-400 font-mono">CompTIA SY0-701</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Performance-Based Question (PBQ) Practice
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              PBQs test practical cybersecurity implementation skills: threat matching, SIEM log triage, isolation of compromised endpoints, PCI DSS cloud architectures, and password forensics.
            </p>
          </div>
        </div>

        {/* Tab Navigation for Scenarios */}
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {ALL_PBQS.map((pbq, idx) => {
            const isSel = activePbqIndex === idx;
            const status = submittedStatus[pbq.id];

            return (
              <button
                key={pbq.id}
                onClick={() => setActivePbqIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all relative ${
                  isSel
                    ? 'border-amber-500 bg-amber-500/10 text-white ring-1 ring-amber-500/40'
                    : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase">
                    Simulation {idx + 1}
                  </span>
                  {status?.checked && (
                    <span className={`w-2 h-2 rounded-full ${status.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                  )}
                </div>
                <div className="text-xs font-bold text-slate-200 line-clamp-1">
                  {pbq.pbqData.title.split(':')[1] || pbq.pbqData.title}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">
                  Domain {pbq.domainId}.0
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Simulation */}
      <div className="space-y-6">
        <PBQViewer
          question={currentPbq}
          savedAnswer={currentAnswer}
          onSaveAnswer={handleSaveAnswer}
          showExplanation={currentStatus.checked}
        />

        {/* Action Controls for PBQ Lab */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={handleCheckSolution}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-950/40 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <CheckCircle2 className="w-4 h-4" /> Grade & Reveal Official Solution
            </button>

            <button
              onClick={handleResetCurrent}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Simulation
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={activePbqIndex === 0}
              onClick={() => setActivePbqIndex(prev => Math.max(0, prev - 1))}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-colors"
            >
              &larr; Prev PBQ
            </button>
            <button
              disabled={activePbqIndex === ALL_PBQS.length - 1}
              onClick={() => setActivePbqIndex(prev => Math.min(ALL_PBQS.length - 1, prev + 1))}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 transition-colors"
            >
              Next PBQ &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
