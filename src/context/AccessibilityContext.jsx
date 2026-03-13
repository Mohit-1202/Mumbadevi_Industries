import React, { createContext, useContext, useEffect, useState } from 'react';
import translations from '../data/translations.json';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Font Size State (Scale factor: 1 is normal)
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseFloat(localStorage.getItem('fontSize')) || 1;
    }
    return 1;
  });

  // Language State
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  });

  // Apply Theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply Font Size
  useEffect(() => {
    const root = window.document.documentElement;
    root.style.fontSize = `${fontSize * 100}%`;
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  // Apply Language
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.1, 1.5));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));
  const resetFontSize = () => setFontSize(1);

  const switchLanguage = (lang) => setLanguage(lang);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if Hindi key is missing
        let fallback = translations['en'];
        for (const fk of keys) {
            fallback = fallback ? fallback[fk] : null;
        }
        return fallback || key;
      }
    }
    return value;
  };

  return (
    <AccessibilityContext.Provider value={{ 
      theme, toggleTheme, 
      fontSize, increaseFontSize, decreaseFontSize, resetFontSize,
      language, switchLanguage, t 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
