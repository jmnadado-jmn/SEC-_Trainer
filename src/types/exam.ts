export type DomainId = 1 | 2 | 3 | 4 | 5;

export interface DomainInfo {
  id: DomainId;
  name: string;
  weight: number; // percentage in SY0-701
  description: string;
  color: string;
  iconName: string;
}

export const DOMAINS: Record<DomainId, DomainInfo> = {
  1: {
    id: 1,
    name: 'General Security Concepts',
    weight: 12,
    description: 'Security controls, fundamental concepts, CIA triad, AAA, Zero Trust, cryptography, and PKI.',
    color: 'emerald',
    iconName: 'Shield',
  },
  2: {
    id: 2,
    name: 'Threats, Vulnerabilities & Mitigations',
    weight: 22,
    description: 'Threat actors, social engineering, attack vectors, vulnerabilities, exploits, and indicators of malicious activity.',
    color: 'rose',
    iconName: 'AlertTriangle',
  },
  3: {
    id: 3,
    name: 'Security Architecture',
    weight: 18,
    description: 'Secure network design, cloud architecture, resiliency, high availability, data protection, and endpoint hardening.',
    color: 'blue',
    iconName: 'Layers',
  },
  4: {
    id: 4,
    name: 'Security Operations',
    weight: 28,
    description: 'Monitoring, SIEM/SOAR logging, incident response lifecycle, digital forensics, threat hunting, and security assessments.',
    color: 'amber',
    iconName: 'Activity',
  },
  5: {
    id: 5,
    name: 'Security Program Management & Oversight',
    weight: 20,
    description: 'Governance, risk management, compliance frameworks, policies, audits, third-party vendor risk, and security awareness.',
    color: 'purple',
    iconName: 'Briefcase',
  },
};

export type QuestionType = 'single' | 'multiple' | 'pbq';

export interface MultipleChoiceQuestion {
  id: string;
  domainId: DomainId;
  subtopic: string;
  questionNumber?: number;
  type: 'single' | 'multiple';
  prompt: string;
  codeSnippet?: string;
  options: {
    id: string; // 'A', 'B', 'C', 'D', etc.
    text: string;
  }[];
  correctAnswers: string[]; // ['A'] or ['A', 'C']
  explanation: string;
  examTip?: string;
}

export interface PBQMatchPair {
  threat: string;
  threatDesc?: string;
  correctMitigation: string;
}

export interface PBQLogHost {
  ip: string;
  hostname: string;
  role: string;
  status: 'clean' | 'infected' | 'quarantined';
  logs: string[];
  isMalicious: boolean;
  isolationRequired: boolean;
}

export interface PBQNetworkNode {
  slotId: string;
  slotLabel: string;
  tier: 'Perimeter' | 'Routing' | 'Inspection' | 'Compute' | 'Data' | 'Control Plane' | 'Data Plane' | 'Telemetry';
  correctComponentId: string;
  explanation: string;
}

export interface PBQComponentChoice {
  id: string;
  label: string;
  description: string;
  icon?: string;
}

export interface PBQPasswordAuditItem {
  id: string;
  title: string;
  category: 'practice' | 'solution';
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export interface PBQData {
  pbqType: 'threat-matching' | 'log-forensics' | 'cloud-architecture' | 'password-darkweb' | 'web-defense-rules';
  title: string;
  subtitle: string;
  scenario: string;
  instructions: string[];
  // type-specific data
  matchPairs?: PBQMatchPair[];
  matchOptions?: string[];
  logHosts?: PBQLogHost[];
  networkSlots?: PBQNetworkNode[];
  componentChoices?: PBQComponentChoice[];
  passwordAudit?: PBQPasswordAuditItem[];
  firewallRules?: {
    id: string;
    description: string;
    correctAction: 'PERMIT' | 'DENY';
    correctPort: string;
    correctSource: string;
    correctDest: string;
  }[];
  fullExplanation: string;
}

export interface PBQuestion {
  id: string;
  domainId: DomainId;
  subtopic: string;
  type: 'pbq';
  prompt: string;
  pbqData: PBQData;
  explanation: string;
}

export type AnyQuestion = MultipleChoiceQuestion | PBQuestion;

export interface ExamSessionConfig {
  mode: 'full-simulated' | 'domain-drill' | 'pbq-lab' | 'quick-quiz' | 'missed-drill' | 'bookmarked-drill';
  domainId?: DomainId;
  questionCount: number;
  timeLimitMinutes: number; // 0 for untimed
  immediateFeedback: boolean;
  includePBQs: boolean;
}

export interface UserExamResponse {
  questionId: string;
  selectedAnswers: string[]; // For MC: ['A'], for PBQ: serialized answers
  isFlagged: boolean;
  strikethroughs: string[]; // option ids crossed out by user
  timeSpentSeconds: number;
  isCorrect?: boolean;
}

export interface ExamResultSummary {
  id: string;
  date: string;
  config: ExamSessionConfig;
  totalQuestions: number;
  correctCount: number;
  scaledScore: number; // 100-900 (CompTIA scale)
  passed: boolean; // >= 750
  percentage: number;
  timeTakenSeconds: number;
  domainScores: Record<DomainId, { total: number; correct: number; percentage: number }>;
  userResponses: Record<string, UserExamResponse>;
}

export interface UserStats {
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalExamsCompleted: number;
  overallAccuracy: number;
  readinessScore: number; // 0 - 100%
  studyStreakDays: number;
  lastActiveDate: string;
  bookmarkedQuestionIds: string[];
  incorrectQuestionIds: string[];
  domainStats: Record<DomainId, { attempted: number; correct: number }>;
  recentExams: ExamResultSummary[];
}
