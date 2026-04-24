import { Moon, Sun, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

export function Header({ onHomeClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme strictly from localStorage, default is light
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#005ba1] dark:border-border bg-[#0078D4] dark:bg-background/95 backdrop-blur dark:supports-[backdrop-filter]:bg-background/60 text-white dark:text-foreground shadow-md dark:shadow-none flex items-center justify-between px-4 sm:px-6 h-12 transition-all duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onHomeClick}
          className="p-2 -ml-2 rounded hover:bg-white/20 dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors"
          aria-label="Home"
        >
          <Home className="w-5 h-5" />
        </button>
        <h1 className="font-semibold text-lg tracking-tight truncate">
          Exam MD-102 Prep
        </h1>
      </div>
      
      <button
        onClick={toggleTheme}
        className="p-2 -mr-2 rounded hover:bg-white/20 dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  );
}
