import { BookOpen } from 'lucide-react';

interface MainMenuProps {
  onSelectQuiz: (domain: number) => void;
}

export function MainMenu({ onSelectQuiz }: MainMenuProps) {
  return (
    <div className="max-w-4xl mx-auto w-full p-4 md:p-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Master Endpoint Administration
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Accelerate your path to the Microsoft 365 MD-102 certification. Test your expertise in modern device deployment, Intune management, and endpoint security with our comprehensive, exam-style practice sets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <button
          onClick={() => onSelectQuiz(1)}
          className="group relative flex flex-col items-start p-6 text-left border bg-card text-card-foreground rounded hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 w-full"
        >
          <div className="rounded p-3 bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            Domain 1
          </h3>
          <p className="text-sm text-muted-foreground flex-grow">
            Deploy Windows client
          </p>
          <div className="mt-6 w-full flex items-center justify-between text-sm font-medium text-primary">
            <span>50 Questions</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Start Quiz &rarr;
            </span>
          </div>
        </button>

        {/* Domain 2 */}
        <button
          onClick={() => onSelectQuiz(2)}
          className="group relative flex flex-col items-start p-6 text-left border bg-card text-card-foreground rounded hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 w-full"
        >
          <div className="rounded p-3 bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
             <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            Domain 2
          </h3>
          <p className="text-sm text-muted-foreground flex-grow">
            Manage identity and compliance
          </p>
          <div className="mt-6 w-full flex items-center justify-between text-sm font-medium text-primary">
            <span>50 Questions</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Start Quiz &rarr;
            </span>
          </div>
        </button>
        {/* Domain 3 */}
        <button
          onClick={() => onSelectQuiz(3)}
          className="group relative flex flex-col items-start p-6 text-left border bg-card text-card-foreground rounded hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 w-full"
        >
          <div className="rounded p-3 bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
             <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            Domain 3
          </h3>
          <p className="text-sm text-muted-foreground flex-grow">
            Manage, maintain, and protect devices
          </p>
          <div className="mt-6 w-full flex items-center justify-between text-sm font-medium text-primary">
            <span>50 Questions</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Start Quiz &rarr;
            </span>
          </div>
        </button>

        {/* Domain 4 */}
        <button
          onClick={() => onSelectQuiz(4)}
          className="group relative flex flex-col items-start p-6 text-left border bg-card text-card-foreground rounded hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 w-full"
        >
          <div className="rounded p-3 bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
             <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
            Domain 4
          </h3>
          <p className="text-sm text-muted-foreground flex-grow">
            Manage applications
          </p>
          <div className="mt-6 w-full flex items-center justify-between text-sm font-medium text-primary">
            <span>50 Questions</span>
            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Start Quiz &rarr;
            </span>
          </div>
        </button>
      </div>
      
      {/* Full Exam */}
      <div className="mt-8">
        <button
          onClick={() => onSelectQuiz(5)}
          className="group relative flex flex-col md:flex-row items-center p-6 md:p-8 text-left border border-primary/20 bg-gradient-to-br from-card to-primary/5 text-card-foreground rounded hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 w-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <div className="flex-shrink-0 rounded-full p-4 bg-primary/20 text-primary mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-transform duration-300">
             <BookOpen className="w-8 h-8" />
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h3 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors">
              Full Practice Exam
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Simulate the real MD-102 exam. A comprehensive 60-question test covering all objective domains proportionally.
            </p>
          </div>
          
          <div className="flex-shrink-0 mt-6 md:mt-0 flex flex-col items-center md:items-end w-full md:w-auto">
             <div className="text-sm font-semibold text-primary mb-1">60 Questions</div>
             <div className="text-xs text-muted-foreground mb-3">Domain Scoring Included</div>
             <span className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded group-hover:bg-primary/90 transition-colors">
               Start Exam &rarr;
             </span>
          </div>
        </button>
      </div>
    </div>
  );
}

