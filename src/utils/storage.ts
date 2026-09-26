import { DomainId, ExamResultSummary, UserStats } from '../types/exam';

const STORAGE_KEY = 'security_plus_sy0701_trainer_v1';

export const INITIAL_USER_STATS: UserStats = {
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  totalExamsCompleted: 0,
  overallAccuracy: 0,
  readinessScore: 0,
  studyStreakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  bookmarkedQuestionIds: [],
  incorrectQuestionIds: [],
  domainStats: {
    1: { attempted: 0, correct: 0 },
    2: { attempted: 0, correct: 0 },
    3: { attempted: 0, correct: 0 },
    4: { attempted: 0, correct: 0 },
    5: { attempted: 0, correct: 0 }
  },
  recentExams: []
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...INITIAL_USER_STATS };
    const parsed = JSON.parse(raw);

    // Calculate streak
    const today = new Date().toISOString().split('T')[0];
    const lastActive = parsed.lastActiveDate || today;
    let streak = parsed.studyStreakDays || 1;

    if (today !== lastActive) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (lastActive === yesterday) {
        streak += 1;
      } else {
        // missed days
        streak = 1;
      }
      parsed.lastActiveDate = today;
      parsed.studyStreakDays = streak;
    }

    return {
      ...INITIAL_USER_STATS,
      ...parsed,
      domainStats: {
        ...INITIAL_USER_STATS.domainStats,
        ...(parsed.domainStats || {})
      }
    };
  } catch (e) {
    console.error('Failed to load user stats from localStorage:', e);
    return { ...INITIAL_USER_STATS };
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats to localStorage:', e);
  }
}

export function recordExamCompletion(result: ExamResultSummary): UserStats {
  const current = loadUserStats();

  const totalExams = (current.totalExamsCompleted || 0) + 1;
  const newAnswered = (current.totalQuestionsAnswered || 0) + result.totalQuestions;
  const newCorrect = (current.totalCorrect || 0) + result.correctCount;
  const overallAcc = newAnswered > 0 ? Math.round((newCorrect / newAnswered) * 100) : 0;

  // Update domain stats
  const updatedDomainStats = { ...current.domainStats };
  ([1, 2, 3, 4, 5] as DomainId[]).forEach(dId => {
    const dScore = result.domainScores[dId];
    if (dScore && dScore.total > 0) {
      updatedDomainStats[dId] = {
        attempted: (updatedDomainStats[dId]?.attempted || 0) + dScore.total,
        correct: (updatedDomainStats[dId]?.correct || 0) + dScore.correct
      };
    }
  });

  // Track missed questions
  const missedSet = new Set(current.incorrectQuestionIds || []);
  Object.entries(result.userResponses).forEach(([qId, resp]) => {
    if (resp.isCorrect === false) {
      missedSet.add(qId);
    } else if (resp.isCorrect === true) {
      // If answered correctly now, can remove from missed
      missedSet.delete(qId);
    }
  });

  // Weighted readiness score
  // CompTIA weights: D1: 12%, D2: 22%, D3: 18%, D4: 28%, D5: 20%
  const weights: Record<DomainId, number> = { 1: 0.12, 2: 0.22, 3: 0.18, 4: 0.28, 5: 0.20 };
  let weightedSum = 0;
  let domainsWithData = 0;

  ([1, 2, 3, 4, 5] as DomainId[]).forEach(dId => {
    const d = updatedDomainStats[dId];
    if (d && d.attempted > 0) {
      const acc = d.correct / d.attempted;
      weightedSum += acc * weights[dId];
      domainsWithData++;
    } else {
      // baseline estimate 0.5 if not attempted
      weightedSum += 0.5 * weights[dId];
    }
  });

  // Factor in recent simulated exams if any
  const recentSimulated = [result, ...(current.recentExams || [])]
    .filter(e => e.config.mode === 'full-simulated' || e.totalQuestions >= 20)
    .slice(0, 5);

  let recentAvg = overallAcc;
  if (recentSimulated.length > 0) {
    const sum = recentSimulated.reduce((acc, curr) => acc + curr.percentage, 0);
    recentAvg = sum / recentSimulated.length;
  }

  // Blended readiness score (0-100)
  const readiness = Math.min(100, Math.round(weightedSum * 70 + (recentAvg / 100) * 30));

  const updated: UserStats = {
    ...current,
    totalExamsCompleted: totalExams,
    totalQuestionsAnswered: newAnswered,
    totalCorrect: newCorrect,
    overallAccuracy: overallAcc,
    readinessScore: readiness,
    incorrectQuestionIds: Array.from(missedSet),
    domainStats: updatedDomainStats,
    recentExams: [result, ...(current.recentExams || [])].slice(0, 30)
  };

  saveUserStats(updated);
  return updated;
}

export function toggleBookmarkQuestion(questionId: string): boolean {
  const stats = loadUserStats();
  const set = new Set(stats.bookmarkedQuestionIds || []);
  let isBookmarkedNow = false;
  if (set.has(questionId)) {
    set.delete(questionId);
    isBookmarkedNow = false;
  } else {
    set.add(questionId);
    isBookmarkedNow = true;
  }
  stats.bookmarkedQuestionIds = Array.from(set);
  saveUserStats(stats);
  return isBookmarkedNow;
}

export function exportUserData(): string {
  const stats = loadUserStats();
  return JSON.stringify(stats, null, 2);
}

export function importUserData(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') return false;
    saveUserStats(parsed);
    return true;
  } catch (e) {
    console.error('Failed to import user data:', e);
    return false;
  }
}

export function resetUserData(): void {
  saveUserStats(INITIAL_USER_STATS);
}
