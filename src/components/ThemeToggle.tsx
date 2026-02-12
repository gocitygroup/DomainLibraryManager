import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'system';
      return 'light';
    });
  };

  const icons = {
    light: <Sun className="h-5 w-5" />,
    dark: <Moon className="h-5 w-5" />,
    system: <Monitor className="h-5 w-5" />,
  };

  const labels = {
    light: 'Light Mode',
    dark: 'Dark Mode',
    system: 'System Theme',
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-2 py-2 mb-2 rounded-lg
        dark:bg-gray-800 dark:text-gray-200
        bg-white text-gray-700
        hover:bg-gray-100 dark:hover:bg-gray-700
        transition-colors
        ${className}
      `}
      title={labels[theme]}
    >
      {icons[theme]}
      <span className="text-sm font-medium">{labels[theme]}</span>
    </button>
  );
}