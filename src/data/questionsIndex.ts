import { AnyQuestion, DomainId, MultipleChoiceQuestion, PBQuestion } from '../types/exam';
import { DOMAIN_1_QUESTIONS } from './domain1Questions';
import { DOMAIN_2_QUESTIONS } from './domain2Questions';
import { DOMAIN_3_QUESTIONS } from './domain3Questions';
import { DOMAIN_4_QUESTIONS } from './domain4Questions';
import { DOMAIN_5_QUESTIONS } from './domain5Questions';
import { PBQ_QUESTIONS } from './pbqQuestions';

export const ALL_MC_QUESTIONS: MultipleChoiceQuestion[] = [
  ...DOMAIN_1_QUESTIONS,
  ...DOMAIN_2_QUESTIONS,
  ...DOMAIN_3_QUESTIONS,
  ...DOMAIN_4_QUESTIONS,
  ...DOMAIN_5_QUESTIONS
];

export const ALL_PBQS: PBQuestion[] = PBQ_QUESTIONS;

export const ALL_QUESTIONS: AnyQuestion[] = [
  ...ALL_PBQS,
  ...ALL_MC_QUESTIONS
];

export const QUESTIONS_BY_DOMAIN: Record<DomainId, MultipleChoiceQuestion[]> = {
  1: DOMAIN_1_QUESTIONS,
  2: DOMAIN_2_QUESTIONS,
  3: DOMAIN_3_QUESTIONS,
  4: DOMAIN_4_QUESTIONS,
  5: DOMAIN_5_QUESTIONS
};

export const QUESTION_BANK_STATS = {
  totalQuestions: ALL_QUESTIONS.length,
  totalMCQs: ALL_MC_QUESTIONS.length,
  totalPBQs: ALL_PBQS.length,
  byDomain: {
    1: DOMAIN_1_QUESTIONS.length,
    2: DOMAIN_2_QUESTIONS.length,
    3: DOMAIN_3_QUESTIONS.length,
    4: DOMAIN_4_QUESTIONS.length,
    5: DOMAIN_5_QUESTIONS.length
  } as Record<DomainId, number>
};

/**
 * Fisher-Yates shuffle array in place
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Calculates exact domain question distribution using Largest Remainder (Hare-Niemeyer) Method
 * ensuring exact sum matching the requested multiple choice count according to SY0-701 weights.
 */
