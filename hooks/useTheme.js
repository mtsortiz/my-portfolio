import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const isDarkMode = savedTheme === 'dark';
      setIsDark(isDarkMode);
      applyTheme(isDarkMode);
    } else {
      applyTheme(true); // Por defecto modo oscuro
    }
  }, []);

  const applyTheme = (darkMode) => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  };

  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme = !isDark;
    console.log('Toggling theme from', isDark ? 'dark' : 'light', 'to', newTheme ? 'dark' : 'light');
    setIsDark(newTheme);
    localStorage.setItem('portfolio-theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
  };

  return { isDark, toggleTheme, mounted };
};