import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Mail,
  Send,
  Copy,
  Check,
  Download,
  FileText,
  Sparkles,
  User,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Info
} from 'lucide-react';
import { AnyQuestion, DOMAINS, DomainId, ExamResultSummary } from '../../types/exam';
import { ALL_QUESTIONS } from '../../data/questionsIndex';
import { formatTime } from '../../utils/scoring';

interface EmailResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: ExamResultSummary | null;
  questions?: AnyQuestion[];
}

const STORAGE_EMAIL_KEY = 'comptia_secplus_701_recipient_email';
const STORAGE_NAME_KEY = 'comptia_secplus_701_candidate_name';

export const EmailResultModal: React.FC<EmailResultModalProps> = ({
  isOpen,
  onClose,
  result,
  questions
}) => {
  const [recipientEmail, setRecipientEmail] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_EMAIL_KEY) || '';
    } catch {
      return '';
    }
  });

  const [candidateName, setCandidateName] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_NAME_KEY) || '';
    } catch {
      return '';
    }
  });

  const [customNote, setCustomNote] = useState<string>('');
  const [includeDomainBreakdown, setIncludeDomainBreakdown] = useState<boolean>(true);
  const [includeMissedQuestions, setIncludeMissedQuestions] = useState<boolean>(true);
  const [includeCorrectQuestions, setIncludeCorrectQuestions] = useState<boolean>(false);
  const [copiedState, setCopiedState] = useState<'none' | 'body' | 'subject' | 'launched'>('none');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_EMAIL_KEY, recipientEmail);
    } catch {}
  }, [recipientEmail]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_NAME_KEY, candidateName);
    } catch {}
  }, [candidateName]);

  // Resolve questions either from passed prop or from ALL_QUESTIONS using userResponses keys
  const resolvedQuestions = useMemo(() => {
    if (!result) return [];
    if (questions && questions.length > 0) return questions;
    const responseIds = Object.keys(result.userResponses || {});
    if (responseIds.length === 0) return [];
    return ALL_QUESTIONS.filter(q => responseIds.includes(q.id));
  }, [result, questions]);

  const emailSubject = useMemo(() => {
    if (!result) return '';
    const status = result.passed ? 'PASSED' : 'STUDY REPORT';
    const namePart = candidateName.trim() ? ` - ${candidateName.trim()}` : '';
    return `[CompTIA Security+ SY0-701] ${status}: ${result.scaledScore}/900 (${result.percentage}%)${namePart}`;
  }, [result, candidateName]);

  // Build full email body text
  const buildEmailBody = (maxQuestionsLimit?: number) => {
    if (!result) return '';
    const lines: string[] = [];
    const examDate = new Date(result.date).toLocaleString();
    const statusLabel = result.passed
      ? 'PASSED (Exceeds 750/900 Cut Score)'
      : 'NEEDS ADDITIONAL STUDY (Below 750/900 Cut Score)';

    lines.push('==========================================================');
    lines.push('   COMPTIA SECURITY+ (SY0-701) PRACTICE EXAM SCORE REPORT');
    lines.push('==========================================================');
    if (candidateName.trim()) {
      lines.push(`Candidate:        ${candidateName.trim()}`);
    }
    lines.push(`Date Completed:   ${examDate}`);
    lines.push(`Exam Mode:        ${result.config.mode.replace(/-/g, ' ').toUpperCase()}`);
    lines.push(`Status:           ${statusLabel}`);
    lines.push(`Scaled Score:     ${result.scaledScore} / 900 (Passing Standard: 750)`);
    lines.push(`Accuracy:         ${result.correctCount} / ${result.totalQuestions} (${result.percentage}%)`);
    lines.push(`Time Spent:       ${formatTime(result.timeTakenSeconds)}`);
    lines.push('----------------------------------------------------------');

    if (customNote.trim()) {
      lines.push('');
      lines.push('CANDIDATE / INSTRUCTOR NOTES:');
      lines.push(customNote.trim());
      lines.push('----------------------------------------------------------');
    }

    if (includeDomainBreakdown) {
      lines.push('');
      lines.push('SY0-701 DOMAIN MASTERY BREAKDOWN:');
      ([1, 2, 3, 4, 5] as DomainId[]).forEach(dId => {
        const dom = DOMAINS[dId];
        const dScore = result.domainScores[dId];
        if (dScore && dScore.total > 0) {
          const readiness = dScore.percentage >= 80 ? '[PROFICIENT]' : '[REVIEW NEEDED]';
          lines.push(
            `  • Domain ${dId}.0: ${dom.name} (${dom.weight}% Exam Weight)\n    Score: ${dScore.correct}/${dScore.total} (${dScore.percentage}%) ${readiness}`
          );
        } else {
          lines.push(`  • Domain ${dId}.0: ${dom.name} (${dom.weight}% Exam Weight) - Not Tested`);
        }
      });
      lines.push('----------------------------------------------------------');
    }

    if (resolvedQuestions.length > 0 && (includeMissedQuestions || includeCorrectQuestions)) {
      const missedList = resolvedQuestions.filter(
        q => result.userResponses[q.id]?.isCorrect === false
      );
      const correctList = resolvedQuestions.filter(
        q => result.userResponses[q.id]?.isCorrect === true
      );

      if (includeMissedQuestions && missedList.length > 0) {
        lines.push('');
        lines.push(`MISSED QUESTIONS & EXPLANATIONS (${missedList.length} Items):`);
        const listToRender = maxQuestionsLimit
          ? missedList.slice(0, maxQuestionsLimit)
          : missedList;

        listToRender.forEach((q, idx) => {
          lines.push('');
          lines.push(`${idx + 1}. [Domain ${q.domainId}.0 - ${q.subtopic}] ${q.prompt}`);
          if (q.type !== 'pbq') {
            const userSel = result.userResponses[q.id]?.selectedAnswers || [];
            const userText =
              userSel.length > 0
                ? userSel
                    .map(id => {
                      const opt = q.options.find(o => o.id === id);
                      return opt ? `${id}) ${opt.text}` : id;
                    })
                    .join(' | ')
                : 'No answer selected';
            const correctText = q.correctAnswers
              .map(id => {
                const opt = q.options.find(o => o.id === id);
                return opt ? `${id}) ${opt.text}` : id;
              })
              .join(' | ');
            lines.push(`   Your Answer:    ${userText}`);
            lines.push(`   Correct Answer: ${correctText}`);
          } else {
            lines.push(`   Type:           Interactive PBQ Simulation (${q.pbqData.title})`);
          }
          lines.push(`   Explanation:    ${q.explanation}`);
        });

        if (maxQuestionsLimit && missedList.length > maxQuestionsLimit) {
          lines.push('');
          lines.push(
            `   ... (+${missedList.length - maxQuestionsLimit} additional missed items. Paste from clipboard for full list.)`
          );
        }
        lines.push('----------------------------------------------------------');
      }

      if (includeCorrectQuestions && correctList.length > 0) {
        lines.push('');
        lines.push(`CORRECTLY ANSWERED ITEMS (${correctList.length} Items):`);
        const listToRender = maxQuestionsLimit
          ? correctList.slice(0, maxQuestionsLimit)
          : correctList;
        listToRender.forEach((q, idx) => {
          lines.push(`  ✓ ${idx + 1}. [D${q.domainId}.0] ${q.subtopic}: ${q.prompt}`);
        });
        if (maxQuestionsLimit && correctList.length > maxQuestionsLimit) {
          lines.push(`  ... (+${correctList.length - maxQuestionsLimit} more correct items)`);
        }
        lines.push('----------------------------------------------------------');
      }
    }

    lines.push('');
    lines.push('Generated by CompTIA Security+ (SY0-701) Interactive Exam Simulator');
    return lines.join('\n');
  };

  const fullEmailBody = useMemo(
    () => buildEmailBody(),
    [
      result,
      candidateName,
      customNote,
      includeDomainBreakdown,
      includeMissedQuestions,
      includeCorrectQuestions,
      resolvedQuestions
    ]
  );

  // URL-safe body for mailto / Gmail / Outlook links (keeps URL under browser query string limits)
  const urlSafeEmailBody = useMemo(() => {
    if (fullEmailBody.length <= 1500) return fullEmailBody;
    const compact = buildEmailBody(3);
    if (compact.length <= 1600) return compact;
    return compact.slice(0, 1550) + '\n\n[Full report copied to your clipboard — press Ctrl+V / Cmd+V to paste all items]';
  }, [fullEmailBody]);

  if (!isOpen || !result) return null;

  const copyToClipboard = async (text: string, type: 'body' | 'subject' | 'launched') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(type);
      setTimeout(() => setCopiedState('none'), 3500);
    } catch {
      // Fallback textarea copy
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedState(type);
      setTimeout(() => setCopiedState('none'), 3500);
    }
  };

  const handleDownloadHtmlReport = () => {
    const examDate = new Date(result.date).toLocaleString();
    const missedList = resolvedQuestions.filter(
      q => result.userResponses[q.id]?.isCorrect === false
    );

    const domainRowsHtml = ([1, 2, 3, 4, 5] as DomainId[])
      .map(dId => {
        const dom = DOMAINS[dId];
        const dScore = result.domainScores[dId];
        const hasData = dScore && dScore.total > 0;
        const pct = hasData ? dScore.percentage : 0;
        return `
          <tr>
            <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;">Domain ${dId}.0: ${dom.name}</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:center;">${dom.weight}%</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:center;">${hasData ? `${dScore.correct} / ${dScore.total}` : 'N/A'}</td>
            <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:700;color:${!hasData ? '#64748b' : pct >= 80 ? '#059669' : '#e11d48'};">
              ${hasData ? `${pct}%` : 'Not Tested'}
            </td>
          </tr>
        `;
      })
      .join('');

    const missedQuestionsHtml =
      includeMissedQuestions && missedList.length > 0
        ? `
          <h2 style="color:#0f172a;font-size:18px;margin-top:28px;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">
            Missed Questions & Official Explanations (${missedList.length})
          </h2>
          ${missedList
            .map(
              (q, i) => `
            <div style="margin-bottom:16px;padding:14px;border:1px solid #fecdd3;background:#fff1f2;border-radius:8px;">
              <div style="font-size:12px;color:#be123c;font-weight:700;margin-bottom:4px;">
                Item ${i + 1} • Domain ${q.domainId}.0 (${q.subtopic})
              </div>
              <div style="font-size:14px;color:#0f172a;font-weight:600;margin-bottom:8px;">
                ${q.prompt}
              </div>
              <div style="font-size:13px;color:#334155;background:#ffffff;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">
                <strong>Explanation:</strong> ${q.explanation}
              </div>
            </div>
          `
            )
            .join('')}
        `
        : '';

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${emailSubject}</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:800px;margin:30px auto;padding:24px;color:#1e293b;background:#f8fafc;">
  <div style="background:#ffffff;border:1px solid #cbd5e1;border-radius:16px;padding:32px;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #0f172a;padding-bottom:16px;margin-bottom:24px;">
      <div>
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:#dc2626;letter-spacing:0.08em;">
          CompTIA Security+ (SY0-701) Score Report
        </div>
        <h1 style="margin:4px 0 0;font-size:24px;color:#0f172a;">
          ${candidateName.trim() || 'Candidate'} — Exam Result
        </h1>
        <div style="font-size:12px;color:#64748b;margin-top:4px;">Completed: ${examDate}</div>
      </div>
      <div style="text-align:right;">
        <span style="display:inline-block;padding:6px 14px;border-radius:999px;font-weight:800;font-size:13px;background:${result.passed ? '#d1fae5' : '#ffe4e6'};color:${result.passed ? '#065f46' : '#9f1239'};">
          ${result.passed ? 'PASSED' : 'NEEDS STUDY'}
        </span>
        <div style="font-size:28px;font-weight:900;color:#0f172a;margin-top:6px;">
          ${result.scaledScore} <span style="font-size:14px;color:#64748b;font-weight:500;">/ 900</span>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px;">
      <div style="padding:12px;background:#f1f5f9;border-radius:8px;text-align:center;">
        <div style="font-size:11px;color:#64748b;text-transform:uppercase;">Accuracy</div>
        <div style="font-size:18px;font-weight:800;color:#0f172a;">${result.correctCount} / ${result.totalQuestions} (${result.percentage}%)</div>
      </div>
      <div style="padding:12px;background:#f1f5f9;border-radius:8px;text-align:center;">
        <div style="font-size:11px;color:#64748b;text-transform:uppercase;">Passing Score</div>
        <div style="font-size:18px;font-weight:800;color:#0f172a;">750 / 900</div>
      </div>
      <div style="padding:12px;background:#f1f5f9;border-radius:8px;text-align:center;">
        <div style="font-size:11px;color:#64748b;text-transform:uppercase;">Time Taken</div>
        <div style="font-size:18px;font-weight:800;color:#0f172a;">${formatTime(result.timeTakenSeconds)}</div>
      </div>
    </div>

    ${
      customNote.trim()
        ? `<div style="padding:14px;background:#fefce8;border:1px solid #fde047;border-radius:8px;margin-bottom:24px;font-size:13px;">
            <strong>Notes:</strong> ${customNote.trim()}
           </div>`
        : ''
    }

    <h2 style="color:#0f172a;font-size:18px;margin-bottom:12px;">Domain Mastery Breakdown</h2>
    <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
      <thead>
        <tr style="background:#f1f5f9;color:#475569;text-transform:uppercase;font-size:11px;">
          <th style="padding:10px 12px;text-align:left;">Domain</th>
          <th style="padding:10px 12px;text-align:center;">SY0-701 Weight</th>
          <th style="padding:10px 12px;text-align:center;">Correct</th>
          <th style="padding:10px 12px;text-align:right;">Score</th>
        </tr>
      </thead>
      <tbody>
        ${domainRowsHtml}
      </tbody>
    </table>

    ${missedQuestionsHtml}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CompTIA-SY0-701-Score-Report-${result.scaledScore}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const encodedTo = encodeURIComponent(recipientEmail.trim());
  const encodedSubject = encodeURIComponent(emailSubject);
  const encodedBody = encodeURIComponent(urlSafeEmailBody);

  const mailtoHref = `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
  const outlookHref = `https://outlook.office.com/mail/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;

  const missedCount = result.totalQuestions - result.correctCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-850">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Send Exam Result to Email</h2>
              <p className="text-xs text-slate-400">
                Email your CompTIA Security+ (SY0-701) score report & domain breakdown
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[78vh] overflow-y-auto">
          {/* Quick Score Banner */}
          <div
            className={`p-3.5 rounded-xl border flex items-center justify-between ${
              result.passed
                ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {result.passed ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider">
                  {result.passed ? 'Passed SY0-701 Simulation' : 'Study Progress Report'}
                </div>
                <div className="text-xs text-slate-300">
                  Accuracy: {result.correctCount}/{result.totalQuestions} ({result.percentage}%) • Time:{' '}
                  {formatTime(result.timeTakenSeconds)}
                </div>
              </div>
            </div>
            <div className="text-right font-mono">
              <span className="text-xl font-black text-white">{result.scaledScore}</span>
              <span className="text-xs text-slate-400"> / 900</span>
            </div>
          </div>

          {/* Recipient & Candidate Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Recipient Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={e => setRecipientEmail(e.target.value)}
                  placeholder="you@example.com or instructor@..."
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-blue-500 focus:outline-none text-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Candidate Name (Optional)
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={candidateName}
                  onChange={e => setCandidateName(e.target.value)}
                  placeholder="Enter your name for the report..."
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 focus:border-blue-500 focus:outline-none text-white text-xs"
                />
              </div>
            </div>
          </div>

          {/* Custom Note */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Personal Study Note / Comments (Optional)
            </label>
            <input
              type="text"
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder="e.g., Focus on Domain 4 log analysis before Friday's retake..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-blue-500 focus:outline-none text-white text-xs"
            />
          </div>

          {/* Report Content Checkboxes */}
          <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Include in Email Report
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeDomainBreakdown}
                  onChange={e => setIncludeDomainBreakdown(e.target.checked)}
                  className="rounded border-slate-700 text-blue-500 focus:ring-blue-500"
                />
                <span>5-Domain Mastery Breakdown</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeMissedQuestions}
                  onChange={e => setIncludeMissedQuestions(e.target.checked)}
                  className="rounded border-slate-700 text-blue-500 focus:ring-blue-500"
                />
                <span>Missed Questions & Explanations ({missedCount})</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-slate-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeCorrectQuestions}
                  onChange={e => setIncludeCorrectQuestions(e.target.checked)}
                  className="rounded border-slate-700 text-blue-500 focus:ring-blue-500"
                />
                <span>Correct Questions List ({result.correctCount})</span>
              </label>
            </div>
          </div>

          {/* Primary Send Buttons */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Choose How to Send
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Option 1: Default Mail App (mailto:) */}
              <a
                href={mailtoHref}
                target="_top"
                onClick={() => copyToClipboard(fullEmailBody, 'launched')}
                className="px-4 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-950/40 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                Open Mail App
              </a>

              {/* Option 2: Gmail Web Compose */}
              <a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => copyToClipboard(fullEmailBody, 'launched')}
                className="px-4 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Send via Gmail
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              {/* Option 3: Outlook Web Compose */}
              <a
                href={outlookHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => copyToClipboard(fullEmailBody, 'launched')}
                className="px-4 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                Outlook Web
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {copiedState === 'launched' && (
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Opening your email composer! The complete unfiltered report has also been copied to your clipboard in case your email client truncates long messages.
                </span>
              </div>
            )}
          </div>

          {/* Preview & Copy/Download Toolbar */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-400" /> Email Report Preview
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => copyToClipboard(`${emailSubject}\n\n${fullEmailBody}`, 'body')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  {copiedState === 'body' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied Full Report!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Full Report</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadHtmlReport}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download HTML Report</span>
                </button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-2">
              <div className="pb-2 border-b border-slate-800 text-slate-400">
                <strong className="text-slate-200">Subject:</strong> {emailSubject}
              </div>
              <pre className="whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed text-slate-300">
                {fullEmailBody}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-850">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            Works offline & on GitHub Pages without external servers
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
