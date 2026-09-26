/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/Dashboard/DashboardView';
import { ExamRunner } from './components/Exam/ExamRunner';
import { ExamResults } from './components/Exam/ExamResults';
import { ExamConfigModal } from './components/Exam/ExamConfigModal';
import { PBQLabView } from './components/PBQLab/PBQLabView';
import { ReferenceDrawer } from './components/Reference/ReferenceDrawer';
import { GitHubGuideModal } from './components/Guide/GitHubGuideModal';
import { 
  AnyQuestion, 
  DomainId, 
  ExamResultSummary, 
  ExamSessionConfig, 
  UserStats 
} from './types/exam';
import { generateExamQuestions } from './data/questionsIndex';
import { 
  loadUserStats, 
  recordExamCompletion, 
  toggleBookmarkQuestion 
} from './utils/storage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'dashboard' | 'exam' | 'pbq-lab' | 'reference' | 'guide'>('dashboard');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats);

  // Modals & drawers
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [preselectedDomain, setPreselectedDomain] = useState<DomainId | undefined>(undefined);
  const [defaultIncludePBQs, setDefaultIncludePBQs] = useState<boolean>(true);

  // Active exam session
  const [activeConfig, setActiveConfig] = useState<ExamSessionConfig | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<AnyQuestion[]>([]);
  const [examResult, setExamResult] = useState<ExamResultSummary | null>(null);

  const refreshStats = () => {
    setUserStats(loadUserStats());
  };

  const startExamWithConfig = (config: ExamSessionConfig) => {
    const questions = generateExamQuestions({
      mode: config.mode,
      domainId: config.domainId,
      questionCount: config.questionCount,
      includePBQs: config.includePBQs,
      missedIds: userStats.incorrectQuestionIds,
      bookmarkedIds: userStats.bookmarkedQuestionIds
    });

    if (questions.length === 0) {
      alert('No questions matched the selected criteria.');
      return;
    }

    setActiveConfig(config);
    setActiveQuestions(questions);
    setExamResult(null);
    setCurrentTab('exam');
  };

  const handleFinishExam = (result: ExamResultSummary) => {
    const updatedStats = recordExamCompletion(result);
    setUserStats(updatedStats);
    setExamResult(result);
  };

  const handleExitExam = () => {
    if (confirm('Are you sure you want to abandon the current exam session? Unsaved progress will be lost.')) {
      setActiveConfig(null);
      setActiveQuestions([]);
      setExamResult(null);
      setCurrentTab('dashboard');
    }
  };

  const handleToggleBookmark = (qId: string) => {
    toggleBookmarkQuestion(qId);
    refreshStats();
  };

  const handleStartDomainDrill = (domainId: DomainId) => {
    setPreselectedDomain(domainId);
    setDefaultIncludePBQs(true);
    setIsConfigModalOpen(true);
  };

  const handleStartFullExam = () => {
    setPreselectedDomain(undefined);
    setDefaultIncludePBQs(true);
    setIsConfigModalOpen(true);
  };

  const handleStartExamWithoutPBQs = () => {
    setPreselectedDomain(undefined);
    setDefaultIncludePBQs(false);
    setIsConfigModalOpen(true);
  };

  const handleDrillMissed = () => {
    startExamWithConfig({
      mode: 'missed-drill',
      questionCount: Math.min(userStats.incorrectQuestionIds.length || 10, 25),
      timeLimitMinutes: 0,
      immediateFeedback: true,
      includePBQs: false
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Top Navigation Bar (Hidden during active in-progress exam for focused test experience) */}
      {!(currentTab === 'exam' && activeConfig && !examResult) && (
        <Navbar
          currentTab={currentTab}
          onSelectTab={(tab) => {
            if (tab === 'reference') {
              setIsReferenceOpen(true);
            } else if (tab === 'guide') {
              setIsGuideOpen(true);
            } else {
              setCurrentTab(tab);
            }
          }}
          userStats={userStats}
          onRefreshStats={refreshStats}
          onStartExamClick={() => {
            setPreselectedDomain(undefined);
            setDefaultIncludePBQs(true);
            setIsConfigModalOpen(true);
          }}
        />
      )}

      {/* Main View Router */}
      <div className="flex-1">
        {/* Active Exam in progress */}
        {currentTab === 'exam' && activeConfig && !examResult && (
          <ExamRunner
            config={activeConfig}
            questions={activeQuestions}
            onFinishExam={handleFinishExam}
            onExitExam={handleExitExam}
            onOpenReference={() => setIsReferenceOpen(true)}
            bookmarkedIds={userStats.bookmarkedQuestionIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* Exam Results Screen */}
        {currentTab === 'exam' && examResult && (
          <ExamResults
            result={examResult}
            questions={activeQuestions}
            onRetakeMissed={() => {
              const missedInThisExam = activeQuestions
                .filter(q => examResult.userResponses[q.id]?.isCorrect === false)
                .map(q => q.id);
              
              startExamWithConfig({
                mode: 'missed-drill',
                questionCount: missedInThisExam.length,
                timeLimitMinutes: 0,
                immediateFeedback: true,
                includePBQs: false
              });
            }}
            onNewExam={() => {
              setExamResult(null);
              setIsConfigModalOpen(true);
            }}
            onReturnDashboard={() => {
              setActiveConfig(null);
              setActiveQuestions([]);
              setExamResult(null);
              setCurrentTab('dashboard');
            }}
            bookmarkedIds={userStats.bookmarkedQuestionIds}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {/* Dashboard View */}
        {currentTab === 'dashboard' && (
          <DashboardView
            stats={userStats}
            onStartFullExam={handleStartFullExam}
            onStartExamWithoutPBQs={handleStartExamWithoutPBQs}
            onStartDomainDrill={handleStartDomainDrill}
            onOpenPBQLab={() => setCurrentTab('pbq-lab')}
            onDrillMissed={handleDrillMissed}
            onOpenReference={() => setIsReferenceOpen(true)}
            onOpenConfigModal={() => {
              setPreselectedDomain(undefined);
              setDefaultIncludePBQs(true);
              setIsConfigModalOpen(true);
            }}
          />
        )}

        {/* Standalone PBQ Lab View */}
        {currentTab === 'pbq-lab' && <PBQLabView />}
      </div>

      {/* Modals & Slide-overs */}
      <ExamConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onStartExam={startExamWithConfig}
        missedQuestionsCount={userStats.incorrectQuestionIds.length}
        bookmarkedQuestionsCount={userStats.bookmarkedQuestionIds.length}
        preselectedDomain={preselectedDomain}
        defaultIncludePBQs={defaultIncludePBQs}
      />

      <ReferenceDrawer
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      <GitHubGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Application Footer */}
      {!(currentTab === 'exam' && activeConfig && !examResult) && (
        <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-400">CompTIA Security+ SY0-701 Trainer</span>
              <span>•</span>
              <span>Local & Offline Ready</span>
              <span>•</span>
              <span>Passing Cut Score: 750 / 900</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsGuideOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                GitHub Setup Instructions
              </button>
              <button
                onClick={() => setIsReferenceOpen(true)}
                className="hover:text-slate-300 transition-colors"
              >
                Port & Acronym Reference
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
