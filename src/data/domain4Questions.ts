import { MultipleChoiceQuestion } from '../types/exam';

export const DOMAIN_4_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'd4-q13',
    domainId: 4,
    subtopic: 'Reconnaissance & Assessments',
    questionNumber: 13,
    type: 'single',
    prompt: 'A penetration tester sends SYN packets and banners to probe open ports and enumerate active services on a client target. What type of reconnaissance is this?',
    options: [
      { id: 'A', text: 'Active' },
      { id: 'B', text: 'Passive' },
      { id: 'C', text: 'Defensive' },
      { id: 'D', text: 'Offensive' }
    ],
    correctAnswers: ['A'],
    explanation: 'Active reconnaissance directly interacts with, probes, and sends packets to target systems (e.g. port scanning with Nmap, banner grabbing), which can trigger IDS/IPS alerts.',
    examTip: 'Passive recon uses public OSINT without touching target infrastructure; Active recon directly queries the target.'
  },
  {
    id: 'd4-q22',
    domainId: 4,
    subtopic: 'Logging & Monitoring Sources',
    questionNumber: 22,
    type: 'single',
    prompt: 'A security analyst reviewing a SIEM alert needs specific details regarding process ancestry, command-line arguments, and local DLL invocations on a workstation. Which log source should be examined?',
    options: [
      { id: 'A', text: 'Application' },
      { id: 'B', text: 'IPS/IDS' },
      { id: 'C', text: 'Network' },
      { id: 'D', text: 'Endpoint' }
    ],
    correctAnswers: ['D'],
    explanation: 'Endpoint logs and EDR telemetry capture local operating system activity, child process spawns, command-line parameters, and binary hashes running directly on the host.',
    examTip: 'Network logs show who communicated with whom; Endpoint logs show what executed on the machine.'
  },
  {
    id: 'd4-q23',
    domainId: 4,
    subtopic: 'Threat Hunting',
    questionNumber: 23,
    type: 'single',
    prompt: 'Cyber intelligence notifies an analyst of an emerging adversary persistence technique that currently has no automated SIEM detection rules configured. How should the analyst identify this behavior?',
    options: [
      { id: 'A', text: 'Digital forensics' },
      { id: 'B', text: 'E-discovery' },
      { id: 'C', text: 'Incident response' },
      { id: 'D', text: 'Threat hunting' }
    ],
    correctAnswers: ['D'],
    explanation: 'Threat hunting is a proactive, hypothesis-driven human process of querying datasets and SIEM logs to find hidden adversary presence that bypassed automated signature detections.',
    examTip: 'Threat hunting is proactive (before an alert); Incident response is reactive (after an alert).'
  },
  {
    id: 'd4-q37',
    domainId: 4,
    subtopic: 'File Integrity Monitoring',
    questionNumber: 37,
    type: 'single',
    prompt: 'A File Integrity Monitoring (FIM) tool alerts that the cryptographic hash of C:\\Windows\\System32\\cmd.exe has changed, yet no OS updates or patches were deployed. What most likely occurred?',
    options: [
      { id: 'A', text: 'User changed permissions' },
      { id: 'B', text: 'Cryptographic collision' },
      { id: 'C', text: 'File system snapshot' },
      { id: 'D', text: 'Rootkit was deployed' }
    ],
    correctAnswers: ['D'],
    explanation: 'Rootkits replace or tamper with core operating system binaries and drivers to establish privileged persistence and hide adversary tools, which triggers FIM hash change alerts.',
    examTip: 'FIM compares running file hashes against known good baselines to detect unauthorized alterations.'
  },
  {
    id: 'd4-q58',
    domainId: 4,
    subtopic: 'Vulnerability Management',
    questionNumber: 58,
    type: 'single',
    prompt: 'A security practitioner completes a vulnerability assessment, and the operations team reports that all critical patch findings have been remediated. What should the security practitioner do next?',
    options: [
      { id: 'A', text: 'Conduct an audit' },
      { id: 'B', text: 'Initiate penetration test' },
      { id: 'C', text: 'Rescan the network' },
      { id: 'D', text: 'Submit report' }
    ],
    correctAnswers: ['C'],
    explanation: 'Rescanning the network is mandatory following remediation to independently verify and validate that the patches were successfully installed and vulnerabilities are genuinely resolved.',
    examTip: 'Never trust verbal confirmation of patching; always re-scan to validate closure.'
  },
  {
    id: 'd4-q68',
    domainId: 4,
    subtopic: 'SIEM & Detection Engineering',
    questionNumber: 68,
    type: 'single',
    prompt: 'A Security Operations Center (SOC) determines that a recurring SIEM alert flagging nightly backup data transfers as malicious exfiltration is legitimate business activity. They adjust the rule criteria. What is this called?',
    options: [
      { id: 'A', text: 'Tuning' },
      { id: 'B', text: 'Aggregating' },
      { id: 'C', text: 'Quarantining' },
      { id: 'D', text: 'Archiving' }
    ],
    correctAnswers: ['A'],
    explanation: 'Alert tuning involves modifying detection thresholds, exception lists, and filter rules to eliminate benign false positives and reduce alert fatigue for SOC analysts.',
    examTip: 'Tuning refines detection accuracy to minimize false positives.'
  },
  {
    id: 'd4-q102',
    domainId: 4,
    subtopic: 'System Integrity Tools',
    questionNumber: 102,
    type: 'single',
    prompt: 'An administrator needs a centralized mechanism to detect and alert immediately whenever critical configuration files or registry keys are modified on production servers. What should be deployed?',
    options: [
      { id: 'A', text: 'SPF' },
      { id: 'B', text: 'GPO' },
      { id: 'C', text: 'NAC' },
      { id: 'D', text: 'FIM' }
    ],
    correctAnswers: ['D'],
    explanation: 'File Integrity Monitoring (FIM) validates system and configuration files against known cryptographic baselines, generating alerts whenever unauthorized modifications occur.',
    examTip: 'FIM enforces the Integrity pillar of the CIA triad.'
  },
  {
    id: 'd4-q119',
    domainId: 4,
    subtopic: 'Assessment Analysis',
    questionNumber: 119,
    type: 'single',
    prompt: 'An automated vulnerability scan flags port 23 as unencrypted Telnet, but a manual Nmap script test verifies that the port is actually running an SSL/TLS-wrapped terminal emulator. How is the scanner finding categorized?',
    options: [
      { id: 'A', text: 'False positive' },
      { id: 'B', text: 'Rescan required' },
      { id: 'C', text: 'Considered noise' },
      { id: 'D', text: 'Compensating controls exist' }
    ],
    correctAnswers: ['A'],
    explanation: 'A false positive occurs when a security scanner reports an asset is vulnerable or non-compliant when, in reality, the vulnerability does not exist.',
    examTip: 'False positive = False alarm (reported vulnerable, but safe). False negative = Missed threat (reported safe, but vulnerable).'
  },
  {
    id: 'd4-q161',
    domainId: 4,
    subtopic: 'Digital Forensics',
    questionNumber: 161,
    type: 'single',
    prompt: 'Which of the following incident response and forensics activities ensures that digital evidence is tracked, verified, and admissible in legal proceedings?',
    options: [
      { id: 'A', text: 'E-discovery' },
      { id: 'B', text: 'Chain of custody' },
      { id: 'C', text: 'Legal hold' },
      { id: 'D', text: 'Preservation' }
    ],
    correctAnswers: ['B'],
    explanation: 'Chain of custody is the chronological documentation showing the custody, control, transfer, analysis, and disposition of physical and electronic evidence throughout an investigation.',
    examTip: 'A broken chain of custody makes evidence inadmissible in court.'
  },
  {
    id: 'd4-q163',
    domainId: 4,
    subtopic: 'Security Testing Teams',
    questionNumber: 163,
    type: 'single',
    prompt: 'Which security assessment team structure combines both offensive red team tactics and defensive blue team monitoring to collaboratively optimize detection rules?',
    options: [
      { id: 'A', text: 'Red' },
      { id: 'B', text: 'Blue' },
      { id: 'C', text: 'Purple' },
      { id: 'D', text: 'Yellow' }
    ],
    correctAnswers: ['C'],
    explanation: 'A purple team facilitates continuous collaboration between offensive operators (Red Team) and defensive responders (Blue Team) to test attacks and immediately tune defense controls.',
    examTip: 'Red = Offensive/Attacker; Blue = Defensive/Defender; Purple = Collaboration between Red and Blue.'
  },
  {
    id: 'd4-q198',
    domainId: 4,
    subtopic: 'Network Testing Tools',
    questionNumber: 198,
    type: 'single',
    prompt: 'A security analyst is testing perimeter firewall state tables. Which command-line tool would the analyst use to assemble and craft custom TCP, UDP, and ICMP packets with specific flags?',
    options: [
      { id: 'A', text: 'hping' },
      { id: 'B', text: 'Wireshark' },
      { id: 'C', text: 'PowerShell' },
      { id: 'D', text: 'netstat' }
    ],
    correctAnswers: ['A'],
    explanation: 'hping (hping3) is a network packet generator and analyzer capable of crafting custom TCP/IP packets to test firewall rules, fragmentation handling, and port responsiveness.',
    examTip: 'Wireshark is a packet analyzer (sniffer); hping generates custom packets.'
  },
  {
    id: 'd4-q205',
    domainId: 4,
    subtopic: 'Linux Security Administration',
    questionNumber: 205,
    type: 'single',
    prompt: 'While auditing a Linux server, a systems administrator observes that /etc/shadow has world-readable permissions (-rw-r--r--). Which command should be used to restrict access?',
    options: [
      { id: 'A', text: 'chmod' },
      { id: 'B', text: 'grep' },
      { id: 'C', text: 'dd' },
      { id: 'D', text: 'passwd' }
    ],
    correctAnswers: ['A'],
    explanation: 'chmod (change mode) modifies file permissions in Linux. To secure /etc/shadow, administrators typically run "chmod 600 /etc/shadow" or "chmod 640 /etc/shadow".',
    examTip: 'chmod alters read/write/execute flags; chown changes user/group ownership.'
  },
  {
    id: 'd4-q214',
    domainId: 4,
    subtopic: 'Incident Response Lifecycle',
    questionNumber: 214,
    type: 'single',
    prompt: 'An incident response team receives notification that active ransomware malware is present on several corporate desktops. What is the immediate operational priority?',
    options: [
      { id: 'A', text: 'Contain the impacted hosts' },
      { id: 'B', text: 'Add the malware to the application blocklist' },
      { id: 'C', text: 'Segment the core database server' },
      { id: 'D', text: 'Implement firewall rules to block outbound beaconing' }
    ],
    correctAnswers: ['A'],
    explanation: 'Containment is the first operational priority after detection to sever active network links and isolate infected nodes, stopping lateral infection before eradication begins.',
    examTip: 'Incident response lifecycle: Preparation -> Identification -> Containment -> Eradication -> Recovery -> Lessons Learned.'
  },
  {
    id: 'd4-q215',
    domainId: 4,
    subtopic: 'Order of Volatility',
    questionNumber: 215,
    type: 'single',
    prompt: 'Why would a forensic specialist prioritize capturing volatile system RAM before powering off a machine or cloning the hard disk?',
    options: [
      { id: 'A', text: 'Order of volatility' },
      { id: 'B', text: 'Preservation of event logs' },
      { id: 'C', text: 'Chain of custody' },
      { id: 'D', text: 'Compliance with legal hold' }
    ],
    correctAnswers: ['A'],
    explanation: 'The order of volatility dictates that digital evidence must be captured in order from most volatile (CPU cache, RAM, active network sockets) to least volatile (disk, optical, backup tapes), because volatile data is destroyed if power is removed.',
    examTip: 'Order of volatility: CPU Cache/Registers -> RAM -> Swap/Pagefile -> Hard Disk -> Optical/Tapes.'
  },
  {
    id: 'd4-q231',
    domainId: 4,
    subtopic: 'Security Automation (SOAR)',
    questionNumber: 231,
    type: 'single',
    prompt: 'A growing company wants to enhance its SOC threat response speed and reduce repetitive manual analyst work for triage and host containment. Which platform should be implemented?',
    options: [
      { id: 'A', text: 'SOAR' },
      { id: 'B', text: 'SIEM' },
      { id: 'C', text: 'MDM' },
      { id: 'D', text: 'DLP' }
    ],
    correctAnswers: ['A'],
    explanation: 'Security Orchestration, Automation, and Response (SOAR) connects disparate security tools and executes automated playbooks (such as auto-enriching IP reputation or auto-isolating hosts) to streamline SOC workflows.',
    examTip: 'SIEM aggregates and correlates events; SOAR automates responses via playbooks.'
  },
  {
    id: 'd4-q237',
    domainId: 4,
    subtopic: 'Incident Response Phases',
    questionNumber: 237,
    type: 'single',
    prompt: 'Which of the following represents the final phase of the incident response lifecycle, focused on post-incident reporting and process improvement?',
    options: [
      { id: 'A', text: 'Lessons learned' },
      { id: 'B', text: 'Eradication' },
      { id: 'C', text: 'Containment' },
      { id: 'D', text: 'Recovery' }
    ],
    correctAnswers: ['A'],
    explanation: 'The "lessons learned" (or post-incident review) phase concludes the incident response lifecycle, analyzing root causes, team performance, and updating IRP playbooks to prevent future recurrences.',
    examTip: 'Lessons learned happens after systems are recovered and restored.'
  },
  {
    id: 'd4-q260',
    domainId: 4,
    subtopic: 'Forensic Log Analysis',
    questionNumber: 260,
    type: 'single',
    prompt: 'A security analyst investigates a workstation suspected of communicating with an external C2 server. During investigation, the analyst discovers the attacker cleared the Windows Security event log. Which logs should the analyst inspect next?',
    options: [
      { id: 'A', text: 'IPS' },
      { id: 'B', text: 'Firewall' },
      { id: 'C', text: 'ACL' },
      { id: 'D', text: 'Windows security' }
    ],
    correctAnswers: ['B'],
    explanation: 'Perimeter firewall and network proxy logs reside on independent, tamper-resistant centralized infrastructure. Even if an attacker wipes local host event logs, network firewalls record all outbound IP connections and byte transfers.',
    examTip: 'Centralized network logs cannot be wiped simply by compromising an endpoint.'
  },
  {
    id: 'd4-q283',
    domainId: 4,
    subtopic: 'Data Retention & Investigation',
    questionNumber: 283,
    type: 'single',
    prompt: 'The security team at a large enterprise needs to reduce the storage costs of security monitoring data. Which data type consumes the most volume and should have its retention duration reduced?',
    options: [
      { id: 'A', text: 'Packet capture' },
      { id: 'B', text: 'Endpoint logs' },
      { id: 'C', text: 'OS security logs' },
      { id: 'D', text: 'Vulnerability scan' }
    ],
    correctAnswers: ['A'],
    explanation: 'Full packet captures (PCAP) save every raw byte and payload transmitted across network interfaces, generating massive terabytes of storage compared to structured text logs or NetFlow metadata.',
    examTip: 'PCAP retains full payloads but is very expensive; NetFlow stores lightweight connection metadata.'
  },
  {
    id: 'd4-q772',
    domainId: 4,
    subtopic: 'Malware Analysis',
    questionNumber: 772,
    type: 'single',
    prompt: 'An employee submits a suspicious email attachment. The analyst scans the file with static signature-based antivirus, which reports clean. When opened in production, it deploys ransomware. Which step should the analyst have taken prior to releasing the file?',
    options: [
      { id: 'A', text: 'Review the file in a code editor.' },
      { id: 'B', text: 'Monitor the file connections with netstat.' },
      { id: 'C', text: 'Execute the file in a sandbox.' },
      { id: 'D', text: 'Retrieve the file hash and check with OSINT.' }
    ],
    correctAnswers: ['C'],
    explanation: 'Dynamic malware analysis inside an isolated, instrumented sandbox environment executes the binary safely, observing runtime behaviors, registry modifications, and dropped payloads that static signatures miss.',
    examTip: 'Static analysis looks at code without running it; Dynamic analysis executes it in a sandbox.'
  },
  {
    id: 'd4-q830',
    domainId: 4,
    subtopic: 'Network Telemetry',
    questionNumber: 830,
    type: 'single',
    prompt: 'Which of the following log sources is most efficient for detecting rapid, wide-ranging IP port scan and reconnaissance sweeps across thousands of internal subnets?',
    options: [
      { id: 'A', text: 'Firewall' },
      { id: 'B', text: 'Proxy' },
      { id: 'C', text: 'Endpoint' },
      { id: 'D', text: 'NetFlow' }
    ],
    correctAnswers: ['D'],
    explanation: 'NetFlow (or IPFIX) summarizes network traffic metadata (source/destination IP, port, protocol, byte count), making it extremely efficient for identifying horizontal and vertical port scan patterns without packet payload storage overhead.',
    examTip: 'NetFlow is ideal for tracking network traffic flow anomalies and port sweeps.'
  },
  {
    id: 'd4-q866',
    domainId: 4,
    subtopic: 'Digital Forensics Acquisition',
    questionNumber: 866,
    type: 'single',
    prompt: 'A security investigator powers down a compromised laptop to preserve evidence. What must the investigator do first before performing any forensics analysis or searching files on the storage drive?',
    options: [
      { id: 'A', text: 'Metadata review' },
      { id: 'B', text: 'Snapshot' },
      { id: 'C', text: 'Bit-level copy' },
      { id: 'D', text: 'Memory dump' }
    ],
    correctAnswers: ['C'],
    explanation: 'Forensic best practices dictate creating a forensically sound bit-stream physical image (bit-level copy, using tools like dd or FTK Imager with a write-blocker) and performing all analysis exclusively on the forensic clone, preserving the original pristine drive.',
    examTip: 'Never analyze live evidence directly; always create and verify a bit-level copy first.'
  },
  {
    id: 'd4-q875',
    domainId: 4,
    subtopic: 'Security Assessment Tools',
    questionNumber: 875,
    type: 'single',
    prompt: 'A penetration tester must conduct an automated vulnerability assessment across target subnets to discover missing patches, open ports, and configuration flaws. Which tool is purpose-built for this task?',
    options: [
      { id: 'A', text: 'Metasploit' },
      { id: 'B', text: 'Burp Suite' },
      { id: 'C', text: 'Nessus' },
      { id: 'D', text: 'Wireshark' }
    ],
    correctAnswers: ['C'],
    explanation: 'Nessus (Tenable) and OpenVAS are automated vulnerability scanning tools designed to audit network services, software versions, and known CVEs.',
    examTip: 'Nessus = Vulnerability scanner; Metasploit = Exploitation framework; Burp Suite = Web proxy/scanner; Wireshark = Protocol analyzer.'
  },
  {
    id: 'd4-q880',
    domainId: 4,
    subtopic: 'Order of Volatility & Digital Forensics',
    questionNumber: 880,
    type: 'single',
    prompt: 'A forensic responder arrives at a live, compromised Linux database server that is still powered on. According to RFC 3227 Order of Volatility, which evidence source should be captured FIRST before the others?',
    options: [
      { id: 'A', text: 'CPU registers, cache, and system RAM (volatile memory)' },
      { id: 'B', text: 'Solid-state drive (SSD) partitions' },
      { id: 'C', text: 'Remote syslog archival servers' },
      { id: 'D', text: 'Offline LTO magnetic backup tapes' }
    ],
    correctAnswers: ['A'],
    explanation: 'The Order of Volatility mandates collecting the most ephemeral evidence first: (1) CPU registers/cache, (2) RAM / routing tables / active network connections, (3) swap/temp space, (4) local disk drives, and (5) remote logs/backup media.',
    examTip: 'Order of Volatility: CPU Registers/Cache -> RAM/Network -> Disk -> Backups/Printouts.'
  },
  {
    id: 'd4-q885',
    domainId: 4,
    subtopic: 'Chain of Custody',
    questionNumber: 885,
    type: 'single',
    prompt: 'Following an insider fraud investigation, a hard drive is seized for potential criminal prosecution. Which document chronicles every person who handled the drive, the timestamps of transfer, Where it was stored, and its SHA-256 hash values?',
    options: [
      { id: 'A', text: 'Chain of custody form' },
      { id: 'B', text: 'Incident response playbook' },
      { id: 'C', text: 'Service level agreement' },
      { id: 'D', text: 'Acceptable use policy' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Chain of Custody document maintains an unbroken, signed chronological audit trail of who collected, transferred, accessed, and stored physical or digital evidence, ensuring its admissibility in a court of law.',
    examTip: 'Broken chain of custody renders forensic evidence inadmissible in legal proceedings.'
  },
  {
    id: 'd4-q890',
    domainId: 4,
    subtopic: 'Legal Hold & e-Discovery',
    questionNumber: 890,
    type: 'single',
    prompt: 'A corporation receives formal notification of pending civil litigation. The legal department instructs IT to immediately suspend automatic 90-day email deletion policies for six executive mailboxes. What is this directive called?',
    options: [
      { id: 'A', text: 'Legal hold (Litigation hold)' },
      { id: 'B', text: 'Right to be forgotten' },
      { id: 'C', text: 'Data minimization' },
      { id: 'D', text: 'Cryptographic erasure' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Legal Hold (or litigation hold) suspends normal data retention purge schedules to preserve electronically stored information (ESI) relevant to a lawsuit or regulatory investigation (e-Discovery).',
    examTip: 'Legal hold overrides standard automatic deletion policies to prevent spoliation of evidence.'
  },
  {
    id: 'd4-q895',
    domainId: 4,
    subtopic: 'Incident Response Lifecycle',
    questionNumber: 895,
    type: 'single',
    prompt: 'According to the NIST SP 800-61 Incident Response lifecycle, what is the correct sequential order of the four major phases?',
    options: [
      { id: 'A', text: 'Preparation -> Detection & Analysis -> Containment, Eradication & Recovery -> Post-Incident Activity' },
      { id: 'B', text: 'Detection & Analysis -> Preparation -> Eradication -> Containment' },
      { id: 'C', text: 'Containment -> Preparation -> Detection -> Lessons Learned' },
      { id: 'D', text: 'Preparation -> Eradication -> Detection & Analysis -> Post-Incident Activity' }
    ],
    correctAnswers: ['A'],
    explanation: 'The NIST SP 800-61 Incident Response model consists of 4 phases: (1) Preparation, (2) Detection and Analysis, (3) Containment, Eradication, and Recovery, and (4) Post-Incident Activity (Lessons Learned).',
    examTip: 'Memorize NIST IR in order: Preparation -> Detection/Analysis -> Containment/Eradication/Recovery -> Post-Incident Activity.'
  },
  {
    id: 'd4-q901',
    domainId: 4,
    subtopic: 'Credentialed vs Non-Credentialed Scans',
    questionNumber: 901,
    type: 'single',
    prompt: 'A security analyst wants to run a vulnerability scan that can inspect local Windows registry keys, installed application DLL patch levels, and missing OS hotfixes without generating false positives from network banners. Which scan type should be configured?',
    options: [
      { id: 'A', text: 'Credentialed (authenticated) scan' },
      { id: 'B', text: 'Non-credentialed (unauthenticated) scan' },
      { id: 'C', text: 'Passive network sniffing scan' },
      { id: 'D', text: 'External black-box port scan' }
    ],
    correctAnswers: ['A'],
    explanation: 'A credentialed (authenticated) scan logs into the target host via SSH, WMI, or WinRM using a read-only service account, allowing deep inspection of installed packages, registry keys, and local configurations.',
    examTip: 'Credentialed scans find internal missing patches accurately; Non-credentialed scans show only what an external attacker sees over the network.'
  },
  {
    id: 'd4-q906',
    domainId: 4,
    subtopic: 'Application Security Testing (SAST vs DAST)',
    questionNumber: 906,
    type: 'single',
    prompt: 'During a CI/CD build pipeline, an automated tool scans the uncompiled Java and Python source code repository for hardcoded API keys, unsafe functions, and SQL string concatenation before the app is ever compiled or run. What type of testing is this?',
    options: [
      { id: 'A', text: 'SAST (Static Application Security Testing)' },
      { id: 'B', text: 'DAST (Dynamic Application Security Testing)' },
      { id: 'C', text: 'Fuzzing' },
      { id: 'D', text: 'Runtime Application Self-Protection (RASP)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Static Application Security Testing (SAST) analyzes non-running source code or bytecode ("white-box" testing) early in the SDLC to identify coding flaws before compilation.',
    examTip: 'SAST = Scans static source code (not running); DAST = Tests a live running web application from the outside.'
  },
  {
    id: 'd4-q911',
    domainId: 4,
    subtopic: 'Software Supply Chain & SBOM',
    questionNumber: 911,
    type: 'single',
    prompt: 'When the Log4Shell (CVE-2021-44228) vulnerability was disclosed, a CISO needed to immediately determine which of the company\'s 300 applications contained the vulnerable open-source `log4j-core` transitive dependency. Which artifact provides this exact inventory?',
    options: [
      { id: 'A', text: 'SBOM (Software Bill of Materials)' },
      { id: 'B', text: 'SLA (Service Level Agreement)' },
      { id: 'C', text: 'CSR (Certificate Signing Request)' },
      { id: 'D', text: 'BCP (Business Continuity Plan)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Software Bill of Materials (SBOM) is a formal, machine-readable inventory listing all open-source and third-party software components, libraries, versions, and dependencies compiled into an application.',
    examTip: 'SBOM is like an "ingredients label" for software dependencies.'
  },
  {
    id: 'd4-q916',
    domainId: 4,
    subtopic: 'Identity Federation Protocols (SAML vs OAuth vs OIDC)',
    questionNumber: 916,
    type: 'single',
    prompt: 'A mobile fitness app requests permission to read a user\'s calendar events from Google Calendar without ever seeing the user\'s Google password, using scoped access tokens. Which authorization framework enables this delegated access?',
    options: [
      { id: 'A', text: 'OAuth 2.0' },
      { id: 'B', text: 'RADIUS' },
      { id: 'C', text: 'TACACS+' },
      { id: 'D', text: 'NTLM' }
    ],
    correctAnswers: ['A'],
    explanation: 'OAuth 2.0 is an industry-standard authorization framework that enables third-party applications to obtain limited, scoped delegated access to an HTTP service via access tokens without exposing user credentials.',
    examTip: 'OAuth 2.0 = Authorization (delegated API access); OpenID Connect (OIDC) = Authentication layer built on top of OAuth 2.0; SAML = XML-based enterprise web SSO.'
  },
  {
    id: 'd4-q921',
    domainId: 4,
    subtopic: 'Enterprise SSO & SAML',
    questionNumber: 921,
    type: 'single',
    prompt: 'An enterprise configures Single Sign-On (SSO) between its internal Identity Provider (IdP) and Salesforce (Service Provider) by exchanging digitally signed XML assertions in the user\'s browser. Which standard is being used?',
    options: [
      { id: 'A', text: 'SAML (Security Assertion Markup Language)' },
      { id: 'B', text: 'WPA3-Enterprise' },
      { id: 'C', text: 'SNMPv3' },
      { id: 'D', text: 'SSHv2' }
    ],
    correctAnswers: ['A'],
    explanation: 'Security Assertion Markup Language (SAML 2.0) is an XML-based open standard for exchanging authentication and authorization assertions between an Identity Provider (IdP) and a cloud Service Provider (SP).',
    examTip: 'Keywords "XML assertions", "IdP", and "Service Provider (SP)" point directly to SAML.'
  },
  {
    id: 'd4-q926',
    domainId: 4,
    subtopic: 'Privileged Access Management (PAM)',
    questionNumber: 926,
    type: 'single',
    prompt: 'To eliminate standing domain admin privileges, an organization implements a system where administrators must check out a temporary, auto-rotating password valid for only 60 minutes to perform a specific ticketed task. What is this control?',
    options: [
      { id: 'A', text: 'Just-in-Time (JIT) Privileged Access Management (PAM)' },
      { id: 'B', text: 'Discretionary Access Control (DAC)' },
      { id: 'C', text: ' Kerberos ticket pre-authentication' },
      { id: 'D', text: 'Password spraying' }
    ],
    correctAnswers: ['A'],
    explanation: 'Privileged Access Management (PAM) with Just-in-Time (JIT) elevation and password vaulting grants ephemeral administrative rights only when needed for an approved time window, then automatically revokes and rotates credentials.',
    examTip: 'JIT + PAM eliminates standing admin privileges and records privileged sessions.'
  },
  {
    id: 'd4-q931',
    domainId: 4,
    subtopic: 'Endpoint Detection & Response (EDR vs XDR)',
    questionNumber: 931,
    type: 'single',
    prompt: 'A SOC wants to upgrade from isolated endpoint monitoring to a unified platform that automatically ingests and correlates telemetry across endpoints, cloud workloads, email gateways, and network sensors in a single console. Which technology is this?',
    options: [
      { id: 'A', text: 'XDR (Extended Detection and Response)' },
      { id: 'B', text: 'Host-based Firewall' },
      { id: 'C', text: 'Static Antivirus' },
      { id: 'D', text: 'Port Scanner' }
    ],
    correctAnswers: ['A'],
    explanation: 'Extended Detection and Response (XDR) extends beyond traditional EDR (endpoints only) by correlating telemetry across endpoints, network, cloud, and email layers to detect multi-stage attacks automatically.',
    examTip: 'EDR = Endpoint only; XDR = Extended across Endpoint + Network + Cloud + Email.'
  },
  {
    id: 'd4-q936',
    domainId: 4,
    subtopic: 'User and Entity Behavior Analytics (UEBA)',
    questionNumber: 936,
    type: 'single',
    prompt: 'An employee who normally logs in Monday–Friday from 9 AM to 5 PM and downloads ~10 MB of PDFs per day suddenly logs in at 3:15 AM on Sunday and downloads 45 GB of engineering schematics using valid credentials. Which technology flags this baseline deviation?',
    options: [
      { id: 'A', text: 'UEBA (User and Entity Behavior Analytics)' },
      { id: 'B', text: 'Signature-based Antivirus' },
      { id: 'C', text: 'Stateless Packet Filter' },
      { id: 'D', text: 'SPF DNS Record' }
    ],
    correctAnswers: ['A'],
    explanation: 'User and Entity Behavior Analytics (UEBA) uses machine learning and statistical baselining to establish normal user behavior and detect anomalous insider or compromised-credential activity.',
    examTip: 'UEBA detects anomalies when valid credentials are misused outside normal behavioral baselines.'
  },
  {
    id: 'd4-q941',
    domainId: 4,
    subtopic: 'Data Loss Prevention (DLP)',
    questionNumber: 941,
    type: 'single',
    prompt: 'An accountant attempts to attach an unencrypted spreadsheet containing 2,500 customer Social Security Numbers to an external Gmail message. The mail gateway automatically blocks the message based on a regular expression pattern match. Which tool performed this block?',
    options: [
      { id: 'A', text: 'DLP (Data Loss Prevention)' },
      { id: 'B', text: 'DHCP Snooping' },
      { id: 'C', text: 'BGP Route Filter' },
      { id: 'D', text: 'TPM Chip' }
    ],
    correctAnswers: ['A'],
    explanation: 'Data Loss Prevention (DLP) inspects data in use (endpoint USB/clipboard), data in transit (network/email), and data at rest (storage) using regex patterns, watermarks, and classification labels to block unauthorized exfiltration of PII/CCN.',
    examTip: 'DLP stops sensitive data (SSNs, credit cards, health records) from leaving the organization.'
  },
  {
    id: 'd4-q946',
    domainId: 4,
    subtopic: 'Command-Line Network Diagnostics',
    questionNumber: 946,
    type: 'single',
    prompt: 'A Linux systems administrator suspects a compromised server is listening on an unauthorized backdoor TCP port. Which local command-line utility displays all active listening sockets and the Process ID (PID) bound to each port?',
    options: [
      { id: 'A', text: 'netstat -tulnp (or ss -tulnp)' },
      { id: 'B', text: 'chmod 777' },
      { id: 'C', text: 'nslookup' },
      { id: 'D', text: 'traceroute' }
    ],
    correctAnswers: ['A'],
    explanation: '`netstat` (or `ss` on modern Linux) displays active TCP/UDP network connections, listening ports, and the associated process IDs (PIDs) on a local host.',
    examTip: 'netstat = local connections/listening ports; nmap = remote port scanning; tcpdump/wireshark = packet capture; dig/nslookup = DNS queries.'
  },
  {
    id: 'd4-q951',
    domainId: 4,
    subtopic: 'Packet Capture CLI Tools',
    questionNumber: 951,
    type: 'single',
    prompt: 'An incident responder is logged into a headless Linux firewall via SSH (no GUI available) and needs to capture raw packets traversing interface `eth0` on port 53 into a `.pcap` file for later inspection. Which tool should be used?',
    options: [
      { id: 'A', text: 'tcpdump' },
      { id: 'B', text: 'grep' },
      { id: 'C', text: 'arp -a' },
      { id: 'D', text: 'chage' }
    ],
    correctAnswers: ['A'],
    explanation: '`tcpdump` is the standard command-line packet analyzer for Unix/Linux systems capable of filtering and writing raw network frames to standard `.pcap` files.',
    examTip: 'tcpdump = CLI packet capture; Wireshark = GUI packet analyzer.'
  },
  {
    id: 'd4-q956',
    domainId: 4,
    subtopic: 'Disk Imaging CLI Tools',
    questionNumber: 956,
    type: 'single',
    prompt: 'Which standard Linux command-line utility is used by digital forensic analysts to create a bit-for-bit raw image of a storage block device (`/dev/sda`) onto an external forensic drive?',
    options: [
      { id: 'A', text: 'dd' },
      { id: 'B', text: 'top' },
      { id: 'C', text: 'ipconfig' },
      { id: 'D', text: 'crontab' }
    ],
    correctAnswers: ['A'],
    explanation: 'The `dd` (data duplicator) command performs low-level, bit-by-bit copying of raw disk volumes (e.g., `dd if=/dev/sda of=/mnt/forensics/disk.img bs=4M`), preserving deleted sectors and slack space.',
    examTip: 'dd = bit-level disk cloning in Linux; memdump/LiME = RAM capture.'
  },
  {
    id: 'd4-q961',
    domainId: 4,
    subtopic: 'Cybersecurity Teams (Red, Blue, Purple, White)',
    questionNumber: 961,
    type: 'single',
    prompt: 'To maximize learning during an exercise, offensive penetration testers sit side-by-side with SOC defenders, sharing attack commands in real time so defenders can immediately tune SIEM correlation rules and EDR signatures. What type of team exercise is this?',
    options: [
      { id: 'A', text: 'Purple team' },
      { id: 'B', text: 'Red team' },
      { id: 'C', text: 'Blue team' },
      { id: 'D', text: 'White team' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Purple Team exercise combines the offensive Red Team (attackers) and defensive Blue Team (SOC defenders) into a collaborative feedback loop to rapidly improve detection and response efficacy.',
    examTip: 'Red = Offense; Blue = Defense; Purple = Collaborative Offense + Defense; White = Referees/Judges setting rules of engagement.'
  },
  {
    id: 'd4-q966',
    domainId: 4,
    subtopic: 'Penetration Testing Reconnaissance',
    questionNumber: 966,
    type: 'single',
    prompt: 'Before sending a single packet to a target company\'s servers, a penetration tester reviews public LinkedIn employee profiles, GitHub commit histories, WHOIS records, and Shodan indexes. What type of reconnaissance is this?',
    options: [
      { id: 'A', text: 'Passive reconnaissance (OSINT)' },
      { id: 'B', text: 'Active reconnaissance' },
      { id: 'C', text: 'Credentialed vulnerability scanning' },
      { id: 'D', text: 'Privilege escalation' }
    ],
    correctAnswers: ['A'],
    explanation: 'Passive reconnaissance leverages Open-Source Intelligence (OSINT) and public third-party databases without directly touching or sending network traffic to the target\'s infrastructure, leaving zero logs on the target\'s firewall.',
    examTip: 'Passive recon = Zero direct traffic to target (OSINT, WHOIS, social media); Active recon = Sends probes directly to target (Nmap port scans, ping sweeps).'
  },
  {
    id: 'd4-q971',
    domainId: 4,
    subtopic: 'Penetration Testing Environments (Known vs Unknown)',
    questionNumber: 971,
    type: 'single',
    prompt: 'An external penetration testing firm is hired to simulate a realistic external attacker. The client provides ONLY the company name and gives zero network diagrams, IP lists, or source code. Which testing environment is this?',
    options: [
      { id: 'A', text: 'Unknown environment (Black-box)' },
      { id: 'B', text: 'Known environment (White-box)' },
      { id: 'C', text: 'Partially known environment (Gray-box)' },
      { id: 'D', text: 'Tabletop walkthrough' }
    ],
    correctAnswers: ['A'],
    explanation: 'An Unknown environment (traditionally called Black-box testing) gives the tester zero prior internal knowledge, simulating an unprivileged external adversary who must perform reconnaissance from scratch.',
    examTip: 'CompTIA SY0-701 uses "Unknown environment" (Black-box), "Partially known" (Gray-box), and "Known environment" (White-box).'
  },
  {
    id: 'd4-q976',
    domainId: 4,
    subtopic: 'Log Aggregation & Time Synchronization',
    questionNumber: 976,
    type: 'single',
    prompt: 'While reconstructing an intrusion timeline across firewalls, domain controllers, and Linux web servers in a SIEM, an analyst notices that event timestamps are skewed by up to 14 minutes between servers. Which protocol must be configured across all devices to fix this?',
    options: [
      { id: 'A', text: 'NTP (Network Time Protocol)' },
      { id: 'B', text: 'SMTP (Simple Mail Transfer Protocol)' },
      { id: 'C', text: 'FTP (File Transfer Protocol)' },
      { id: 'D', text: 'RDP (Remote Desktop Protocol)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Network Time Protocol (NTP) synchronizes system clocks across all routers, switches, servers, and endpoints to an authoritative atomic/stratum time source (ideally in UTC), ensuring accurate forensic log correlation.',
    examTip: 'Synchronized NTP timestamps (UDP Port 123) are critical for SIEM log correlation and forensic timelines.'
  },
  {
    id: 'd4-q981',
    domainId: 4,
    subtopic: 'File Integrity Monitoring (FIM)',
    questionNumber: 981,
    type: 'single',
    prompt: 'Which host security control continuously computes cryptographic SHA-256 hashes of critical OS binaries (`/bin/login`, `C:\\Windows\\System32\\cmd.exe`) and alerts the SOC if an unauthorized change or rootkit replacement occurs?',
    options: [
      { id: 'A', text: 'FIM (File Integrity Monitoring)' },
      { id: 'B', text: 'NAC (Network Access Control)' },
      { id: 'C', text: 'SPF (Sender Policy Framework)' },
      { id: 'D', text: 'UPS (Uninterruptible Power Supply)' }
    ],
    correctAnswers: ['A'],
    explanation: 'File Integrity Monitoring (FIM, such as Tripwire, OSSEC, or Wazuh) monitors critical operating system files, configuration files, and registries against a known-good cryptographic hash baseline.',
    examTip: 'FIM is a detective control that spots unauthorized tampering with critical system files.'
  },
  {
    id: 'd4-q986',
    domainId: 4,
    subtopic: 'Secure Data Sanitization & Disposal',
    questionNumber: 986,
    type: 'single',
    prompt: 'A defense contractor is decommissioning magnetic hard disk drives (HDDs) and magnetic backup tapes containing Top Secret data. Which sanitization method uses a powerful electromagnetic field to instantly destroy the magnetic domains on the media?',
    options: [
      { id: 'A', text: 'Degaussing' },
      { id: 'B', text: 'Quick formatting' },
      { id: 'C', text: 'Deleting the partition table' },
      { id: 'D', text: 'Data masking' }
    ],
    correctAnswers: ['A'],
    explanation: 'Degaussing exposes magnetic storage media (HDD platters and magnetic tapes) to a high-gauss electromagnetic field, permanently erasing magnetic flux patterns and rendering the HDD unusable.',
    examTip: 'Important exam trap: Degaussing works ONLY on magnetic media (HDDs/tapes)—it does NOT work on flash SSDs or optical DVDs!'
  },
  {
    id: 'd4-q991',
    domainId: 4,
    subtopic: 'SSD & Cloud Media Sanitization',
    questionNumber: 991,
    type: 'single',
    prompt: 'Because solid-state drives (SSDs) use wear-leveling algorithms and flash memory cells cannot be degaussed, what is the fastest NIST 800-88 approved method to sanitize a Self-Encrypting SSD (SED) for reuse?',
    options: [
      { id: 'A', text: 'Cryptographic erasure (Crypto-shredding)' },
      { id: 'B', text: 'Degaussing the SSD controller' },
      { id: 'C', text: 'Deleting files to the Recycle Bin' },
      { id: 'D', text: 'Defragmenting the volume' }
    ],
    correctAnswers: ['A'],
    explanation: 'Cryptographic erasure (crypto-shredding) destroys and regenerates the internal Media Encryption Key (MEK) inside a Self-Encrypting Drive (SED), instantly rendering all stored ciphertext permanently unreadable.',
    examTip: 'For SSDs and multi-tenant cloud storage, Cryptographic Erasure (destroying the encryption key) is the preferred sanitization method.'
  },
  {
    id: 'd4-q996',
    domainId: 4,
    subtopic: 'Application Allow Listing',
    questionNumber: 996,
    type: 'single',
    prompt: 'A point-of-sale (POS) terminal needs to be locked down so that ONLY five specific corporate binaries (verified by digital publisher signature or SHA-256 hash) are permitted to execute, blocking all other executables Including unknown zero-day ransomware. What control is this?',
    options: [
      { id: 'A', text: 'Application allow listing (whitelisting)' },
      { id: 'B', text: 'Application block listing (blacklisting)' },
      { id: 'C', text: 'Port forwarding' },
      { id: 'D', text: 'MAC filtering' }
    ],
    correctAnswers: ['A'],
    explanation: 'Application allow listing (e.g., Windows AppLocker) follows a default-deny posture where only explicitly approved executables (matched by cryptographic hash, path, or certificate) can run.',
    examTip: 'Allow listing blocks unknown zero-day executables because anything not on the approved list is denied by default.'
  },
  {
    id: 'd4-q1001',
    domainId: 4,
    subtopic: 'CVSS Vector String Interpretation',
    questionNumber: 1001,
    type: 'single',
    prompt: 'An analyst reviews a vulnerability advisory with the CVSS v3.1 vector string: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`. What does `AV:N` combined with `PR:N` and `UI:N` indicate?',
    options: [
      { id: 'A', text: 'The vulnerability is exploitable remotely over the network without any authentication or user interaction' },
      { id: 'B', text: 'The attacker must have physical USB access and local administrator privileges' },
      { id: 'C', text: 'The vulnerability has zero impact on confidentiality, integrity, or availability' },
      { id: 'D', text: 'An antivirus signature has already neutralized the vulnerability' }
    ],
    correctAnswers: ['A'],
    explanation: 'In CVSS vector notation: AV:N = Attack Vector: Network (remotely exploitable); AC:L = Attack Complexity: Low; PR:N = Privileges Required: None (unauthenticated); UI:N = User Interaction: None; C:H/I:H/A:H = High impact across CIA.',
    examTip: 'CVSS AV values: N = Network, A = Adjacent (Bluetooth/Wi-Fi), L = Local, P = Physical.'
  },
  {
    id: 'd4-q1006',
    domainId: 4,
    subtopic: 'SCAP & Automation Protocols',
    questionNumber: 1006,
    type: 'single',
    prompt: 'Which U.S. government/NIST standardized suite of specifications (including CVE, CVSS, CCE, CPE, XCCDF, and OVAL) enables automated vulnerability management, configuration baseline checking, and compliance scoring?',
    options: [
      { id: 'A', text: 'SCAP (Security Content Automation Protocol)' },
      { id: 'B', text: 'EAP-TTLS' },
      { id: 'C', text: 'WPA3-SAE' },
      { id: 'D', text: 'RESTful JSON' }
    ],
    correctAnswers: ['A'],
    explanation: 'The Security Content Automation Protocol (SCAP) combines open standards like CVE (vulnerabilities), CVSS (scoring), CPE (product names), and XCCDF/OVAL (checklists) to automate compliance auditing.',
    examTip: 'SCAP is the umbrella NIST framework uniting CVE, CVSS, CPE, CCE, and OVAL.'
  },
  {
    id: 'd4-q1011',
    domainId: 4,
    subtopic: 'Threat Intelligence Sharing (STIX / TAXII)',
    questionNumber: 1011,
    type: 'single',
    prompt: 'A financial services SOC wants to automatically ingest machine-readable Indicators of Compromise (IoCs)—such as malicious IP addresses, file hashes, and C2 domains—from an industry ISAC feed into its firewall and SIEM. Which protocol pair is designed for this?',
    options: [
      { id: 'A', text: 'STIX and TAXII' },
      { id: 'B', text: 'POP3 and IMAP' },
      { id: 'C', text: 'ARP and RARP' },
      { id: 'D', text: 'PAP and CHAP' }
    ],
    correctAnswers: ['A'],
    explanation: 'Structured Threat Information Expression (STIX) is a standardized language for describing cyber threat intelligence (IoCs/TTPs), and Trusted Automated Exchange of Intelligence Information (TAXII) is the HTTPS transport protocol used to exchange STIX data.',
    examTip: 'STIX = Data format/schema for threat intel; TAXII = Transport protocol for sharing STIX feeds.'
  },
  {
    id: 'd4-q1016',
    domainId: 4,
    subtopic: 'Incident Containment vs Eradication',
    questionNumber: 1016,
    type: 'single',
    prompt: 'During an active ransomware outbreak, a SOC engineer disables the switch port connected to an infected file server so the malware cannot encrypt shared network drives, while leaving the server powered on for memory forensics. Which IR phase is this?',
    options: [
      { id: 'A', text: 'Containment (Isolation)' },
      { id: 'B', text: 'Eradication' },
      { id: 'C', text: 'Preparation' },
      { id: 'D', text: 'Lessons learned' }
    ],
    correctAnswers: ['A'],
    explanation: 'Disconnecting or isolating an infected host from the network to stop lateral spread and limit damage (blast radius) is the hallmark of the Containment phase.',
    examTip: 'Containment = Stop the bleeding (isolate/quarantine); Eradication = Remove the root cause (wipe/reimage/patch); Recovery = Restore from clean backups.'
  },
  {
    id: 'd4-q1021',
    domainId: 4,
    subtopic: 'Incident Eradication & Recovery',
    questionNumber: 1021,
    type: 'single',
    prompt: 'After containing a rootkit infection and capturing forensic images, the administrator wipes the server drives, installs a fresh OS image from golden media, applies the latest security patches, and deletes the attacker\'s persistence accounts. Which IR phase is this?',
    options: [
      { id: 'A', text: 'Eradication' },
      { id: 'B', text: 'Detection' },
      { id: 'C', text: 'Passive Reconnaissance' },
      { id: 'D', text: 'Tabletop Exercise' }
    ],
    correctAnswers: ['A'],
    explanation: 'Eradication completely removes the malware, rootkits, rogue accounts, and underlying vulnerabilities from the environment so the attacker cannot immediately regain access upon recovery.',
    examTip: 'Reimaging hosts, removing malware artifacts, and patching the exploited vulnerability belong to Eradication.'
  },
  {
    id: 'd4-q1026',
    domainId: 4,
    subtopic: 'Wireless Security Monitoring',
    questionNumber: 1026,
    type: 'single',
    prompt: 'An enterprise deploys dedicated RF sensors across its campus ceiling grid that not only detect unauthorized Evil Twin access points, but automatically transmit deauthentication frames to prevent corporate laptops from connecting to them. What system is this?',
    options: [
      { id: 'A', text: 'WIPS (Wireless Intrusion Prevention System)' },
      { id: 'B', text: 'WPS (Wi-Fi Protected Setup)' },
      { id: 'C', text: 'WEP (Wired Equivalent Privacy)' },
      { id: 'D', text: 'WAF (Web Application Firewall)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Wireless Intrusion Prevention System (WIPS) monitors the radio spectrum for rogue APs and Evil Twins and actively prevents wireless clients from associating with unauthorized transmitters.',
    examTip: 'WIDS = Detects rogue wireless APs; WIPS = Detects AND actively blocks/deauthenticates rogue wireless connections.'
  },
  {
    id: 'd4-q1031',
    domainId: 4,
    subtopic: 'BGP & Routing Security',
    questionNumber: 1031,
    type: 'single',
    prompt: 'A global bank notices that customer traffic destined for its public IP block was briefly rerouted through an unauthorized foreign Autonomous System (AS) on the internet. Which routing attack occurred?',
    options: [
      { id: 'A', text: 'BGP hijacking (Route hijacking)' },
      { id: 'B', text: 'ARP cache poisoning' },
      { id: 'C', text: 'VLAN hopping' },
      { id: 'D', text: 'MAC flooding' }
    ],
    correctAnswers: ['A'],
    explanation: 'Border Gateway Protocol (BGP) hijacking occurs when an autonomous system announces illegitimate IP prefix routes across the internet backbone, diverting or intercepting traffic (mitigated via RPKI route origin validation).',
    examTip: 'ARP/MAC/VLAN attacks are Layer 2 (local LAN); BGP hijacking is Layer 3 (global internet routing).'
  },
  {
    id: 'd4-q1036',
    domainId: 4,
    subtopic: 'Certificate Revocation (CRL vs OCSP Stapling)',
    questionNumber: 1036,
    type: 'single',
    prompt: 'To improve HTTPS handshake speed and user privacy, a web server periodically queries the Certificate Authority\'s OCSP responder itself and caches a digitally signed, timestamped "good" status directly into the TLS handshake. What is this feature called?',
    options: [
      { id: 'A', text: 'OCSP stapling' },
      { id: 'B', text: 'Certificate pinning' },
      { id: 'C', text: 'Key escrow' },
      { id: 'D', text: 'Self-signing' }
    ],
    correctAnswers: ['A'],
    explanation: 'OCSP stapling relieves client browsers from having to contact the CA\'s OCSP server directly during every TLS handshake. Instead, the web server "staples" a fresh, CA-signed OCSP timestamp proof right onto the TLS certificate exchange.',
    examTip: 'OCSP Stapling reduces client latency and protects client browsing privacy from the CA.'
  }
];

