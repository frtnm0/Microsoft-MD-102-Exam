import { RotateCcw, Home, BarChart3 } from 'lucide-react';
import type { UserAnswerData } from './QuizCard';

interface ResultsViewProps {
  score: number;
  total: number;
  answers?: Record<number, UserAnswerData>;
  selectedDomain?: number;
  elapsedTime?: number;
  onRetry: () => void;
  onHome: () => void;
}

export function ResultsView({ score, total, answers = {}, selectedDomain = 1, elapsedTime = 0, onRetry, onHome }: ResultsViewProps) {
  const percentage = Math.round((score / total) * 100);
  
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    return `${m}m ${s}s`;
  };

  // Calculate breakdown if this is the full exam (selectedDomain === 5)
  const isFullExam = selectedDomain === 5;
  
  let domain1Score = { correct: 0, total: 0 };
  let domain2Score = { correct: 0, total: 0 };
  let domain3Score = { correct: 0, total: 0 };
  let domain4Score = { correct: 0, total: 0 };

  if (isFullExam) {
    Object.values(answers).forEach((ans) => {
      const qid = ans.questionId;
      if (qid < 200) {
        domain1Score.total += 1;
        if (ans.isCorrect) domain1Score.correct += 1;
      } else if (qid >= 200 && qid < 300) {
        domain2Score.total += 1;
        if (ans.isCorrect) domain2Score.correct += 1;
      } else if (qid >= 300 && qid < 400) {
        domain3Score.total += 1;
        if (ans.isCorrect) domain3Score.correct += 1;
      } else {
        domain4Score.total += 1;
        if (ans.isCorrect) domain4Score.correct += 1;
      }
    });
  }

  const getPercentage = (correct: number, dtotal: number) => {
    if (dtotal === 0) return 0;
    return Math.round((correct / dtotal) * 100);
  };
  
  return (
    <div className="max-w-2xl mx-auto w-full p-4 md:p-8 animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-card text-card-foreground border rounded p-8 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
        
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              className="text-muted stroke-current"
              strokeWidth="4"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-primary stroke-current transition-all duration-1000 ease-out"
              strokeWidth="4"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray={`${percentage * 2.513} 251.3`}
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{percentage}%</span>
            <span className="text-sm text-muted-foreground mt-1">Score</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-lg">
            You scored <span className="font-semibold">{score}</span> out of <span className="font-semibold">{total}</span> correct.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Time completed: {formatTime(elapsedTime)}
          </p>
        </div>

        {isFullExam && (
          <div className="mb-8 border rounded-lg overflow-hidden bg-card/50 text-left">
            <div className="bg-muted/50 p-3 border-b flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Domain Breakdown</h3>
            </div>
            <div className="p-4 space-y-4">
              
              {/* Domain 1 */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Domain 1: Deploy Windows client</span>
                  <span className="text-sm font-semibold">{getPercentage(domain1Score.correct, domain1Score.total)}%</span>
                </div>
                <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${getPercentage(domain1Score.correct, domain1Score.total)}%` }}>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-right">{domain1Score.correct} / {domain1Score.total}</div>
              </div>

              {/* Domain 2 */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Domain 2: Manage identity and compliance</span>
                  <span className="text-sm font-semibold">{getPercentage(domain2Score.correct, domain2Score.total)}%</span>
                </div>
                <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${getPercentage(domain2Score.correct, domain2Score.total)}%` }}>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-right">{domain2Score.correct} / {domain2Score.total}</div>
              </div>

              {/* Domain 3 */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Domain 3: Manage, maintain, and protect devices</span>
                  <span className="text-sm font-semibold">{getPercentage(domain3Score.correct, domain3Score.total)}%</span>
                </div>
                <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${getPercentage(domain3Score.correct, domain3Score.total)}%` }}>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-right">{domain3Score.correct} / {domain3Score.total}</div>
              </div>

              {/* Domain 4 */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Domain 4: Manage applications</span>
                  <span className="text-sm font-semibold">{getPercentage(domain4Score.correct, domain4Score.total)}%</span>
                </div>
                <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${getPercentage(domain4Score.correct, domain4Score.total)}%` }}>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1 text-right">{domain4Score.correct} / {domain4Score.total}</div>
              </div>

            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRetry}
            className="flex items-center gap-2 justify-center w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Quiz
          </button>
          <button
            onClick={onHome}
            className="flex items-center gap-2 justify-center w-full sm:w-auto px-6 py-3 border bg-card text-card-foreground font-medium rounded hover:bg-accent transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
