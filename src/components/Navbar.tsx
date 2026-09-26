import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  BarChart3, 
  BookOpen, 
  Github, 
  Flame, 
  Bookmark, 
  Download, 
  Upload, 
  RotateCcw,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { UserStats } from '../types/exam';
import { exportUserData, importUserData, resetUserData } from '../utils/storage';

interface NavbarProps {
  currentTab: 'dashboard' | 'exam' | 'pbq-lab' | 'reference' | 'guide';
  onSelectTab: (tab: 'dashboard' | 'exam' | 'pbq-lab' | 'reference' | 'guide') => void;
  userStats: UserStats;
  onRefreshStats: () => void;
  onStartExamClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  userStats,
  onRefreshStats,
  onStartExamClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDataMenu, setShowDataMenu] = useState(false);

  const handleExport = () => {
    const data = exportUserData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-plus-sy0701-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setShowDataMenu(false);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          const ok = importUserData(content);
          if (ok) {
            onRefreshStats();
            alert('Progress data successfully imported!');
          } else {
            alert('Failed to parse backup JSON file.');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
    setShowDataMenu(false);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress and exam attempts? This cannot be undone.')) {
      resetUserData();
      onRefreshStats();
      setShowDataMenu(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div 
            onClick={() => onSelectTab('dashboard')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 flex items-center justify-center shadow-lg shadow-red-950/40 ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-lg">Sec+ Trainer</span>
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                  SY0-701
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">CompTIA Security+ Exam & PBQ Simulator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'dashboard' 
                  ? 'bg-slate-800 text-white border border-slate-700' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              Dashboard
            </button>

            <button
              onClick={() => onSelectTab('pbq-lab')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'pbq-lab' 
                  ? 'bg-slate-800 text-white border border-slate-700' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Terminal className="w-4 h-4 text-rose-400" />
              PBQ Lab
              <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.2 rounded font-mono">Hands-on</span>
            </button>

            <button
              onClick={() => onSelectTab('reference')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'reference' 
                  ? 'bg-slate-800 text-white border border-slate-700' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              Cheat Sheet & Ports
            </button>

            <button
              onClick={() => onSelectTab('guide')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTab === 'guide' 
                  ? 'bg-slate-800 text-white border border-slate-700' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Github className="w-4 h-4 text-amber-400" />
              GitHub & Local Run
            </button>
          </nav>

          {/* Right Action Widgets */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Streak Counter */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-amber-300 font-semibold" title="Daily Study Streak">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{userStats.studyStreakDays}d streak</span>
            </div>

            {/* Readiness Index */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300" title="Overall Exam Readiness">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Readiness: <strong className="text-white">{userStats.readinessScore}%</strong></span>
            </div>

            {/* Data Menu dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDataMenu(!showDataMenu)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Manage Progress & Backups"
              >
                <Download className="w-4 h-4" />
              </button>

              {showDataMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-slate-800 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                    Local Progress Data
                  </div>
                  <button
                    onClick={handleExport}
                    className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-400" /> Export Backup (JSON)
                  </button>
                  <button
                    onClick={handleImport}
                    className="w-full text-left px-3 py-2 hover:bg-slate-800 text-slate-200 flex items-center gap-2"
                  >
                    <Upload className="w-3.5 h-3.5 text-emerald-400" /> Import Backup (JSON)
                  </button>
                  <button
                    onClick={handleReset}
                    className="w-full text-left px-3 py-2 hover:bg-red-500/10 text-red-400 flex items-center gap-2 border-t border-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-red-400" /> Reset All Progress
                  </button>
                </div>
              )}
            </div>

            {/* Launch Exam CTA */}
            <button
              onClick={onStartExamClick}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-900/30 ring-1 ring-red-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Exam Drill
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onStartExamClick}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-600 text-white"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 pt-2 pb-4 space-y-2">
          <button
            onClick={() => { onSelectTab('dashboard'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" /> Dashboard & Analytics
          </button>
          <button
            onClick={() => { onSelectTab('pbq-lab'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Terminal className="w-4 h-4 text-rose-400" /> PBQ Simulation Lab
          </button>
          <button
            onClick={() => { onSelectTab('reference'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <BookOpen className="w-4 h-4 text-blue-400" /> Cheat Sheet & Ports
          </button>
          <button
            onClick={() => { onSelectTab('guide'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Github className="w-4 h-4 text-amber-400" /> GitHub & Local Run Guide
          </button>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-3">
            <span>Streak: {userStats.studyStreakDays}d</span>
            <span>Readiness: {userStats.readinessScore}%</span>
            <button onClick={handleExport} className="text-blue-400 underline">Export Data</button>
          </div>
        </div>
      )}
    </header>
  );
};
