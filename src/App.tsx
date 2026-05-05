import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MainMenu } from './components/MainMenu';
import { QuizCard, type UserAnswerData } from './components/QuizCard';
import { ResultsView } from './components/ResultsView';
import { domain1Dataset } from './data/domain-1-dataset';
import { domain2Dataset } from './data/domain-2-dataset';
import { domain3Dataset } from './data/domain-3-dataset';
import { domain4Dataset } from './data/domain-4-dataset';

type ViewState = 'menu' | 'quiz' | 'results';

interface AppState {
  view: ViewState;
  selectedDomain: number;
  currentIndex: number;
  answers: Record<number, UserAnswerData>;
  questionOrder: number[];
  elapsedTime: number;
}

function App() {
  const [view, setView] = useState<ViewState>('menu');
  const [selectedDomain, setSelectedDomain] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswerData>>({});
  const [questionOrder, setQuestionOrder] = useState<number[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Flatten the dataset to get all questions based on randomized order and selected domain
  const quizQuestions = React.useMemo(() => {
    let dataset = domain1Dataset;
    if (selectedDomain === 2) dataset = domain2Dataset;
    if (selectedDomain === 3) dataset = domain3Dataset;
    if (selectedDomain === 4) dataset = domain4Dataset;
    if (selectedDomain === 5) {
      dataset = [...domain1Dataset, ...domain2Dataset, ...domain3Dataset, ...domain4Dataset];
    }
    
    const all = dataset.flatMap(term => term.questions);
    if (questionOrder.length > 0) {
      return questionOrder.map(id => all.find(q => q.id === id)).filter(Boolean) as typeof all;
    }
    return all;
  }, [questionOrder, selectedDomain]);

  // Load state from local storage on initial mount
  useEffect(() => {
    const savedState = localStorage.getItem('md102_quiz_state');
    if (savedState) {
      try {
        const parsed: AppState = JSON.parse(savedState);
        setView(parsed.view);
        setSelectedDomain(parsed.selectedDomain || 1);
        setCurrentIndex(parsed.currentIndex);
        setAnswers(parsed.answers || {});
        setQuestionOrder(parsed.questionOrder || []);
        setElapsedTime(parsed.elapsedTime || 0);
      } catch (e) {
        console.error('Failed to parse local storage state');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      const stateToSave: AppState = { view, selectedDomain, currentIndex, answers, questionOrder, elapsedTime };
      localStorage.setItem('md102_quiz_state', JSON.stringify(stateToSave));
    }
  }, [view, selectedDomain, currentIndex, answers, questionOrder, elapsedTime, isLoaded]);

  // Track time spent
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (view === 'quiz') {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [view]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const generateRandomOrder = (domain: number) => {
    if (domain === 5) {
      // MD-102 exam weightings (approximate):
      // Domain 1: Deploy Windows client (25%) -> 15 questions
      // Domain 2: Manage identity and compliance (20%) -> 12 questions
      // Domain 3: Manage, maintain, and protect devices (40%) -> 24 questions
      // Domain 4: Manage applications (15%) -> 9 questions
      // Total = 60 questions
      const d1 = domain1Dataset.flatMap(term => term.questions).map(q => q.id).sort(() => Math.random() - 0.5).slice(0, 15);
      const d2 = domain2Dataset.flatMap(term => term.questions).map(q => q.id).sort(() => Math.random() - 0.5).slice(0, 12);
      const d3 = domain3Dataset.flatMap(term => term.questions).map(q => q.id).sort(() => Math.random() - 0.5).slice(0, 24);
      const d4 = domain4Dataset.flatMap(term => term.questions).map(q => q.id).sort(() => Math.random() - 0.5).slice(0, 9);
      
      return [...d1, ...d2, ...d3, ...d4].sort(() => Math.random() - 0.5);
    }
    
    let dataset = domain1Dataset;
    if (domain === 2) dataset = domain2Dataset;
    if (domain === 3) dataset = domain3Dataset;
    if (domain === 4) dataset = domain4Dataset;
    
    const allQuestions = dataset.flatMap(term => term.questions).map(q => q.id).sort(() => Math.random() - 0.5);
    return allQuestions;
  };

  const handleSelectQuiz = (domain: number) => {
    // If starting fresh or switching domains
    if (view === 'menu' && (Object.keys(answers).length === 0 || selectedDomain !== domain)) {
      setSelectedDomain(domain);
      setAnswers({});
      setCurrentIndex(0);
      setQuestionOrder(generateRandomOrder(domain));
      setElapsedTime(0);
    }
    setView('quiz');
  };

  const handleHomeClick = () => {
    if (view === 'quiz') {
      setShowCancelModal(true);
    } else {
      setView('menu');
    }
  };

  const handleAnswerSubmit = (answer: string, isCorrect: boolean, shuffledOptions: string[]) => {
    const currentQ = quizQuestions[currentIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: {
        questionId: currentQ.id,
        selectedOption: answer,
        isCorrect,
        shuffledOptions,
      }
    }));
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(curr => curr + 1);
    } else {
      setView('results');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(curr => curr - 1);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setCurrentIndex(0);
    setQuestionOrder(generateRandomOrder(selectedDomain));
    setElapsedTime(0);
    setView('quiz');
  };

  const handleResetHome = () => {
    setAnswers({});
    setCurrentIndex(0);
    setElapsedTime(0);
    setQuestionOrder([]);
    setShowCancelModal(false);
    setView('menu');
  };

  // Calculate score
  const score = Object.values(answers).filter(a => a.isCorrect).length;

  if (!isLoaded) return null; // Prevent hydration mismatch / flash

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative">
      <Header onHomeClick={handleHomeClick} />
      
      {showCancelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-card text-card-foreground border rounded-lg p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-xl font-bold mb-2">Cancel Quiz?</h3>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to cancel the current quiz session? All your current progress will be lost.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 border rounded font-medium hover:bg-accent transition-colors"
              >
                Continue Quiz
              </button>
              <button
                onClick={handleResetHome}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors shadow-sm"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-grow flex flex-col">
        {view === 'menu' && (
          <div className="flex-grow flex items-center justify-center py-12">
            <MainMenu onSelectQuiz={handleSelectQuiz} />
          </div>
        )}

        {view === 'quiz' && (
          <div className="flex-grow flex flex-col relative w-full pt-1">
            <QuizCard
              questionData={quizQuestions[currentIndex]}
              currentIndex={currentIndex}
              totalQuestions={quizQuestions.length}
              userAnswer={answers[quizQuestions[currentIndex].id]}
              onAnswerSubmit={handleAnswerSubmit}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>
        )}

        {view === 'results' && (
          <div className="flex-grow flex items-center justify-center py-12 px-4">
            <ResultsView 
              score={score} 
              total={quizQuestions.length} 
              answers={answers}
              selectedDomain={selectedDomain}
              elapsedTime={elapsedTime}
              onRetry={handleRetry}
              onHome={handleResetHome}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
