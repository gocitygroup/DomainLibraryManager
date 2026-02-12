import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme(storageKey = 'theme') {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    return savedTheme || 'system';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const root = window.document.documentElement;
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      const activeTheme = theme === 'system' ? systemTheme : theme;
      
      root.classList.remove('light', 'dark');
      root.classList.add(activeTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange();

    localStorage.setItem(storageKey, theme);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, storageKey]);

  return [theme, setTheme] as const;
}