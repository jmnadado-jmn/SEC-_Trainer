import { MultipleChoiceQuestion } from '../types/exam';

export const DOMAIN_5_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 'd5-q12',
    domainId: 5,
    subtopic: 'Third-Party Penetration Testing & Legal Scope',
    questionNumber: 12,
    type: 'single',
    prompt: 'Which document formally outlines the legal boundaries, authorized test dates/hours, in-scope IP ranges, and emergency contact procedures for a third-party penetration tester?',
    options: [
      { id: 'A', text: 'Rules of engagement' },
      { id: 'B', text: 'Supply chain analysis' },
      { id: 'C', text: 'Right to audit clause' },
      { id: 'D', text: 'Due diligence' }
    ],
    correctAnswers: ['A'],
    explanation: 'Rules of Engagement (RoE) define the agreed-upon technical boundaries, permitted test windows, targets, methodologies, and limitations for security testing so testers do not exceed authorized scope.',
    examTip: 'The RoE protects both the client and the penetration tester legally.'
  },
  {
    id: 'd5-q14',
    domainId: 5,
    subtopic: 'Disaster Recovery Planning',
    questionNumber: 14,
    type: 'single',
    prompt: 'Which organizational plan is explicitly required to govern the step-by-step procedures for restoring critical IT infrastructure and services following a major hardware failure or site catastrophe?',
    options: [
      { id: 'A', text: 'IRP' },
      { id: 'B', text: 'DRP' },
      { id: 'C', text: 'RPO' },
      { id: 'D', text: 'SDLC' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Disaster Recovery Plan (DRP) focuses specifically on technical recovery procedures, failovers, and restoration order for IT hardware, applications, and communications following a disruption.',
    examTip: 'BCP is broad business operations continuity; DRP is technical IT systems recovery.'
  },
  {
    id: 'd5-q24',
    domainId: 5,
    subtopic: 'Risk Treatment Strategies',
    questionNumber: 24,
    type: 'single',
    prompt: 'A company purchased a comprehensive cyber liability insurance policy to cover extortion and breach notification costs. What risk management strategy does this represent?',
    options: [
      { id: 'A', text: 'Accept' },
      { id: 'B', text: 'Transfer' },
      { id: 'C', text: 'Mitigate' },
      { id: 'D', text: 'Avoid' }
    ],
    correctAnswers: ['B'],
    explanation: 'Risk transference shifts the financial burden of potential adverse events to a third party (such as an insurance company or warranty provider).',
    examTip: 'Four primary risk treatments: Mitigate (implement controls), Transfer (insurance/outsource), Avoid (stop activity), Accept (acknowledge residual risk).'
  },
  {
    id: 'd5-q28',
    domainId: 5,
    subtopic: 'Risk Documentation',
    questionNumber: 28,
    type: 'single',
    prompt: 'What document is maintained by the security governance team to record identified vulnerabilities, assigned owners, likelihood, impact ratings, and mitigation deadlines?',
    options: [
      { id: 'A', text: 'Risk tolerance' },
      { id: 'B', text: 'Risk transfer' },
      { id: 'C', text: 'Risk register' },
      { id: 'D', text: 'Risk analysis' }
    ],
    correctAnswers: ['C'],
    explanation: 'A risk register is a centralized management tool used to record, categorize, track, and review all identified organization-wide risks alongside remediation actions and assigned owners.',
    examTip: 'The risk register is a living document reviewed regularly by management.'
  },
  {
    id: 'd5-q30',
    domainId: 5,
    subtopic: 'Vulnerability Disclosure & Bug Bounties',
    questionNumber: 30,
    type: 'single',
    prompt: 'A company allows external security researchers and ethical hackers to probe internet-facing systems and provides financial compensation for responsibly disclosed bugs. What program is this?',
    options: [
      { id: 'A', text: 'Open-source intelligence' },
      { id: 'B', text: 'Bug bounty' },
      { id: 'C', text: 'Red team' },
      { id: 'D', text: 'Penetration testing' }
    ],
    correctAnswers: ['B'],
    explanation: 'A bug bounty program crowdsources vulnerability discovery by offering monetary rewards to external ethical researchers who discover and securely report valid zero-day or configuration flaws.',
    examTip: 'Bug bounties complement internal vulnerability management programs.'
  },
  {
    id: 'd5-q39',
    domainId: 5,
    subtopic: 'Vendor Agreements & Contracts',
    questionNumber: 39,
    type: 'single',
    prompt: 'A client asks an external cybersecurity consulting firm for a binding legal document specifically detailing the project deliverables, milestones, hourly billing rates, and total cost. What document is this?',
    options: [
      { id: 'A', text: 'MSA' },
      { id: 'B', text: 'SLA' },
      { id: 'C', text: 'BPA' },
      { id: 'D', text: 'SOW' }
    ],
    correctAnswers: ['D'],
    explanation: 'A Statement of Work (SOW) outlines project-specific details including deliverables, work hours, cost breakdowns, timelines, and acceptance criteria under an overarching contract.',
    examTip: 'MSA (Master Services Agreement) sets general terms; SOW specifies project details and costs.'
  },
  {
    id: 'd5-q42',
    domainId: 5,
    subtopic: 'Change Management',
    questionNumber: 42,
    type: 'single',
    prompt: 'A technician needs to apply a high-priority critical security patch to an enterprise production ERP cluster. What step must be completed first prior to applying the patch?',
    options: [
      { id: 'A', text: 'Air gap system' },
      { id: 'B', text: 'Move system to different network segment' },
      { id: 'C', text: 'Create change control request' },
      { id: 'D', text: 'Apply patch' }
    ],
    correctAnswers: ['C'],
    explanation: 'All modifications to production enterprise systems must follow structured change management procedures, beginning with a formal change control request documenting risk, rollback plan, and scheduling approval.',
    examTip: 'Never apply unapproved patches directly to production; always submit a change request with a backout plan.'
  },
  {
    id: 'd5-q79',
    domainId: 5,
    subtopic: 'Legal Hold & Data Preservation',
    questionNumber: 79,
    type: 'single',
    prompt: 'Corporate legal counsel requests that the security operations team initiate an immediate legal hold following a class-action lawsuit. What action is required?',
    options: [
      { id: 'A', text: 'Retain emails for 30 days' },
      { id: 'B', text: 'Retain communications and records related to the matter until further notice' },
      { id: 'C', text: 'Retain breach response team chats only' },
      { id: 'D', text: 'Retain all emails to customers indefinitely' }
    ],
    correctAnswers: ['B'],
    explanation: 'A legal hold suspends standard data destruction and retention purge routines, mandating that all relevant electronic communications, logs, and files are preserved in an unalterable state for court proceedings.',
    examTip: 'Legal hold overrides regular automated data retention purging.'
  },
  {
    id: 'd5-q81',
    domainId: 5,
    subtopic: 'Incident Response Exercises',
    questionNumber: 81,
    type: 'single',
    prompt: 'A security manager newly drafted an updated Incident Response Plan (IRP) for cloud ransomware incidents. What is the immediate recommended next step before putting it into effect?',
    options: [
      { id: 'A', text: 'Set retention policy' },
      { id: 'B', text: 'Store on air-gapped network' },
      { id: 'C', text: 'Review data classification' },
      { id: 'D', text: 'Conduct a tabletop exercise with the team' }
    ],
    correctAnswers: ['D'],
    explanation: 'A tabletop exercise gathers key stakeholders and incident responders to walk through simulated scenarios, validating roles, communication escalation paths, and identifying gaps in new IRP documentation.',
    examTip: 'Tabletop exercises are discussion-based simulations used to test plans without operational disruption.'
  },
  {
    id: 'd5-q97',
    domainId: 5,
    subtopic: 'Data Classification & DLP Deployment',
    questionNumber: 97,
    type: 'single',
    prompt: 'An administrator deploys an enterprise DLP solution to prevent sensitive customer records from being exfiltrated. What prerequisite step must be completed first?',
    options: [
      { id: 'A', text: 'Block cloud storage websites' },
      { id: 'B', text: 'Create rule to block outgoing email attachments' },
      { id: 'C', text: 'Apply classifications and labels to the data' },
      { id: 'D', text: 'Remove user permissions on shares' }
    ],
    correctAnswers: ['C'],
    explanation: 'DLP solutions rely fundamentally on data discovery, classification labels, and metadata tags (e.g. Confidential, PII, Restricted) to accurately identify what data must be inspected and blocked.',
    examTip: 'You cannot protect or enforce DLP rules on data if you do not know what and where it is (classification is prerequisite).'
  },
  {
    id: 'd5-q109',
    domainId: 5,
    subtopic: 'Vendor Agreements',
    questionNumber: 109,
    type: 'single',
    prompt: 'Which contract component formally defines the maximum allowable response and remediation timeframes for a vendor providing security incident response services?',
    options: [
      { id: 'A', text: 'SOW' },
      { id: 'B', text: 'SLA' },
      { id: 'C', text: 'MOA' },
      { id: 'D', text: 'MOU' }
    ],
    correctAnswers: ['B'],
    explanation: 'A Service Level Agreement (SLA) specifies measurable performance standards, uptime metrics, and contractual response times (e.g. 1-hour ticket response, 99.99% uptime).',
    examTip: 'SLA = Performance guarantees and response times.'
  },
  {
    id: 'd5-q113',
    domainId: 5,
    subtopic: 'Secure Software Development',
    questionNumber: 113,
    type: 'single',
    prompt: 'Which software development governance control prevents a rogue insider developer from silently injecting malicious backdoors into enterprise application releases?',
    options: [
      { id: 'A', text: 'Code scanning' },
      { id: 'B', text: 'Open-source component usage' },
      { id: 'C', text: 'QA testing' },
      { id: 'D', text: 'Peer review and approval' }
    ],
    correctAnswers: ['D'],
    explanation: 'Mandatory peer review and approval (dual-authorization pull request sign-offs) enforces separation of duties, ensuring no single individual can merge arbitrary code directly into production branches.',
    examTip: 'Peer review enforces two-person integrity in software development.'
  },
  {
    id: 'd5-q160',
    domainId: 5,
    subtopic: 'Risk Terminology',
    questionNumber: 160,
    type: 'single',
    prompt: 'Which term defines the boundary or maximum limit of variance and risk that an organization is willing to accept before taking corrective action?',
    options: [
      { id: 'A', text: 'Risk indicator' },
      { id: 'B', text: 'Risk level' },
      { id: 'C', text: 'Risk score' },
      { id: 'D', text: 'Risk threshold' }
    ],
    correctAnswers: ['D'],
    explanation: 'The risk threshold is the specific defined limit above which an organization considers a risk unacceptable, mandating active remediation or executive escalation.',
    examTip: 'Risk appetite is high-level willingness; Risk threshold is the specific numerical or policy limit.'
  },
  {
    id: 'd5-q189',
    domainId: 5,
    subtopic: 'Personnel Security Controls',
    questionNumber: 189,
    type: 'single',
    prompt: 'Which personnel security practice is designed to uncover internal employee fraud and collusion by periodically rotating personnel between different administrative roles?',
    options: [
      { id: 'A', text: 'Least privilege' },
      { id: 'B', text: 'Mandatory vacation' },
      { id: 'C', text: 'Separation of duties' },
      { id: 'D', text: 'Job rotation' }
    ],
    correctAnswers: ['D'],
    explanation: 'Job rotation periodically shifts staff members into different operational assignments, allowing cross-training and exposing unauthorized activities or anomalies hidden by predecessors.',
    examTip: 'Mandatory vacations and Job rotation are primary controls for detecting fraud.'
  },
  {
    id: 'd5-q229',
    domainId: 5,
    subtopic: 'Risk Governance',
    questionNumber: 229,
    type: 'single',
    prompt: 'In order to capture a major holiday market opportunity, executive leadership directs IT to deploy a platform early despite knowing that full third-party security audits were not yet finished. Which concept describes the leadership\'s stance?',
    options: [
      { id: 'A', text: 'Risk tolerance' },
      { id: 'B', text: 'Risk acceptance' },
      { id: 'C', text: 'Risk importance' },
      { id: 'D', text: 'Risk appetite' }
    ],
    correctAnswers: ['D'],
    explanation: 'Risk appetite is the overarching amount and type of risk an organization is strategically willing to pursue or accept in order to achieve its business objectives.',
    examTip: 'Risk appetite reflects executive strategic posture toward risk.'
  },
  {
    id: 'd5-q246',
    domainId: 5,
    subtopic: 'Data Privacy Governance',
    questionNumber: 246,
    type: 'single',
    prompt: 'Which of the following legal determinations is most fundamental for an organization to clarify when building compliance with modern privacy regulations like GDPR?',
    options: [
      { id: 'A', text: 'Reporting structure for the data privacy officer' },
      { id: 'B', text: 'Request process for data subject access' },
      { id: 'C', text: 'Role as data controller or data processor' },
      { id: 'D', text: 'Physical location of company offices' }
    ],
    correctAnswers: ['C'],
    explanation: 'Determining whether the organization is a Data Controller (deciding the purpose and means of data processing) or Data Processor (handling data strictly on behalf of the controller) dictates its primary legal liabilities and statutory compliance duties.',
    examTip: 'Controllers have primary accountability; Processors must adhere to Data Processing Agreements (DPAs).'
  },
  {
    id: 'd5-q399',
    domainId: 5,
    subtopic: 'Quantitative Risk Calculations',
    questionNumber: 399,
    type: 'single',
    prompt: 'A security analyst determines that a security breach has an estimated Single Loss Expectancy (SLE) of $15,000 and is expected to occur twice every three years. Which of the following is the Annualized Loss Expectancy (ALE)?',
    options: [
      { id: 'A', text: '$7,500' },
      { id: 'B', text: '$10,000' },
      { id: 'C', text: '$15,000' },
      { id: 'D', text: '$30,000' }
    ],
    correctAnswers: ['B'],
    explanation: 'ARO = 2 occurrences / 3 years = 2/3 (0.667). ALE = SLE × ARO = $15,000 × (2/3) = $10,000.',
    examTip: 'CompTIA formula: ALE = Single Loss Expectancy (SLE) × Annualized Rate of Occurrence (ARO).'
  },
  {
    id: 'd5-q401',
    domainId: 5,
    subtopic: 'Third-Party Risk Management',
    questionNumber: 401,
    type: 'single',
    prompt: 'A security analyst is evaluating a cloud payroll SaaS vendor prior to procurement. The analyst asks the vendor to furnish an independent SOC 2 Type II audit report. Which process is the analyst conducting?',
    options: [
      { id: 'A', text: 'Internal audit' },
      { id: 'B', text: 'Penetration testing' },
      { id: 'C', text: 'Attestation' },
      { id: 'D', text: 'Due diligence' }
    ],
    correctAnswers: ['D'],
    explanation: 'Due diligence is the ongoing and pre-contractual practice of verifying that third-party vendors and partners meet established security, legal, and operational compliance standards.',
    examTip: 'Due diligence is the investigation/research done BEFORE signing; Due care is the ongoing execution of good practices.'
  },
  {
    id: 'd5-q476',
    domainId: 5,
    subtopic: 'Privacy Regulations',
    questionNumber: 476,
    type: 'single',
    prompt: 'Under GDPR and modern consumer data privacy frameworks, what action is an organization legally required to take when an individual formally exercises their "right to be forgotten"?',
    options: [
      { id: 'A', text: 'Purge only personally identifiable attributes from user profiles' },
      { id: 'B', text: 'Encrypt all of the data with a new key' },
      { id: 'C', text: 'Permanently remove and erase all of the individual\'s personal data' },
      { id: 'D', text: 'Obfuscate and mask the customer\'s telephone number' }
    ],
    correctAnswers: ['C'],
    explanation: 'The "right to be forgotten" (right to erasure) legally entitles data subjects to demand that organizations permanently erase all personal records held about them across active systems and backups.',
    examTip: 'Right to erasure = Complete and permanent removal of the individual\'s data.'
  },
  {
    id: 'd5-q581',
    domainId: 5,
    subtopic: 'Security Awareness Training',
    questionNumber: 581,
    type: 'single',
    prompt: 'To reduce click rates on simulated phishing campaigns, a CSO implements a program where departments receive monthly badges, leaderboards, and coffee vouchers for high reporting rates. Which technique is this?',
    options: [
      { id: 'A', text: 'Computer-based training' },
      { id: 'B', text: 'Insider threat awareness' },
      { id: 'C', text: 'SOAR playbook' },
      { id: 'D', text: 'Gamification' }
    ],
    correctAnswers: ['D'],
    explanation: 'Gamification applies game mechanics (points, badges, leaderboards, rewards) into non-gaming contexts like security training to boost employee engagement and positive behavioral change.',
    examTip: 'Gamification uses incentives and fun mechanics to improve training retention.'
  },
  {
    id: 'd5-q602',
    domainId: 5,
    subtopic: 'Change Management & Resiliency',
    questionNumber: 602,
    type: 'single',
    prompt: 'A company initiates a database schema change during a scheduled maintenance window. When the update encounters unforeseen errors and threatens to overrun the change window, which document outlines the exact steps to restore previous operation?',
    options: [
      { id: 'A', text: 'User notification' },
      { id: 'B', text: 'Change approval' },
      { id: 'C', text: 'Risk analysis' },
      { id: 'D', text: 'Backout plan' }
    ],
    correctAnswers: ['D'],
    explanation: 'A backout (or rollback) plan is a mandatory element of change management documentation, defining procedural steps to revert an unsuccessful change back to the previous stable baseline before customer uptime is impacted.',
    examTip: 'Every change management request must include a validated backout plan.'
  },
  {
    id: 'd5-q736',
    domainId: 5,
    subtopic: 'Agreements & Interconnection',
    questionNumber: 736,
    type: 'single',
    prompt: 'Which of the following best describes the fundamental difference between a Memorandum of Understanding (MOU) and a Statement of Work (SOW)?',
    options: [
      { id: 'A', text: 'An MOU is usually a non-binding high-level agreement of mutual intent, while an SOW is a legally binding contract detailing specific deliverables and outcomes.' },
      { id: 'B', text: 'An MOU identifies engagement details, while an SOW specifies who will engage.' },
      { id: 'C', text: 'An MOU requires signatures from both parties, while an SOW only requires a single signature.' },
      { id: 'D', text: 'An MOU is typically very detailed about technical tasks, while an SOW is typically conceptual.' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Memorandum of Understanding (MOU) documents common intent and cooperative alignment between organizations without legally binding contractual enforcement, whereas a Statement of Work (SOW) defines binding technical deliverables, costs, and acceptance criteria.',
    examTip: 'MOU = Mutual intention (often non-binding); SOW = Specific deliverables and work scope (legally binding).'
  },
  {
    id: 'd5-q838',
    domainId: 5,
    subtopic: 'Access Governance',
    questionNumber: 838,
    type: 'single',
    prompt: 'An internal security review reveals that long-tenured employees have accumulated permissions across dozens of legacy projects they no longer work on. What process remediates and prevents this privilege creep?',
    options: [
      { id: 'A', text: 'Regular access reviews' },
      { id: 'B', text: 'Provide privileged user account training' },
      { id: 'C', text: 'Require a jump box for privileged account use' },
      { id: 'D', text: 'Apply more restrictive security baselines' }
    ],
    correctAnswers: ['A'],
    explanation: 'Regular user access reviews (periodic entitlement audits) verify that accounts possess only the permissions currently necessary for their current role, revoking stale entitlements to prevent privilege creep.',
    examTip: 'Privilege creep occurs when workers change roles over time; regular access reviews enforce least privilege.'
  },
  {
    id: 'd5-q845',
    domainId: 5,
    subtopic: 'Risk Response Strategies (Avoid, Transfer, Mitigate, Accept)',
    questionNumber: 845,
    type: 'single',
    prompt: 'A retail company calculates that a major ransomware breach could cost $8 million in recovery and legal fees. Management purchases a comprehensive cybersecurity insurance policy to cover potential breach damages. Which risk management strategy is this?',
    options: [
      { id: 'A', text: 'Transference (Risk sharing)' },
      { id: 'B', text: 'Avoidance' },
      { id: 'C', text: 'Mitigation' },
      { id: 'D', text: 'Acceptance' }
    ],
    correctAnswers: ['A'],
    explanation: 'Risk transference (or risk sharing) shifts the financial burden of a realized risk to a third party, most commonly by purchasing cyber liability insurance or outsourcing to a managed service provider with SLA indemnities.',
    examTip: 'Cyber Insurance = Risk Transference; Stopping the business activity = Avoidance; Adding controls = Mitigation; Signing off with no action = Acceptance.'
  },
  {
    id: 'd5-q850',
    domainId: 5,
    subtopic: 'Risk Avoidance vs Risk Acceptance',
    questionNumber: 850,
    type: 'single',
    prompt: 'A software startup discovers that storing European customer profiles would expose the company to strict GDPR compliance audits and massive potential fines that exceed projected European revenue. The CEO decides to block sign-ups from European IP addresses entirely. Which risk strategy was chosen?',
    options: [
      { id: 'A', text: 'Avoidance' },
      { id: 'B', text: 'Transference' },
      { id: 'C', text: 'Mitigation' },
      { id: 'D', text: 'Exemption' }
    ],
    correctAnswers: ['A'],
    explanation: 'Risk avoidance completely eliminates exposure to a risk by discontinuing or choosing not to engage in the business activity or market that introduces the risk.',
    examTip: 'When an organization exits a market or shuts down a feature altogether to escape risk, that is Risk Avoidance.'
  },
  {
    id: 'd5-q855',
    domainId: 5,
    subtopic: 'Inherent Risk vs Residual Risk',
    questionNumber: 855,
    type: 'single',
    prompt: 'An organization evaluates the threat of SQL injection against its customer portal before any security controls are in place, and then re-evaluates the remaining risk after deploying an inline WAF and parameterized queries. What is the remaining risk AFTER controls are applied called?',
    options: [
      { id: 'A', text: 'Residual risk' },
      { id: 'B', text: 'Inherent risk' },
      { id: 'C', text: 'Control risk' },
      { id: 'D', text: 'Supply chain risk' }
    ],
    correctAnswers: ['A'],
    explanation: 'Inherent risk is the raw level of risk present before any security controls are applied; Residual risk is the leftover risk that remains after mitigating controls have been implemented.',
    examTip: 'Inherent Risk - Security Controls = Residual Risk. Residual risk must fall below management\'s risk tolerance.'
  },
  {
    id: 'd5-q860',
    domainId: 5,
    subtopic: 'Risk Register & Key Risk Indicators (KRIs)',
    questionNumber: 860,
    type: 'single',
    prompt: 'Which centralized governance artifact is maintained by the GRC team to catalog identified organizational risks, their likelihood/impact scores, assigned risk owners, and current mitigation status?',
    options: [
      { id: 'A', text: 'Risk register' },
      { id: 'B', text: 'Software Bill of Materials (SBOM)' },
      { id: 'C', text: 'Chain of custody log' },
      { id: 'D', text: 'Certificate Revocation List (CRL)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Risk Register is the master tracking repository used by risk management teams and leadership to document each identified risk, its severity, its designated Risk Owner, and its treatment plan.',
    examTip: 'Every entry in a Risk Register must be assigned to a specific Risk Owner.'
  },
  {
    id: 'd5-q865-d5',
    domainId: 5,
    subtopic: 'Exceptions vs Exemptions',
    questionNumber: 865,
    type: 'single',
    prompt: 'A corporate security policy requires all laptops to run Windows 11 with BitLocker. The marketing graphic design team demonstrates that a specific video-rendering workflow requires macOS workstations for the next 6 months until a cloud renderer is ready. Leadership grants temporary documented relief with compensating controls. What is this called?',
    options: [
      { id: 'A', text: 'Policy exception' },
      { id: 'B', text: 'Scope creep' },
      { id: 'C', text: 'Separation of duties' },
      { id: 'D', text: 'Non-repudiation' }
    ],
    correctAnswers: ['A'],
    explanation: 'A policy exception is a formal, time-bound approval allowing a system or team to deviate temporarily from a mandatory security standard, typically requiring executive sign-off and compensating controls.',
    examTip: 'Exceptions are temporary and periodically reviewed; Exemptions are permanent exclusions.'
  },
  {
    id: 'd5-q870',
    domainId: 5,
    subtopic: 'Administrative Personnel Controls',
    questionNumber: 870,
    type: 'single',
    prompt: 'A bank requires all wire-transfer clerks to take at least one uninterrupted full week of paid time off each year, during which their login credentials are temporarily disabled and another employee performs their daily duties. Which fraud-detection policy is this?',
    options: [
      { id: 'A', text: 'Mandatory vacations (Forced vacation)' },
      { id: 'B', text: 'Job rotation' },
      { id: 'C', text: 'Clean desk policy' },
      { id: 'D', text: 'Onboarding attestation' }
    ],
    correctAnswers: ['A'],
    explanation: 'Mandatory vacations uncover ongoing insider fraud or embezzlement schemes that require the perpetrator\'s continuous daily presence to conceal.',
    examTip: 'Mandatory vacations = Detects ongoing fraud via temporary audit replacement; Job rotation = Cross-trains staff and prevents long-term entrenchment.'
  },
  {
    id: 'd5-q875-d5',
    domainId: 5,
    subtopic: 'Separation of Duties',
    questionNumber: 875,
    type: 'single',
    prompt: 'In an enterprise accounting system, the employee who can add a new vendor to the master database is prohibited by system role controls from approving or issuing payments to that vendor. Which governance principle is enforced?',
    options: [
      { id: 'A', text: 'Separation of duties (Segregation of duties)' },
      { id: 'B', text: 'Acceptable Use Policy (AUP)' },
      { id: 'C', text: 'Time-of-day restrictions' },
      { id: 'D', text: 'Bring Your Own Device (BYOD)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Separation of duties splits critical multi-step business workflows across two or more people so no single individual can unilaterally initiate, approve, and conceal fraudulent transactions.',
    examTip: 'Separation of duties requires collusion between two people to commit fraud.'
  },
  {
    id: 'd5-q880-d5',
    domainId: 5,
    subtopic: 'Business Continuity Testing (Tabletop vs Failover)',
    questionNumber: 880,
    type: 'single',
    prompt: 'Department heads from IT, Legal, PR, and Executive Leadership gather in a conference room for two hours to verbally talk through how each team would respond to a hypothetical ransomware scenario, without touching any live production servers. What type of exercise is this?',
    options: [
      { id: 'A', text: 'Tabletop exercise' },
      { id: 'B', text: 'Full interruption / Parallel failover test' },
      { id: 'C', text: 'Black-box penetration test' },
      { id: 'D', text: 'Dynamic application fuzzing' }
    ],
    correctAnswers: ['A'],
    explanation: 'A tabletop exercise is a discussion-based, low-cost, zero-disruption walkthrough where key stakeholders review their roles, communication trees, and incident response procedures against a simulated scenario.',
    examTip: 'Tabletop = Discussion in a room (zero production risk); Failover/Simulation = Actually switching traffic to backup systems.'
  },
  {
    id: 'd5-q885-d5',
    domainId: 5,
    subtopic: 'Compliance Frameworks (PCI DSS, HIPAA, GDPR, SOX)',
    questionNumber: 885,
    type: 'single',
    prompt: 'An online clothing retailer accepts Visa, Mastercard, and American Express credit cards directly on its checkout page. Which industry security standard is the retailer contractually obligated to comply with?',
    options: [
      { id: 'A', text: 'PCI DSS (Payment Card Industry Data Security Standard)' },
      { id: 'B', text: 'HIPAA (Health Insurance Portability and Accountability Act)' },
      { id: 'C', text: 'FERPA (Family Educational Rights and Privacy Act)' },
      { id: 'D', text: 'FISMA (Federal Information Security Modernization Act)' }
    ],
    correctAnswers: ['A'],
    explanation: 'PCI DSS is the mandatory industry security standard for any merchant or service provider that stores, processes, or transmits cardholder data (CHD) and sensitive authentication data.',
    examTip: 'Credit cards = PCI DSS; Healthcare/PHI = HIPAA; EU citizen privacy = GDPR; U.S. public company financial reporting = SOX.'
  },
  {
    id: 'd5-q890-d5',
    domainId: 5,
    subtopic: 'Cybersecurity Frameworks (NIST CSF vs ISO 27001)',
    questionNumber: 890,
    type: 'single',
    prompt: 'An international cloud software vendor wants to obtain a formal, internationally recognized certification for its Information Security Management System (ISMS) to prove its security maturity to global enterprise customers. Which standard provides this certification?',
    options: [
      { id: 'A', text: 'ISO/IEC 27001' },
      { id: 'B', text: 'RFC 1918' },
      { id: 'C', text: 'IEEE 802.11ax' },
      { id: 'D', text: 'OWASP Top 10' }
    ],
    correctAnswers: ['A'],
    explanation: 'ISO/IEC 27001 is the premier international standard specifying the requirements for establishing, implementing, maintaining, and continually improving a certified Information Security Management System (ISMS).',
    examTip: 'Keywords "ISMS" and "international security certification" always map to ISO/IEC 27001.'
  },
  {
    id: 'd5-q895-d5',
    domainId: 5,
    subtopic: 'SOC 2 Attestation Reports (Type I vs Type II)',
    questionNumber: 895,
    type: 'single',
    prompt: 'When evaluating a SaaS vendor\'s security posture, why do enterprise procurement teams strongly prefer a SOC 2 Type II audit report over a SOC 2 Type I report?',
    options: [
      { id: 'A', text: 'Type II validates the operating effectiveness of security controls over a sustained period of time (e.g., 6–12 months), whereas Type I only checks control design at a single point in time' },
      { id: 'B', text: 'Type I reports are written by attackers, whereas Type II reports are self-signed by the vendor\'s marketing team' },
      { id: 'C', text: 'Type II reports only cover physical locks and ignore network encryption' },
      { id: 'D', text: 'Type I is valid for 10 years, whereas Type II expires in 24 hours' }
    ],
    correctAnswers: ['A'],
    explanation: 'A SOC 2 Type I report assesses whether controls are suitably designed at a specific snapshot date; a SOC 2 Type II report proves that those controls actually operated effectively and consistently over a 6-to-12-month audit window.',
    examTip: 'SOC 2 Type I = Point in time (Design); SOC 2 Type II = Period of time (Operating Effectiveness).'
  },
  {
    id: 'd5-q900',
    domainId: 5,
    subtopic: 'Data Retention & Legal Destruction',
    questionNumber: 900,
    type: 'single',
    prompt: 'A financial institution is required by statutory regulation to keep tax and transaction records for 7 years, but wants to minimize breach liability for older records. What should the data retention policy mandate once records reach 7 years and 1 day of age (assuming no legal hold)?',
    options: [
      { id: 'A', text: 'Securely and permanently destroy/sanitize the expired records' },
      { id: 'B', text: 'Move the records to a public S3 bucket to save database costs' },
      { id: 'C', text: 'Email copies of the records to all former employees' },
      { id: 'D', text: 'Keep the records indefinitely on production web servers' }
    ],
    correctAnswers: ['A'],
    explanation: 'Keeping sensitive PII or financial records longer than legally or operationally required increases breach liability. Data retention policies define both the minimum mandatory storage period and secure disposal immediately thereafter.',
    examTip: 'Retain data for the minimum legally required period, then securely destroy it (Data Minimization).'
  },
  {
    id: 'd5-q905',
    domainId: 5,
    subtopic: 'Business Partnership Agreement (BPA)',
    questionNumber: 905,
    type: 'single',
    prompt: 'Two corporations decide to form a strategic alliance where they share profits, losses, decision-making authority, and joint equity ownership in a new product venture. Which legal document defines these financial and governance profit-sharing terms?',
    options: [
      { id: 'A', text: 'BPA (Business Partners Agreement)' },
      { id: 'B', text: 'ISA (Interconnection Security Agreement)' },
      { id: 'C', text: 'SLA (Service Level Agreement)' },
      { id: 'D', text: 'AUP (Acceptable Use Policy)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Business Partners Agreement (BPA) is a legal contract between two partners detailing their shared ownership structure, profit/loss distribution, decision-making obligations, and exit clauses.',
    examTip: 'BPA = Profit/ownership sharing between business partners; ISA = Technical network connection rules; SLA = Uptime/service metrics.'
  },
  {
    id: 'd5-q910',
    domainId: 5,
    subtopic: 'Acceptable Use Policy (AUP)',
    questionNumber: 910,
    type: 'single',
    prompt: 'On their first day of employment, new hires must sign a document acknowledging that corporate laptops and internet connections may not be used for torrenting copyrighted movies, cryptocurrency mining, or visiting illegal websites. What document is this?',
    options: [
      { id: 'A', text: 'AUP (Acceptable Use Policy)' },
      { id: 'B', text: 'SOW (Statement of Work)' },
      { id: 'C', text: 'MTBF (Mean Time Between Failures)' },
      { id: 'D', text: 'BPA (Business Partners Agreement)' }
    ],
    correctAnswers: ['A'],
    explanation: 'An Acceptable Use Policy (AUP) stipulates the permitted and prohibited behaviors for employees using corporate IT hardware, networks, email, and internet access, establishing no expectation of privacy on company devices.',
    examTip: 'Signed AUPs protect the organization legally when disciplining or terminating an employee for computer misuse.'
  },
  {
    id: 'd5-q915',
    domainId: 5,
    subtopic: 'Offboarding & Termination Procedures',
    questionNumber: 915,
    type: 'single',
    prompt: 'When an IT systems administrator is involuntarily terminated for cause, at what exact moment should the security team disable their Active Directory, VPN, and cloud SSO accounts?',
    options: [
      { id: 'A', text: 'Immediately before or simultaneously as HR conducts the termination meeting' },
      { id: 'B', text: 'At the end of the current monthly billing cycle' },
      { id: 'C', text: 'Two weeks after the employee returns their badge by mail' },
      { id: 'D', text: 'During the next annual access review audit' }
    ],
    correctAnswers: ['A'],
    explanation: 'During high-risk or involuntary offboarding, revoking all logical access, active sessions, OAuth tokens, and VPN access immediately prior to or during the HR notification meeting prevents retaliatory sabotage or data theft.',
    examTip: 'Involuntary termination = Revoke credentials and kill active tokens BEFORE/DURING the HR meeting.'
  },
  {
    id: 'd5-q920',
    domainId: 5,
    subtopic: 'Supply Chain & Hardware Tampering',
    questionNumber: 920,
    type: 'single',
    prompt: 'A defense agency orders 50 enterprise routers and wants to ensure that no nation-state interdiction team intercepts the shipping crates in transit to solder covert listening chips onto the motherboards. What procurement practice mitigates this risk?',
    options: [
      { id: 'A', text: 'Purchasing exclusively from trusted OEMs using tamper-evident serialized security seals and cryptographic hardware attestation' },
      { id: 'B', text: 'Buying refurbished routers from anonymous third-party auction sites' },
      { id: 'C', text: 'Disabling HTTPS on the router management console' },
      { id: 'D', text: 'Running a phishing simulation for warehouse staff' }
    ],
    correctAnswers: ['A'],
    explanation: 'Supply chain hardware interdiction is mitigated by sourcing directly from vetted OEMs, verifying tamper-evident physical packaging seals, and validating cryptographic hardware roots of trust (TPM attestation) upon receipt.',
    examTip: 'Hardware supply chain security relies on vetted vendors, tamper-evident seals, and TPM hardware attestation.'
  },
  {
    id: 'd5-q925',
    domainId: 5,
    subtopic: 'Data Roles (Owner, Controller, Processor, Custodian)',
    questionNumber: 925,
    type: 'single',
    prompt: 'Within an enterprise data governance framework, the Vice President of Human Resources decides the classification level (Confidential) for employee payroll tables, while a Linux Database Administrator configures the actual AES-256 encryption and nightly backups. What are their respective roles?',
    options: [
      { id: 'A', text: 'The VP of HR is the Data Owner; the Database Administrator is the Data Custodian (Steward)' },
      { id: 'B', text: 'The VP of HR is the Data Subject; the Database Administrator is the Data Broker' },
      { id: 'C', text: 'Both are external Data Processors' },
      { id: 'D', text: 'The Database Administrator is the Data Owner; the VP of HR is the Guest User' }
    ],
    correctAnswers: ['A'],
    explanation: 'The Data Owner is a senior executive/department head who bears ultimate accountability for classifying data and approving access policies; the Data Custodian (IT/DBA) implements the day-to-day technical controls, backups, and permissions.',
    examTip: 'Data Owner = Senior business leader (decides classification); Data Custodian = IT admin (configures backups/ACLs).'
  },
  {
    id: 'd5-q930',
    domainId: 5,
    subtopic: 'Penetration Testing Authorization (Rules of Engagement)',
    questionNumber: 930,
    type: 'single',
    prompt: 'What separates a legal, authorized penetration test from a criminal cyberattack, and specifies the exact testing time windows, excluded IP ranges, emergency points of contact, and permitted exploit types?',
    options: [
      { id: 'A', text: 'Signed Rules of Engagement (RoE) and written executive authorization' },
      { id: 'B', text: 'Using open-source Kali Linux tools instead of commercial scanners' },
      { id: 'C', text: 'Performing the test from a coffee shop Wi-Fi network' },
      { id: 'D', text: 'Running Nmap with the stealth SYN flag (-sS)' }
    ],
    correctAnswers: ['A'],
    explanation: 'Written executive authorization ("Get Out of Jail Free" letter) and a formal Rules of Engagement (RoE) document establish legal permission, testing boundaries, allowed techniques, and emergency escalation contacts.',
    examTip: 'Never begin a penetration test without signed authorization and defined Rules of Engagement (RoE).'
  },
  {
    id: 'd5-q935',
    domainId: 5,
    subtopic: 'Bug Bounty & Responsible Disclosure',
    questionNumber: 935,
    type: 'single',
    prompt: 'A cloud company wants to incentivize independent external security researchers worldwide to privately report vulnerabilities in its web applications in exchange for financial rewards and safe-harbor legal protection. What program should the company launch?',
    options: [
      { id: 'A', text: 'Bug bounty program' },
      { id: 'B', text: 'Honeynet deployment' },
      { id: 'C', text: 'Mandatory vacation policy' },
      { id: 'D', text: 'Business Impact Analysis (BIA)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A bug bounty program crowdsources vulnerability discovery by offering monetary rewards and legal safe harbor to ethical hackers who responsibly disclose security flaws.',
    examTip: 'Bug bounty programs provide continuous crowdsourced security testing beyond periodic annual pen tests.'
  },
  {
    id: 'd5-q940',
    domainId: 5,
    subtopic: 'Quantitative Risk Analysis (SLE, ARO, ALE)',
    questionNumber: 940,
    type: 'single',
    prompt: 'A data center houses a storage array valued at $200,000 (Asset Value). If a cooling failure occurs, it is estimated to destroy 25% of the array (Exposure Factor = 0.25). Cooling failures are predicted to happen once every 2 years (ARO = 0.5). What are the SLE and ALE?',
    options: [
      { id: 'A', text: 'SLE = $50,000; ALE = $25,000' },
      { id: 'B', text: 'SLE = $200,000; ALE = $100,000' },
      { id: 'C', text: 'SLE = $25,000; ALE = $50,000' },
      { id: 'D', text: 'SLE = $10,000; ALE = $5,000' }
    ],
    correctAnswers: ['A'],
    explanation: 'Single Loss Expectancy (SLE) = Asset Value ($200,000) × Exposure Factor (0.25) = $50,000. Annualized Loss Expectancy (ALE) = SLE ($50,000) × Annualized Rate of Occurrence (0.5) = $25,000/year.',
    examTip: 'Formulas to know cold: SLE = AV × EF; ALE = SLE × ARO.'
  },
  {
    id: 'd5-q945',
    domainId: 5,
    subtopic: 'Privacy Impact Assessment (PIA)',
    questionNumber: 945,
    type: 'single',
    prompt: 'Before launching a new mobile health application that collects biometric heart-rate and GPS location telemetry from users, the privacy officer conducts a formal evaluation to identify PII handling risks and ensure regulatory compliance. What is this assessment called?',
    options: [
      { id: 'A', text: 'PIA (Privacy Impact Assessment)' },
      { id: 'B', text: 'MTTR (Mean Time to Repair)' },
      { id: 'C', text: 'CVSS (Common Vulnerability Scoring System)' },
      { id: 'D', text: 'CSR (Certificate Signing Request)' }
    ],
    correctAnswers: ['A'],
    explanation: 'A Privacy Impact Assessment (PIA) or Data Protection Impact Assessment (DPIA) evaluates how a new project or system collects, uses, shares, and protects personally identifiable information (PII) before deployment.',
    examTip: 'BIA = Business uptime/continuity impact; PIA = Personal data privacy impact.'
  },
  {
    id: 'd5-q950',
    domainId: 5,
    subtopic: 'Change Management Process',
    questionNumber: 950,
    type: 'single',
    prompt: 'Why do mature enterprise organizations require all production firewall rule modifications to be submitted to a Change Advisory Board (CAB) with an impact assessment, scheduled maintenance window, and backout plan?',
    options: [
      { id: 'A', text: 'To prevent unintended service outages, security regressions, and undocumented configuration drift' },
      { id: 'B', text: 'To allow any junior help-desk technician to reboot core routers at noon' },
      { id: 'C', text: 'To bypass version control and audit logging requirements' },
      { id: 'D', text: 'To increase the Annualized Rate of Occurrence (ARO) of outages' }
    ],
    correctAnswers: ['A'],
    explanation: 'Formal change management ensures that infrastructure modifications are peer-reviewed for security risk, tested in staging, scheduled during approved windows, and backed by a rollback plan to prevent accidental downtime.',
    examTip: 'Unapproved ad-hoc changes are a leading cause of production outages and security misconfigurations.'
  },
  {
    id: 'd5-q955',
    domainId: 5,
    subtopic: 'Social Engineering Phishing Simulations',
    questionNumber: 955,
    type: 'single',
    prompt: 'After conducting an authorized internal phishing simulation, the security team sees that 18% of employees in the Finance department clicked the simulated credential-harvesting link. What is the most constructive follow-up action?',
    options: [
      { id: 'A', text: 'Enroll the users who clicked into immediate, targeted micro-training on recognizing phishing indicators' },
      { id: 'B', text: 'Publicly post the names and salaries of the employees who clicked on the company intranet' },
      { id: 'C', text: 'Disable email access permanently for the entire Finance department' },
      { id: 'D', text: 'Remove the spam filter so employees get more real-world practice' }
    ],
    correctAnswers: ['A'],
    explanation: 'Phishing simulations are educational detective/corrective controls; providing immediate, non-punitive contextual training ("teachable moments") to users who click significantly reduces future susceptibility.',
    examTip: 'Effective security awareness programs use positive reinforcement and targeted training, not public shaming.'
  },
  {
    id: 'd5-q960',
    domainId: 5,
    subtopic: 'Geographic & Cloud Redundancy',
    questionNumber: 960,
    type: 'single',
    prompt: 'A SaaS provider hosts its primary Kubernetes cluster and RDS database in `us-east-1` (Virginia). To survive a regional hurricane or multi-state power grid failure, where should its disaster recovery replica be hosted?',
    options: [
      { id: 'A', text: 'In a geographically distant cloud region (e.g., `us-west-2` Oregon) on a separate power grid and fault zone' },
      { id: 'B', text: 'In a different server rack inside the same Virginia data center room' },
      { id: 'C', text: 'On a virtual machine running on the same physical ESXi host' },
      { id: 'D', text: 'On USB thumb drives stored in the Virginia lobby' }
    ],
    correctAnswers: ['A'],
    explanation: 'Geographic dispersion (multi-region cloud architecture) ensures that a regional natural disaster, flood, or power grid collapse cannot simultaneously take down both primary and disaster recovery sites.',
    examTip: 'Geographic dispersion protects against natural disasters and regional utility outages.'
  },
  {
    id: 'd5-q965',
    domainId: 5,
    subtopic: 'Compliance vs Security',
    questionNumber: 965,
    type: 'single',
    prompt: 'An organization passes its annual regulatory compliance checklist audit with 100% of required boxes checked, yet suffers a breach two weeks later via an unmonitored zero-day exploit. What does this scenario illustrate?',
    options: [
      { id: 'A', text: 'Compliance with baseline regulatory checklists represents a minimum floor and does not guarantee comprehensive security against evolving threats' },
      { id: 'B', text: 'Passing a compliance audit makes an organization legally immune from cyberattacks' },
      { id: 'C', text: 'Zero-day exploits only affect non-compliant organizations' },
      { id: 'D', text: 'Auditors are responsible for operating the daily SOC firewall' }
    ],
    correctAnswers: ['A'],
    explanation: 'Regulatory compliance validates adherence to a minimum baseline snapshot of controls, whereas true operational security requires continuous threat monitoring, defense-in-depth, and proactive adaptation.',
    examTip: 'Compliance ≠ Security. Compliance is a point-in-time regulatory baseline; security is a continuous process.'
  }
];

