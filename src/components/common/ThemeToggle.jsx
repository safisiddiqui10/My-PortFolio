import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/** Light/dark switch. Which icon shows is decided in CSS by the html[data-theme] attribute. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-ink hover:bg-paper-2 transition-colors"
    >
      <Moon className="icon-moon w-5 h-5" />
      <Sun className="icon-sun w-5 h-5" />
    </button>
  );
}
