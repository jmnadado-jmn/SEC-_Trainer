import { AnyQuestion, DomainId, ExamResultSummary, ExamSessionConfig, UserExamResponse } from '../types/exam';

/**
 * CompTIA Security+ scoring scale is 100 to 900 points.
 * Passing score is 750 (approximately 83.3% scaled).
 */
export function calculateCompTIAScore(rawPercentage: number): number {
  // Linear interpolation: 0% -> 100, 100% -> 900
  // Score = 100 + (percentage / 100) * 800
  const score = Math.round(100 + (rawPercentage / 100) * 800);
  return Math.min(900, Math.max(100, score));
}

export function evaluateQuestionAnswer(question: AnyQuestion, response?: UserExamResponse): boolean {
  if (!response || !response.selectedAnswers || response.selectedAnswers.length === 0) {
    return false;
  }

  if (question.type === 'single') {
    return (
      response.selectedAnswers.length === 1 &&
      response.selectedAnswers[0] === question.correctAnswers[0]
    );
  }

  if (question.type === 'multiple') {
    const selectedSet = new Set(response.selectedAnswers);
    const correctSet = new Set(question.correctAnswers);
    if (selectedSet.size !== correctSet.size) return false;
    for (const ans of correctSet) {
      if (!selectedSet.has(ans)) return false;
    }
    return true;
  }

  if (question.type === 'pbq') {
    // For PBQs, response.selectedAnswers[0] contains JSON encoded user solution
    try {
      const parsed = JSON.parse(response.selectedAnswers[0]);
      const pbq = question.pbqData;

      if (pbq.pbqType === 'threat-matching') {
        const userMatches: Record<string, string> = parsed.matches || {};
        if (!pbq.matchPairs) return false;
        // Require at least 80% correct matches to pass PBQ
        let matchesCorrect = 0;
        pbq.matchPairs.forEach(pair => {
          if (userMatches[pair.threat] === pair.correctMitigation) {
            matchesCorrect++;
          }
        });
        return matchesCorrect >= pbq.matchPairs.length - 1; // allow at most 1 minor slip
      }

      if (pbq.pbqType === 'log-forensics') {
        const quarantinedIps: string[] = parsed.quarantined || [];
        const requiredIps = (pbq.logHosts || [])
          .filter(h => h.isolationRequired)
          .map(h => h.ip);
        const cleanIps = (pbq.logHosts || [])
          .filter(h => !h.isolationRequired)
          .map(h => h.ip);

        // Must isolate all infected hosts, and NOT isolate clean hosts
        const isolatedAllInfected = requiredIps.every(ip => quarantinedIps.includes(ip));
        const isolatedNoClean = cleanIps.every(ip => !quarantinedIps.includes(ip));
        return isolatedAllInfected && isolatedNoClean;
      }

      if (pbq.pbqType === 'cloud-architecture' || pbq.pbqType === 'web-defense-rules') {
        const userSlots: Record<string, string> = parsed.slots || {};
        if (!pbq.networkSlots) return false;
        let correctSlots = 0;
        pbq.networkSlots.forEach(slot => {
          if (userSlots[slot.slotId] === slot.correctComponentId) {
            correctSlots++;
          }
        });
        return correctSlots >= pbq.networkSlots.length - 1;
      }

      if (pbq.pbqType === 'password-darkweb') {
        const selectedPractices: string[] = parsed.practices || [];
        const selectedSolution: string = parsed.solution || '';

        const practiceSection = pbq.passwordAudit?.find(s => s.category === 'practice');
        const solutionSection = pbq.passwordAudit?.find(s => s.category === 'solution');

        const correctPracticeIds = new Set(
          (practiceSection?.options || []).filter(o => o.isCorrect).map(o => o.id)
        );
        const correctSolutionId = (solutionSection?.options || []).find(o => o.isCorrect)?.id || 'fido-key';

        const practicesCorrect =
          selectedPractices.filter(p => correctPracticeIds.has(p)).length >= Math.max(1, correctPracticeIds.size - 1) &&
          selectedPractices.filter(p => !correctPracticeIds.has(p)).length === 0;
        const solutionCorrect = selectedSolution === correctSolutionId;
        return practicesCorrect && solutionCorrect;
      }
    } catch {
      return false;
    }
  }

  return false;
}

export function compileExamResults(
  config: ExamSessionConfig,
  questions: AnyQuestion[],
  responses: Record<string, UserExamResponse>,
  timeTakenSeconds: number
): ExamResultSummary {
  let correctCount = 0;

  const domainScores: Record<DomainId, { total: number; correct: number; percentage: number }> = {
    1: { total: 0, correct: 0, percentage: 0 },
    2: { total: 0, correct: 0, percentage: 0 },
    3: { total: 0, correct: 0, percentage: 0 },
    4: { total: 0, correct: 0, percentage: 0 },
    5: { total: 0, correct: 0, percentage: 0 }
  };

  const processedResponses: Record<string, UserExamResponse> = {};

  questions.forEach(q => {
    const userResp = responses[q.id] || {
      questionId: q.id,
      selectedAnswers: [],
      isFlagged: false,
      strikethroughs: [],
      timeSpentSeconds: 0
    };

    const isCorrect = evaluateQuestionAnswer(q, userResp);
    if (isCorrect) correctCount++;

    processedResponses[q.id] = {
      ...userResp,
      isCorrect
    };

    // Aggregate domain
    if (domainScores[q.domainId]) {
      domainScores[q.domainId].total++;
      if (isCorrect) domainScores[q.domainId].correct++;
    }
  });

  // Calculate percentages
  ([1, 2, 3, 4, 5] as DomainId[]).forEach(dId => {
    const d = domainScores[dId];
    d.percentage = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
  });

  const totalQuestions = questions.length;
  const rawPercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const scaledScore = calculateCompTIAScore(rawPercentage);
  const passed = scaledScore >= 750;

  return {
    id: `exam-${Date.now()}`,
    date: new Date().toISOString(),
    config,
    totalQuestions,
    correctCount,
    scaledScore,
    passed,
    percentage: rawPercentage,
    timeTakenSeconds,
    domainScores,
    userResponses: processedResponses
  };
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
