import { useState, useEffect, useRef } from 'react';
import type { Question } from '../data/domain-1-dataset';
import { CheckCircle2, XCircle, Info, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface UserAnswerData {
  questionId: number;
  selectedOption: string;
  isCorrect: boolean;
  shuffledOptions: string[];
}

interface QuizCardProps {
  questionData: Question;
  currentIndex: number;
  totalQuestions: number;
  userAnswer?: UserAnswerData;
  onAnswerSubmit: (answer: string, isCorrect: boolean, shuffledOptions: string[]) => void;
  onNext: () => void;
  onPrevious: () => void;
}

function smoothScrollTo(targetY: number, duration: number = 500) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // ease-out quart for luxurious deceleration
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    
    window.scrollTo(0, startY + distance * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function QuizCard({
  questionData,
  currentIndex,
  totalQuestions,
  userAnswer,
  onAnswerSubmit,
  onNext,
  onPrevious
}: QuizCardProps) {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showOtherDetails, setShowOtherDetails] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const explanationRef = useRef<HTMLDivElement>(null);

  // Initialize state when question changes
  useEffect(() => {
    if (userAnswer && userAnswer.questionId === questionData.id) {
      setShuffledOptions(userAnswer.shuffledOptions);
      setSelectedOption(userAnswer.selectedOption);
      setShowOtherDetails(false); // Reset accordion on navigation
      setShowMoreDetails(false);
    } else {
      // Shuffle options randomly
      const shuffled = [...questionData.options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
      setSelectedOption(null);
      setShowOtherDetails(false);
      setShowMoreDetails(false);
    }
  }, [questionData, userAnswer]);

  // Scroll to top automatically when question index changes or on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return; // Prevent multiple answers
    const isCorrect = option === questionData.answer;
    setSelectedOption(option);
    onAnswerSubmit(option, isCorrect, shuffledOptions);
    
    // Auto-scroll to explanation after a tiny delay for render and layout calculation
    setTimeout(() => {
      if (explanationRef.current) {
        const offset = 80; // Offset for sticky header
        const elementPosition = explanationRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        smoothScrollTo(offsetPosition, 500);
      }
    }, 150);
  };

  const handleNext = () => {
    onNext();
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const hasAnswered = selectedOption !== null;
  const isCorrect = selectedOption === questionData.answer;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col min-h-[calc(100vh-5.5rem)] animate-in fade-in duration-300" ref={containerRef}>
      {/* Thin Progress Bar positioned at absolute top under header */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-grow p-4 md:p-8 flex flex-col pb-24">
        <div className="mb-6 flex justify-between items-center text-sm font-medium text-muted-foreground">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span className="bg-secondary px-2 py-1 rounded capitalize border">{questionData.type}</span>
        </div>

        {/* Question Area */}
        <div className="bg-card text-card-foreground border rounded p-6 shadow-sm mb-6">
          <h2 
            className="text-xl md:text-2xl leading-relaxed font-normal"
            dangerouslySetInnerHTML={{ __html: questionData.question }}
          />
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {shuffledOptions.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrectOption = option === questionData.answer;
            
            // Determine styles based on state
            let optionStyles = "cursor-pointer hover:border-primary/50 hover:bg-accent/50";
            if (hasAnswered) {
              if (isSelected && isCorrect) optionStyles = "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400";
              else if (isSelected && !isCorrect) optionStyles = "border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400";
              else if (!isSelected && isCorrectOption) optionStyles = "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 outline-dashed outline-2 outline-green-500 outline-offset-[-2px]"; // Highlight correct answer
              else optionStyles = "opacity-50 cursor-not-allowed"; // Disable others
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleOptionClick(option)}
                className={cn(
                  "w-full text-left p-4 border rounded transition-all flex items-start gap-4",
                  optionStyles
                )}
              >
                <div className="mt-1 flex-shrink-0">
                  {hasAnswered && isSelected && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />}
                  {hasAnswered && !isSelected && isCorrectOption && <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                  {(!hasAnswered || (!isSelected && !isCorrectOption)) && (
                    <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center text-xs">
                      {String.fromCharCode(65 + idx)}
                    </div>
                  )}
                </div>
                <div className="flex-grow text-base" dangerouslySetInnerHTML={{ __html: option }} />
              </button>
            );
          })}
        </div>

        {/* Explanations Section - Reveals on Answer */}
        {hasAnswered && (
          <div ref={explanationRef} className="animate-in slide-in-from-top-4 fade-in duration-500 space-y-4 mb-20 pt-4">
            <div className={cn(
              "p-5 rounded border",
              isCorrect ? "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800" : "bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800"
            )}>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                {isCorrect ? "Correct!" : "Incorrect"}
              </h3>
              <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: questionData.explanation }} />
            </div>
            
            {/* More Details Accordion */}
            <div className="border rounded bg-card overflow-hidden">
              <button 
                onClick={() => setShowMoreDetails(!showMoreDetails)}
                className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                aria-expanded={showMoreDetails}
              >
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span className="font-medium">More Details</span>
                </div>
                {showMoreDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {showMoreDetails && (
                <div className="p-4 border-t animate-in slide-in-from-top-2">
                  <div className="leading-relaxed text-foreground mb-4 prose dark:prose-invert max-w-none text-sm" dangerouslySetInnerHTML={{ __html: questionData.moreDetails }} />
                  {questionData.link && (
                    <a 
                      href={questionData.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border rounded text-sm hover:bg-accent transition-colors text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Official Source
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Other Options Accordion */}
            <div className="border rounded bg-card overflow-hidden">
              <button 
                onClick={() => setShowOtherDetails(!showOtherDetails)}
                className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                aria-expanded={showOtherDetails}
              >
                <span className="font-medium">Why other options are incorrect</span>
                {showOtherDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {showOtherDetails && (
                <div className="p-4 border-t animate-in slide-in-from-top-2">
                  <p className="text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: questionData.otherOptions }} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur border-t p-4 flex justify-between items-center z-40">
        <div className="max-w-4xl mx-auto w-full flex justify-between items-center gap-4">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className="px-6 py-2.5 border rounded hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={!hasAnswered}
            className="px-8 py-2.5 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>

    </div>
  );
}