export function calculateDomainDistribution(count: number): Record<DomainId, number> {
  const domainWeights: { id: DomainId; weight: number }[] = [
    { id: 1, weight: 0.12 },
    { id: 2, weight: 0.22 },
    { id: 3, weight: 0.18 },
    { id: 4, weight: 0.28 },
    { id: 5, weight: 0.20 }
  ];

  if (count <= 0) {
    return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  // If very small count (< 5), give 1 to highest weighted domains
  if (count < 5) {
    const sortedByWeight = [...domainWeights].sort((a, b) => b.weight - a.weight);
    const dist: Record<DomainId, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (let i = 0; i < count; i++) {
      dist[sortedByWeight[i].id] = 1;
    }
    return dist;
  }

  const rawAllocations = domainWeights.map(d => {
    const exact = count * d.weight;
    const floor = Math.floor(exact);
    const remainder = exact - floor;
    return { id: d.id, floor, remainder };
  });

  let allocatedSum = rawAllocations.reduce((acc, curr) => acc + curr.floor, 0);
  let shortfall = count - allocatedSum;

  // Sort by remainder descending
  rawAllocations.sort((a, b) => b.remainder - a.remainder);

  for (let i = 0; i < shortfall; i++) {
    rawAllocations[i % rawAllocations.length].floor += 1;
  }

  const result: Record<DomainId, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  rawAllocations.forEach(item => {
    result[item.id] = item.floor;
  });

  return result;
}

/**
 * Calculates how many PBQs are included for a given exam size when includePBQs is enabled
 */
export function calculatePBQCountForExam(questionCount: number, includePBQs: boolean): number {
  if (!includePBQs || questionCount <= 0) return 0;
  if (questionCount === 1) return 1;
  if (questionCount <= 5) return 1;
  if (questionCount <= 15) return 2;
  if (questionCount <= 30) return 3;
  if (questionCount <= 60) return 5;
  if (questionCount <= 90) return 6;
  return Math.min(ALL_PBQS.length, 8);
}

/**
 * Generates an exam question set based on user configuration
 */
export function generateExamQuestions(options: {
  mode: 'full-simulated' | 'domain-drill' | 'pbq-lab' | 'quick-quiz' | 'missed-drill' | 'bookmarked-drill';
  domainId?: DomainId;
  questionCount?: number;
  includePBQs?: boolean;
  missedIds?: string[];
  bookmarkedIds?: string[];
}): AnyQuestion[] {
  const { mode, domainId, questionCount = 25, includePBQs = true, missedIds = [], bookmarkedIds = [] } = options;

  if (mode === 'pbq-lab') {
    return [...ALL_PBQS];
  }

  if (mode === 'domain-drill' && domainId) {
    let pool: AnyQuestion[] = [...QUESTIONS_BY_DOMAIN[domainId]];
    if (includePBQs) {
      const domainPBQs = ALL_PBQS.filter(p => p.domainId === domainId);
      pool = [...domainPBQs, ...pool];
    }
    const shuffled = shuffleArray(pool);
    // If user requested more questions than unique ones in this domain, cycle through
    if (questionCount > shuffled.length && shuffled.length > 0) {
      const repeated: AnyQuestion[] = [];
      while (repeated.length < questionCount) {
        repeated.push(...shuffleArray(shuffled));
      }
      return repeated.slice(0, questionCount);
    }
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }

  if (mode === 'missed-drill') {
    const missedSet = new Set(missedIds);
    const pool = ALL_QUESTIONS.filter(q => missedSet.has(q.id));
    if (pool.length === 0) {
      return shuffleArray(ALL_QUESTIONS).slice(0, questionCount);
    }
    const shuffled = shuffleArray(pool);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }

  if (mode === 'bookmarked-drill') {
    const bookmarkedSet = new Set(bookmarkedIds);
    const pool = ALL_QUESTIONS.filter(q => bookmarkedSet.has(q.id));
    if (pool.length === 0) {
      return shuffleArray(ALL_QUESTIONS).slice(0, questionCount);
    }
    const shuffled = shuffleArray(pool);
    return shuffled.slice(0, Math.min(questionCount, shuffled.length));
  }

  if (mode === 'quick-quiz') {
    const count = questionCount || 10;
    const shuffled = shuffleArray(ALL_MC_QUESTIONS);
    return shuffled.slice(0, count);
  }

  // Full Simulated Exam (All Domains with or without PBQs, weighted by CompTIA percentages)
  const result: AnyQuestion[] = [];

  const pbqCount = calculatePBQCountForExam(questionCount, includePBQs);
  if (pbqCount > 0) {
    const pbqPool = shuffleArray(ALL_PBQS);
    result.push(...pbqPool.slice(0, pbqCount));
  }

  const remainingNeeded = Math.max(0, questionCount - result.length);
  if (remainingNeeded > 0) {
    const distribution = calculateDomainDistribution(remainingNeeded);

    const mcSelected: MultipleChoiceQuestion[] = [];
    ([1, 2, 3, 4, 5] as DomainId[]).forEach(dId => {
      const needed = distribution[dId];
      if (needed > 0) {
        const domainPool = QUESTIONS_BY_DOMAIN[dId];
        const shuffled = shuffleArray(domainPool);

        // If domain has fewer questions than needed, repeat safely
        if (needed > shuffled.length && shuffled.length > 0) {
          const rep: MultipleChoiceQuestion[] = [];
          while (rep.length < needed) {
            rep.push(...shuffleArray(domainPool));
          }
          mcSelected.push(...rep.slice(0, needed));
        } else {
          mcSelected.push(...shuffled.slice(0, needed));
        }
      }
    });

    // Shuffle the multiple choice questions so they are realistically interleaved across domains
    const interleavedMC = shuffleArray(mcSelected);
    result.push(...interleavedMC);
  }

  return result;
}

export function getQuestionById(id: string): AnyQuestion | undefined {
  return ALL_QUESTIONS.find(q => q.id === id);
}
