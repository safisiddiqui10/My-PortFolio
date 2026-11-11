import { useCallback, useState } from 'react';

const readTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

/**
 * Light/dark theme. The initial theme is set before first paint by the inline
 * script in index.html (saved choice, else the system preference).
 */
export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const next = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the theme still applies.
    }
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
}
