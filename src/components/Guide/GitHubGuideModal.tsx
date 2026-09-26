import React, { useState } from 'react';
import { 
  Github, 
  Terminal, 
  Copy, 
  Check, 
  X, 
  Download, 
  ExternalLink, 
  FolderGit2, 
  Cpu, 
  ShieldCheck,
  Code
} from 'lucide-react';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const CLONE_CODE = `# 1. Clone the repository to your local machine
git clone https://github.com/your-username/security-plus-trainer.git

# 2. Navigate into the project directory
cd security-plus-trainer

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev

# 5. Open in your browser
# Navigate to http://localhost:3000`;

  const GIT_INIT_CODE = `# Initialize Git in this project directory (if not already done)
git init
git add .
git commit -m "Initial commit: CompTIA Security+ SY0-701 Exam Trainer & PBQ Simulator"

# Add your GitHub repository remote
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# Push the code to GitHub
git push -u origin main`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">GitHub Upload & Local Setup Guide</h2>
              <p className="text-xs text-slate-400">Step-by-step instructions to run locally and deploy to GitHub</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-slate-300">
          {/* Section 1: Running Locally */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" /> 1. How to Run Locally in 60 Seconds
            </h3>
            <p className="text-slate-400 leading-relaxed">
              This application is built with React 19, TypeScript, Vite, and Tailwind CSS. It requires no external database setup—everything runs offline or locally in the browser with persistent LocalStorage for user progress.
            </p>

            <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-emerald-400">
              <pre className="whitespace-pre-wrap overflow-x-auto">{CLONE_CODE}</pre>
              <button
                onClick={() => copyToClipboard(CLONE_CODE, 'clone')}
                className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors font-sans text-xs"
              >
                {copiedId === 'clone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === 'clone' ? 'Copied' : 'Copy Commands'}
              </button>
            </div>
          </div>

          {/* Section 2: Uploading to GitHub */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-400" /> 2. Uploading to Your GitHub Repository
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Create a new repository on <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub.com</a>, then run the commands below in your project folder to push the codebase:
            </p>

            <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-blue-300">
              <pre className="whitespace-pre-wrap overflow-x-auto">{GIT_INIT_CODE}</pre>
              <button
                onClick={() => copyToClipboard(GIT_INIT_CODE, 'git')}
                className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors font-sans text-xs"
              >
                {copiedId === 'git' ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === 'git' ? 'Copied' : 'Copy Git Script'}
              </button>
            </div>
          </div>

          {/* Section 3: Architecture & Features */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" /> 3. Architecture & Features Overview
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 space-y-1">
                <span className="font-bold text-white">Full-Length CompTIA Simulated Exams</span>
                <p className="text-slate-400 text-[11px]">
                  Timed 90-minute simulation with PBQs first, realistic pass/fail threshold (750/900 points), and flagged review navigation.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 space-y-1">
                <span className="font-bold text-white">Interactive PBQ Simulation Lab</span>
                <p className="text-slate-400 text-[11px]">
                  Log analysis quarantine, threat mitigation matching, cloud network architecture diagramming, and dark web password audits.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 space-y-1">
                <span className="font-bold text-white">All 5 SY0-701 Exam Domains</span>
                <p className="text-slate-400 text-[11px]">
                  Domain 1.0 (Concepts), Domain 2.0 (Threats), Domain 3.0 (Architecture), Domain 4.0 (Operations), and Domain 5.0 (Governance).
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-850 border border-slate-800 space-y-1">
                <span className="font-bold text-white">Zero Cloud Setup / Privacy First</span>
                <p className="text-slate-400 text-[11px]">
                  All test history, streaks, and bookmarks stay local in the browser. Easily export or import JSON backups at any time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-850">
          <span className="text-xs text-slate-400">
            A comprehensive <strong className="text-white">README.md</strong> is also saved in the root folder.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
