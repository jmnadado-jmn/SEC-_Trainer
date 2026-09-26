import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Shield, 
  Server, 
  Network, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Key, 
  HardDrive,
  Cpu,
  Globe,
  Radio,
  RotateCcw
} from 'lucide-react';
import { PBQuestion } from '../../types/exam';

interface PBQViewerProps {
  question: PBQuestion;
  savedAnswer?: string; // JSON serialized string
  onSaveAnswer: (serialized: string) => void;
  showExplanation?: boolean;
}

export const PBQViewer: React.FC<PBQViewerProps> = ({
  question,
  savedAnswer,
  onSaveAnswer,
  showExplanation = false
}) => {
  const pbq = question.pbqData;

  // Initialize state based on pbq type
  const [matchingState, setMatchingState] = useState<Record<string, string>>(() => {
    if (savedAnswer) {
      try {
        const parsed = JSON.parse(savedAnswer);
        if (parsed.matches) return parsed.matches;
      } catch {}
    }
    return {};
  });

  const [forensicQuarantined, setForensicQuarantined] = useState<string[]>(() => {
    if (savedAnswer) {
      try {
        const parsed = JSON.parse(savedAnswer);
        if (parsed.quarantined) return parsed.quarantined;
      } catch {}
    }
    return [];
  });
  const [selectedHostIp, setSelectedHostIp] = useState<string>(
    pbq.logHosts?.[0]?.ip || '192.168.10.22'
  );

  const [architectureSlots, setArchitectureSlots] = useState<Record<string, string>>(() => {
    if (savedAnswer) {
      try {
        const parsed = JSON.parse(savedAnswer);
        if (parsed.slots) return parsed.slots;
      } catch {}
    }
    return {};
  });

  const [passwordAuditState, setPasswordAuditState] = useState<{
    practices: string[];
    solution: string;
  }>(() => {
    if (savedAnswer) {
      try {
        const parsed = JSON.parse(savedAnswer);
        if (parsed.practices || parsed.solution) {
          return {
            practices: parsed.practices || [],
            solution: parsed.solution || ''
          };
        }
      } catch {}
    }
    return { practices: [], solution: '' };
  });

  // Reset or restore state when switching between different PBQ questions
  useEffect(() => {
    setSelectedHostIp(pbq.logHosts?.[0]?.ip || '192.168.10.22');
    if (savedAnswer) {
      try {
        const parsed = JSON.parse(savedAnswer);
        setMatchingState(parsed.matches || {});
        setForensicQuarantined(parsed.quarantined || []);
        setArchitectureSlots(parsed.slots || {});
        setPasswordAuditState({
          practices: parsed.practices || [],
          solution: parsed.solution || ''
        });
        return;
      } catch {}
    }
    setMatchingState({});
    setForensicQuarantined([]);
    setArchitectureSlots({});
    setPasswordAuditState({ practices: [], solution: '' });
  }, [question.id, savedAnswer]);

  // Whenever state changes, trigger onSaveAnswer
  const saveMatching = (updated: Record<string, string>) => {
    setMatchingState(updated);
    onSaveAnswer(JSON.stringify({ matches: updated }));
  };

  const toggleQuarantine = (ip: string) => {
    let next: string[];
    if (forensicQuarantined.includes(ip)) {
      next = forensicQuarantined.filter(item => item !== ip);
    } else {
      next = [...forensicQuarantined, ip];
    }
    setForensicQuarantined(next);
    onSaveAnswer(JSON.stringify({ quarantined: next }));
  };

  const saveArchitectureSlot = (slotId: string, componentId: string) => {
    const next = { ...architectureSlots, [slotId]: componentId };
    setArchitectureSlots(next);
    onSaveAnswer(JSON.stringify({ slots: next }));
  };

  const togglePasswordPractice = (optId: string) => {
    const prev = passwordAuditState.practices;
    const nextPractices = prev.includes(optId)
      ? prev.filter(p => p !== optId)
      : [...prev, optId];
    const nextState = { ...passwordAuditState, practices: nextPractices };
    setPasswordAuditState(nextState);
    onSaveAnswer(JSON.stringify(nextState));
  };

  const selectPasswordSolution = (solId: string) => {
    const nextState = { ...passwordAuditState, solution: solId };
    setPasswordAuditState(nextState);
    onSaveAnswer(JSON.stringify(nextState));
  };

  return (
    <div className="space-y-6">
      {/* Simulation Banner */}
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> CompTIA PBQ Simulation
            </span>
            <span className="text-xs text-slate-400 font-mono">Domain {question.domainId}.0</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
            Interactive Hands-on Task
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-1">{pbq.title}</h3>
        <p className="text-xs text-slate-400 mb-3">{pbq.subtitle}</p>

        <div className="text-sm text-slate-200 leading-relaxed bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
          <strong className="text-amber-400 block mb-1">Scenario Briefing:</strong>
          {pbq.scenario}
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Instructions:
          </span>
          <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
            {pbq.instructions.map((inst, idx) => (
              <li key={idx}>{inst}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* TYPE 1: Threat Matching */}
      {pbq.pbqType === 'threat-matching' && pbq.matchPairs && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Match Each Threat to Its Designated Security Mitigation Control
          </div>

          <div className="space-y-4">
            {pbq.matchPairs.map((pair, idx) => {
              const currentMatch = matchingState[pair.threat] || '';
              const isCorrect = currentMatch === pair.correctMitigation;

              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    showExplanation 
                      ? isCorrect 
                        ? 'border-emerald-500/50 bg-emerald-950/20' 
                        : 'border-rose-500/50 bg-rose-950/20'
                      : 'border-slate-800 bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-red-500/20 text-red-400 flex items-center justify-center font-mono text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-white text-sm">{pair.threat}</h4>
                      </div>
                      {pair.threatDesc && (
                        <p className="text-xs text-slate-400 leading-relaxed pl-8">
                          {pair.threatDesc}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-6">
                      <label className="text-[11px] text-slate-400 block mb-1">
                        Select Best Remediation Control:
                      </label>
                      <select
                        value={currentMatch}
                        onChange={(e) => {
                          saveMatching({ ...matchingState, [pair.threat]: e.target.value });
                        }}
                        className={`w-full text-xs rounded-xl p-2.5 bg-slate-900 border transition-colors focus:ring-1 focus:ring-red-500 text-slate-200 ${
                          showExplanation
                            ? isCorrect
                              ? 'border-emerald-500 text-emerald-300'
                              : 'border-rose-500 text-rose-300'
                            : 'border-slate-700 focus:border-red-500'
                        }`}
                      >
                        <option value="">-- Choose Mitigation Control --</option>
                        {pbq.matchOptions?.map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>

                      {showExplanation && (
                        <div className="mt-1.5 text-[11px] flex items-center gap-1">
                          {isCorrect ? (
                            <span className="text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct Mapping
                            </span>
                          ) : (
                            <span className="text-rose-400 flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Correct: {pair.correctMitigation}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TYPE 2: Log Forensics & Quarantine */}
      {pbq.pbqType === 'log-forensics' && pbq.logHosts && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Endpoint Telemetry & Network Quarantine Console
            </span>
            <div className="text-xs text-slate-400">
              Quarantined Hosts: <strong className="text-white">{forensicQuarantined.length} / 4</strong>
            </div>
          </div>

          {/* Host Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {pbq.logHosts.map(host => {
              const isSelected = selectedHostIp === host.ip;
              const isQuarantined = forensicQuarantined.includes(host.ip);

              return (
                <button
                  key={host.ip}
                  type="button"
                  onClick={() => setSelectedHostIp(host.ip)}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    isSelected
                      ? 'border-red-500 bg-slate-800 ring-1 ring-red-500/40'
                      : 'border-slate-800 bg-slate-850 hover:bg-slate-800/80 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">{host.hostname}</span>
                    {isQuarantined && (
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" title="Quarantined" />
                    )}
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">{host.ip}</div>
                  <div className="mt-2 text-[10px] font-semibold">
                    {isQuarantined ? (
                      <span className="text-rose-400 uppercase tracking-wider">QUARANTINED</span>
                    ) : (
                      <span className="text-emerald-400 uppercase tracking-wider">ONLINE</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Host Terminal Display */}
          {(() => {
            const currentHost = pbq.logHosts.find(h => h.ip === selectedHostIp) || pbq.logHosts[0];
            const isQuarantined = forensicQuarantined.includes(currentHost.ip);

            return (
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
                {/* Terminal Header */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 ml-2">
                      telemetry@{currentHost.hostname} ({currentHost.ip}) - {currentHost.role}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleQuarantine(currentHost.ip)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow ${
                      isQuarantined
                        ? 'bg-rose-600 hover:bg-rose-500 text-white ring-1 ring-rose-400'
                        : 'bg-slate-800 hover:bg-rose-900/40 text-rose-300 border border-rose-500/40'
                    }`}
                  >
                    <Lock className="w-3 h-3" />
                    {isQuarantined ? 'Quarantined (Click to Unfreeze)' : 'Enact Network Quarantine'}
                  </button>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-xs text-slate-300 space-y-1.5 bg-black/60 max-h-64 overflow-y-auto">
                  <div className="text-slate-500 text-[11px] mb-2">
                    # SIEM Sensor: Inbound/Outbound Process & Firewall Correlation Stream
                  </div>
                  {currentHost.logs.map((line, lIdx) => {
                    const isAlert = line.includes('Beaconing') || line.includes('svchost.exe PID') || line.includes('New service installed') || line.includes('SYN_SENT');
                    return (
                      <div 
                        key={lIdx} 
                        className={`leading-relaxed ${isAlert ? 'text-amber-300 bg-amber-950/20 px-1 py-0.5 rounded' : 'text-slate-300'}`}
                      >
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Validation Status if in Review / Explanation */}
          {showExplanation && (
            <div className="p-4 rounded-xl bg-slate-850 border border-slate-700 text-xs space-y-2">
              <strong className="text-amber-400 block font-semibold">Incident Response Verdict:</strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pbq.logHosts.map(h => {
                  const userDidQuarantine = forensicQuarantined.includes(h.ip);
                  const isCorrect = (h.isolationRequired && userDidQuarantine) || (!h.isolationRequired && !userDidQuarantine);
                  return (
                    <div 
                      key={h.ip}
                      className={`p-2.5 rounded-lg border flex items-center justify-between ${
                        isCorrect ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300' : 'border-rose-500/40 bg-rose-950/20 text-rose-300'
                      }`}
                    >
                      <div>
                        <div className="font-bold">{h.hostname} ({h.ip})</div>
                        <div className="text-[10px] text-slate-400">
                          Status: {h.isolationRequired ? 'INFECTED (Must Isolate)' : 'CLEAN (Do Not Isolate)'}
                        </div>
                      </div>
                      <span className="font-bold text-[11px]">
                        {userDidQuarantine ? 'Quarantined' : 'Left Online'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TYPE 3 & 5: Cloud Architecture / Web Defense Slot Builder */}
      {(pbq.pbqType === 'cloud-architecture' || pbq.pbqType === 'web-defense-rules') && pbq.networkSlots && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Architecture Topology Layout: Assign Correct Components to Each Tier
          </div>

          <div className="space-y-4">
            {pbq.networkSlots.map((slot, sIdx) => {
              const currentChoice = architectureSlots[slot.slotId] || '';
              const isCorrect = currentChoice === slot.correctComponentId;

              return (
                <div
                  key={slot.slotId}
                  className={`p-4 rounded-xl border transition-all ${
                    showExplanation
                      ? isCorrect
                        ? 'border-emerald-500/50 bg-emerald-950/20'
                        : 'border-rose-500/50 bg-rose-950/20'
                      : 'border-slate-800 bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase font-bold">
                        {slot.tier}
                      </span>
                      <h4 className="font-bold text-white text-sm">{slot.slotLabel}</h4>
                    </div>
                    {showExplanation && (
                      <span className="text-xs font-bold">
                        {isCorrect ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Incorrect
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  <select
                    value={currentChoice}
                    onChange={(e) => saveArchitectureSlot(slot.slotId, e.target.value)}
                    className="w-full text-xs rounded-xl p-2.5 bg-slate-900 border border-slate-700 focus:border-red-500 text-slate-200 focus:ring-1 focus:ring-red-500"
                  >
                    <option value="">-- Select Architectural Component / Control --</option>
                    {pbq.componentChoices?.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.label} - {c.description}
                      </option>
                    ))}
                  </select>

                  {showExplanation && (
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <strong className="text-amber-400">Design Rationale: </strong>
                      {slot.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TYPE 4: Dark Web Password / Security Audit */}
      {pbq.pbqType === 'password-darkweb' && pbq.passwordAudit && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6">
          {pbq.passwordAudit.map(section => {
            if (section.category === 'practice') {
              return (
                <div key={section.id} className="space-y-3">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {section.title}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {section.options.map(opt => {
                      const isChecked = passwordAuditState.practices.includes(opt.id);
                      let cardStyle = isChecked
                        ? 'border-red-500 bg-red-500/10 text-white'
                        : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300';

                      if (showExplanation) {
                        if (opt.isCorrect) {
                          cardStyle = 'border-emerald-500/60 bg-emerald-950/25 text-emerald-200';
                        } else if (isChecked && !opt.isCorrect) {
                          cardStyle = 'border-rose-500/60 bg-rose-950/25 text-rose-200';
                        }
                      }

                      return (
                        <label
                          key={opt.id}
                          className={`p-3 rounded-xl border flex items-start justify-between gap-3 cursor-pointer transition-all ${cardStyle}`}
                        >
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => togglePasswordPractice(opt.id)}
                              className="mt-0.5 rounded text-red-600 focus:ring-red-500 bg-slate-900 border-slate-700"
                            />
                            <span className="text-xs leading-relaxed">{opt.text}</span>
                          </div>
                          {showExplanation && opt.isCorrect && (
                            <span className="text-[10px] font-mono font-bold text-emerald-400 shrink-0 flex items-center gap-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Required
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (section.category === 'solution') {
              return (
                <div key={section.id} className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {section.title}
                  </div>
                  <div className="space-y-2">
                    {section.options.map(opt => {
                      const isSelected = passwordAuditState.solution === opt.id;
                      let solStyle = isSelected
                        ? 'border-emerald-500 bg-emerald-500/10 text-white ring-1 ring-emerald-500/30'
                        : 'border-slate-800 bg-slate-850 hover:bg-slate-800 text-slate-300';

                      if (showExplanation) {
                        if (opt.isCorrect) {
                          solStyle = 'border-emerald-500/70 bg-emerald-950/30 text-emerald-200 ring-1 ring-emerald-500/40';
                        } else if (isSelected && !opt.isCorrect) {
                          solStyle = 'border-rose-500/70 bg-rose-950/30 text-rose-200';
                        }
                      }

                      return (
                        <label
                          key={opt.id}
                          className={`p-3 rounded-xl border flex items-start justify-between gap-3 cursor-pointer transition-all ${solStyle}`}
                        >
                          <div className="flex items-start gap-3">
                            <input
                              type="radio"
                              name={`audit-solution-${question.id}`}
                              checked={isSelected}
                              onChange={() => selectPasswordSolution(opt.id)}
                              className="mt-0.5 text-emerald-600 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                            />
                            <span className="text-xs leading-relaxed">{opt.text}</span>
                          </div>
                          {showExplanation && opt.isCorrect && (
                            <span className="text-[10px] font-mono font-bold text-emerald-400 shrink-0 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Best Control
                            </span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      )}

      {/* Full PBQ Explanation in Review Mode */}
      {showExplanation && (
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
            <Shield className="w-4 h-4" /> Official SY0-701 Simulation Solution Guide
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            {pbq.fullExplanation}
          </p>
        </div>
      )}
    </div>
  );
};
