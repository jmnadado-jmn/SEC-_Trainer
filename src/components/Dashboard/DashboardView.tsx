import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  Terminal, 
  Flame, 
  Award, 
  Clock, 
  ArrowRight, 
  AlertTriangle, 
  BookOpen, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Sparkles,
  TrendingUp,
  Activity,
  Briefcase,
  ListChecks,
  Mail
} from 'lucide-react';
import { DomainId, DOMAINS, ExamResultSummary, UserStats } from '../../types/exam';
import { formatTime } from '../../utils/scoring';
import { QUESTION_BANK_STATS } from '../../data/questionsIndex';
import { EmailResultModal } from '../Exam/EmailResultModal';

interface DashboardViewProps {
  stats: UserStats;
  onStartFullExam: () => void;
  onStartExamWithoutPBQs: () => void;
  onStartDomainDrill: (domainId: DomainId) => void;
  onOpenPBQLab: () => void;
  onDrillMissed: () => void;
  onOpenReference: () => void;
  onOpenConfigModal: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  stats,
  onStartFullExam,
  onStartExamWithoutPBQs,
  onStartDomainDrill,
  onOpenPBQLab,
  onDrillMissed,
  onOpenReference,
  onOpenConfigModal
}) => {
  const isPassingReady = stats.readinessScore >= 83;
  const missedCount = stats.incorrectQuestionIds.length;
  const [selectedExamForEmail, setSelectedExamForEmail] = useState<ExamResultSummary | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner / Hero Greeting */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-red-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-red-500/20 text-red-400 border border-red-500/30">
                CompTIA Security+ SY0-701 Training Engine
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                {QUESTION_BANK_STATS.totalQuestions} Total Questions ({QUESTION_BANK_STATS.totalMCQs} MCQs • {QUESTION_BANK_STATS.totalPBQs} PBQs)
              </span>
              <span className="flex items-center gap-1 text-xs text-amber-400 font-mono font-semibold">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {stats.studyStreakDays} Day Streak
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Master Security+ with Authentic PBQs & Domain Drills
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Targeted simulation designed to mirror the Pearson VUE testing environment. Choose all 5 weighted domains with interactive PBQs, exam all domains without PBQs (100% MCQ), or drill individual domains with instant answer explanations.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartFullExam}
                className="px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-xl shadow-red-950/50 ring-1 ring-red-400/40 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Target className="w-4 h-4" /> Exam All Domains + PBQs
              </button>

              <button
                onClick={onStartExamWithoutPBQs}
                className="px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-950/50 ring-1 ring-emerald-400/40 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ListChecks className="w-4 h-4" /> Exam All (Without PBQs)
              </button>

              <button
                onClick={onOpenPBQLab}
                className="px-5 py-3 rounded-xl text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 shadow flex items-center gap-2 transition-colors"
              >
                <Terminal className="w-4 h-4 text-amber-400" /> PBQ Lab ({QUESTION_BANK_STATS.totalPBQs} Sims)
              </button>

              {missedCount > 0 && (
                <button
                  onClick={onDrillMissed}
                  className="px-4 py-3 rounded-xl text-sm font-semibold bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-800/60 flex items-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Review Missed ({missedCount})
                </button>
              )}
            </div>
          </div>

          {/* Exam Readiness Dial */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-800 stroke-[10] fill-none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className={`stroke-[10] fill-none transition-all duration-1000 ease-out stroke-linecap-round ${
                    isPassingReady ? 'stroke-emerald-500' : 'stroke-amber-500'
                  }`}
                  strokeDasharray={`${(stats.readinessScore / 100) * 264} 264`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-white font-mono">{stats.readinessScore}%</span>
                <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Readiness</span>
              </div>
            </div>

            <div className="mt-3">
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isPassingReady ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {isPassingReady ? 'Exam Ready (≥ 83%)' : 'Needs Practice (< 83%)'}
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Benchmark: 750 / 900 CompTIA pass cut
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metric Quick Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono">
              {stats.totalQuestionsAnswered}
            </div>
            <div className="text-xs text-slate-400 font-medium">Questions Attempted</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono">
              {stats.overallAccuracy}%
            </div>
            <div className="text-xs text-slate-400 font-medium">Overall Accuracy</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono">
              {stats.totalExamsCompleted}
            </div>
            <div className="text-xs text-slate-400 font-medium">Exams Completed</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white font-mono">
              {missedCount}
            </div>
            <div className="text-xs text-slate-400 font-medium">Missed Questions to Fix</div>
          </div>
        </div>
      </div>

      {/* Domain Mastery Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-red-500" /> SY0-701 Domain Breakdown
            </h2>
            <p className="text-xs text-slate-400">
              Exam objective distribution according to official CompTIA Security+ syllabus weights.
            </p>
          </div>

          <button
            onClick={onOpenConfigModal}
            className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1"
          >
            Custom Practice Settings &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {([1, 2, 3, 4, 5] as DomainId[]).map(dId => {
            const dom = DOMAINS[dId];
            const dStat = stats.domainStats[dId] || { attempted: 0, correct: 0 };
            const acc = dStat.attempted > 0 ? Math.round((dStat.correct / dStat.attempted) * 100) : 0;
            const isProficient = dStat.attempted >= 5 && acc >= 80;

            const iconMap: Record<number, React.ReactNode> = {
              1: <Shield className="w-5 h-5 text-emerald-400" />,
              2: <AlertTriangle className="w-5 h-5 text-rose-400" />,
              3: <Layers className="w-5 h-5 text-blue-400" />,
              4: <Activity className="w-5 h-5 text-amber-400" />,
              5: <Briefcase className="w-5 h-5 text-purple-400" />
            };

            return (
              <div 
                key={dId}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center">
                        {iconMap[dId]}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Domain {dId}.0 ({dom.weight}%) • {QUESTION_BANK_STATS.byDomain[dId]} MCQs
                        </span>
                        <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                          {dom.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {dom.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">
                      Mastery ({dStat.attempted} attempted)
                    </span>
                    <span className={`font-mono font-bold ${
                      dStat.attempted === 0 ? 'text-slate-500' : isProficient ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {dStat.attempted > 0 ? `${acc}%` : 'Untested'}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isProficient ? 'bg-emerald-500' : acc > 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${dStat.attempted > 0 ? acc : 0}%` }}
                    />
                  </div>

                  <button
                    onClick={() => onStartDomainDrill(dId)}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 border border-slate-700 hover:border-red-500 transition-all flex items-center justify-center gap-1.5"
                  >
                    Drill Domain {dId}.0 ({QUESTION_BANK_STATS.byDomain[dId]} Qs) <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick PBQ Lab card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300">
                  {QUESTION_BANK_STATS.totalPBQs} Simulations
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                Interactive PBQ Simulations
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Practice all {QUESTION_BANK_STATS.totalPBQs} hands-on scenarios: threat matching, SIEM log forensics, PCI DSS & Zero Trust architecture, firewall ACLs, MDM, and DRP.
              </p>
            </div>

            <button
              onClick={onOpenPBQLab}
              className="w-full py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow transition-all flex items-center justify-center gap-1.5"
            >
              Open PBQ Lab ({QUESTION_BANK_STATS.totalPBQs} Scenarios) &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Recent Exam History */}
      {stats.recentExams && stats.recentExams.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> Recent Exam Attempts
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedExamForEmail(stats.recentExams[0])}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Email Latest Result
              </button>
              <span className="text-xs text-slate-400 font-mono">
                {stats.recentExams.length} sessions logged
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Mode</th>
                  <th className="py-2.5 px-3">Items</th>
                  <th className="py-2.5 px-3">Accuracy</th>
                  <th className="py-2.5 px-3">Scaled Score</th>
                  <th className="py-2.5 px-3">Result</th>
                  <th className="py-2.5 px-3 text-right">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {stats.recentExams.slice(0, 5).map((exam, eIdx) => (
                  <tr key={eIdx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="py-3 px-3 text-slate-300">
                      {new Date(exam.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-3 text-white font-sans font-semibold capitalize">
                      {exam.config.mode.replace('-', ' ')}
                    </td>
                    <td className="py-3 px-3 text-slate-400">
                      {exam.correctCount} / {exam.totalQuestions}
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      {exam.percentage}%
                    </td>
                    <td className="py-3 px-3 text-white font-bold">
                      {exam.scaledScore} / 900
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        exam.passed 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}>
                        {exam.passed ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-sans">
                      <button
                        onClick={() => setSelectedExamForEmail(exam)}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 transition-colors inline-flex items-center gap-1"
                        title="Send this exam result to email"
                      >
                        <Mail className="w-3 h-3" /> Email
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <EmailResultModal
        isOpen={Boolean(selectedExamForEmail)}
        onClose={() => setSelectedExamForEmail(null)}
        result={selectedExamForEmail}
      />
    </div>
  );
};
