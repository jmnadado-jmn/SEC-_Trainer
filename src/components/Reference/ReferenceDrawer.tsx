import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  X, 
  Network, 
  Calculator, 
  Shield, 
  Key, 
  Layers,
  Check,
  Copy
} from 'lucide-react';

interface ReferenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceDrawer: React.FC<ReferenceDrawerProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'ports' | 'acronyms' | 'formulas' | 'controls'>('ports');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  const PORTS_DATA = [
    { port: 21, proto: 'TCP', name: 'FTP', secure: 'Insecure (Plaintext)', purpose: 'File Transfer Protocol - unencrypted data & credentials.' },
    { port: 22, proto: 'TCP', name: 'SSH / SFTP', secure: 'Encrypted (Secure)', purpose: 'Secure Shell & SSH File Transfer Protocol - encrypted remote terminal & transfer.' },
    { port: 23, proto: 'TCP', name: 'Telnet', secure: 'Insecure (Plaintext)', purpose: 'Unencrypted terminal emulation; replace with SSH.' },
    { port: 25, proto: 'TCP', name: 'SMTP', secure: 'Cleartext / STARTTLS', purpose: 'Simple Mail Transfer Protocol - mail transmission between MTAs.' },
    { port: 53, proto: 'UDP/TCP', name: 'DNS', secure: 'Cleartext (Use DNSSEC/DoT/DoH)', purpose: 'Domain Name System - hostname to IP resolution; target of DNS tunneling.' },
    { port: 80, proto: 'TCP', name: 'HTTP', secure: 'Insecure (Plaintext)', purpose: 'Hypertext Transfer Protocol - web browsing; replace with HTTPS.' },
    { port: 88, proto: 'TCP/UDP', name: 'Kerberos', secure: 'Encrypted Ticket System', purpose: 'Ticket-granting authentication protocol used in Active Directory.' },
    { port: 123, proto: 'UDP', name: 'NTP', secure: 'Network Time', purpose: 'Network Time Protocol - clock synchronization, target for amplification attacks.' },
    { port: 161, proto: 'UDP', name: 'SNMP', secure: 'Use SNMPv3 (v1/v2 plaintext)', purpose: 'Simple Network Management Protocol - device metrics and monitoring.' },
    { port: 389, proto: 'TCP', name: 'LDAP', secure: 'Insecure (Use LDAPS)', purpose: 'Lightweight Directory Access Protocol - directory querying.' },
    { port: 443, proto: 'TCP', name: 'HTTPS / TLS', secure: 'Encrypted (TLS 1.3)', purpose: 'Secure web browsing encrypted via PKI certificates.' },
    { port: 445, proto: 'TCP', name: 'SMB', secure: 'Server Message Block', purpose: 'File/printer sharing across Windows LAN; exploited by worms like WannaCry.' },
    { port: 636, proto: 'TCP', name: 'LDAPS', secure: 'Encrypted (SSL/TLS)', purpose: 'LDAP over TLS/SSL for secure directory queries.' },
    { port: 1812, proto: 'UDP', name: 'RADIUS Authentication', secure: 'AAA Framework', purpose: 'Remote Authentication Dial-In User Service - 802.1X enterprise authentication.' },
    { port: 3389, proto: 'TCP', name: 'RDP', secure: 'Remote Desktop Protocol', purpose: 'Windows GUI remote access; dangerous when open to public internet.' }
  ];

  const ACRONYMS_DATA = [
    { acronym: 'SIEM', full: 'Security Information and Event Management', desc: 'Aggregates, normalizes, and correlates log data across enterprise endpoints and appliances to generate alerts.' },
    { acronym: 'SOAR', full: 'Security Orchestration, Automation, and Response', desc: 'Automates security workflows and incident response tasks via scripted playbooks.' },
    { acronym: 'EDR', full: 'Endpoint Detection and Response', desc: 'Monitors endpoint process execution, behaviors, and memory to detect baseline deviations and isolate threats.' },
    { acronym: 'XDR', full: 'Extended Detection and Response', desc: 'Correlates threat data across endpoints, cloud workloads, network telemetry, and email gateways.' },
    { acronym: 'CASB', full: 'Cloud Access Security Broker', desc: 'Enforces security policies, data loss prevention, and monitors Shadow IT across cloud SaaS services.' },
    { acronym: 'SASE', full: 'Secure Access Service Edge', desc: 'Converges software-defined WAN (SD-WAN) with cloud-delivered security (SWG, ZTNA, CASB) for remote work.' },
    { acronym: 'DLP', full: 'Data Loss Prevention', desc: 'Inspects and blocks unauthorized transmission of sensitive data (PII, PCI) in transit, in use, and at rest.' },
    { acronym: 'FIM', full: 'File Integrity Monitoring', desc: 'Monitors hashes of critical system binaries and registry keys to detect tampering or rootkits.' },
    { acronym: 'PAM', full: 'Privileged Access Management', desc: 'Vaults, audits, and rotates high-privilege administrative credentials to defeat pass-the-hash attacks.' },
    { acronym: 'AUP', full: 'Acceptable Use Policy', desc: 'Administrative policy defining permitted and prohibited actions for employees on company assets.' },
    { acronym: 'IRP', full: 'Incident Response Plan', desc: 'Playbooks and procedures guiding detection, containment, eradication, and lessons learned during attacks.' },
    { acronym: 'FIDO2', full: 'Fast Identity Online 2', desc: 'Open authentication standard enabling phishing-resistant, passwordless biometric or hardware key authentication.' },
    { acronym: 'CVSS', full: 'Common Vulnerability Scoring System', desc: 'Standardized numerical rating (0-10) scoring vulnerability severity and attack exploitability.' },
    { acronym: 'SCAP', full: 'Security Content Automation Protocol', desc: 'Standardized format for automated vulnerability scanning, reporting, and baseline auditing.' }
  ];

  const filteredPorts = PORTS_DATA.filter(p => 
    p.port.toString().includes(searchTerm) || 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAcronyms = ACRONYMS_DATA.filter(a =>
    a.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.full.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-850">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">CompTIA Security+ Quick Reference</h3>
                <p className="text-xs text-slate-400 font-mono">SY0-701 Exam Cheat Sheet</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search ports, protocols, acronyms, formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center gap-1 text-xs">
            {[
              { id: 'ports', label: 'Common Ports' },
              { id: 'acronyms', label: 'Acronyms Glossary' },
              { id: 'formulas', label: 'Formulas & Risk' },
              { id: 'controls', label: 'Control Categories' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* TAB 1: Ports */}
          {activeTab === 'ports' && (
            <div className="space-y-3">
              <div className="text-[11px] text-slate-400 font-mono flex justify-between">
                <span>Showing {filteredPorts.length} high-yield ports</span>
                <span>Click to copy port number</span>
              </div>
              <div className="space-y-2">
                {filteredPorts.map(p => (
                  <div
                    key={p.port}
                    onClick={() => handleCopy(p.port.toString())}
                    className="p-3 rounded-xl bg-slate-850 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer group flex items-start justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono font-bold text-amber-400 text-sm">
                          Port {p.port}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                          {p.proto}
                        </span>
                        <span className="font-bold text-white text-xs">{p.name}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          p.secure.includes('Insecure') ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {p.secure}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {p.purpose}
                      </p>
                    </div>

                    <button className="text-slate-500 group-hover:text-blue-400 pt-1">
                      {copiedText === p.port.toString() ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Acronyms */}
          {activeTab === 'acronyms' && (
            <div className="space-y-3">
              <div className="text-[11px] text-slate-400 font-mono">
                Showing {filteredAcronyms.length} essential CompTIA acronyms
              </div>
              <div className="space-y-2">
                {filteredAcronyms.map(a => (
                  <div key={a.acronym} className="p-3.5 rounded-xl bg-slate-850 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-extrabold text-blue-400 text-sm">
                        {a.acronym}
                      </span>
                      <span className="text-[11px] text-slate-300 font-semibold">
                        {a.full}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Formulas */}
          {activeTab === 'formulas' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5 text-sm">
                  <Calculator className="w-4 h-4 text-emerald-400" /> Quantitative Risk Formulas
                </h4>
                <div className="space-y-2 font-mono text-[11px] text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="text-emerald-400 font-bold">SLE = Asset Value (AV) × Exposure Factor (EF)</div>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Single Loss Expectancy is the monetary loss each time a risk event occurs.
                  </p>
                  <div className="text-amber-400 font-bold pt-1">ARO = Incidents / Years</div>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Annualized Rate of Occurrence is how many times the risk event is expected to occur in 1 year.
                  </p>
                  <div className="text-rose-400 font-bold pt-1">ALE = SLE × ARO</div>
                  <p className="text-slate-400 text-[10px] font-sans">
                    Annualized Loss Expectancy gives expected yearly financial loss to justify control investment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Resiliency & Uptime Metrics</h4>
                <div className="space-y-2 text-[11px] text-slate-300">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-blue-400 block font-mono">MTTR (Mean Time to Repair)</strong>
                    Average time required to fix and restore a failed asset.
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-emerald-400 block font-mono">MTBF (Mean Time Between Failures)</strong>
                    Expected elapsed operational uptime between non-catastrophic failures.
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-purple-400 block font-mono">RTO (Recovery Time Objective)</strong>
                    Maximum allowable duration that systems can remain down after an outage.
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block font-mono">RPO (Recovery Point Objective)</strong>
                    Maximum acceptable age of files recovered from backup (data loss in time).
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Controls Matrix */}
          {activeTab === 'controls' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Security Control Categories</h4>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-emerald-400 block">Technical Controls (Logical)</strong>
                    Implemented in hardware or software (firewalls, encryption, EDR, ACLs, MFA).
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-blue-400 block">Managerial Controls (Administrative)</strong>
                    Organizational governance and policies (AUP, risk assessments, training, SDLC guidelines).
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block">Operational Controls</strong>
                    Human procedures executed day-to-day (log reviews, backup testing, visitor sign-ins).
                  </div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    <strong className="text-rose-400 block">Physical Controls</strong>
                    Real-world boundaries and barriers (fences, locks, CCTV, mantraps, bollards).
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white text-sm">Functional Types</h4>
                <ul className="space-y-1.5 text-[11px] text-slate-300">
                  <li><strong className="text-white">Preventative:</strong> Stops incident before it occurs (IPS, Firewall, AUP).</li>
                  <li><strong className="text-white">Detective:</strong> Identifies incident during or after occurrence (SIEM, IDS, CCTV).</li>
                  <li><strong className="text-white">Corrective:</strong> Restores system back to normal state (Backups, Patching, DRP).</li>
                  <li><strong className="text-white">Compensating:</strong> Alternate control when primary control is unfeasible (VLAN isolation for legacy server).</li>
                  <li><strong className="text-white">Deterrent:</strong> Discourages attacker from attempting violation (Warning banner, guard dog).</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-850 flex items-center justify-between text-xs text-slate-400">
          <span>CompTIA Security+ SY0-701 Objective Guide</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
