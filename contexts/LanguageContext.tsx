
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { Language, LanguageContextType } from '../types';
import { translationsData } from '../constants/translations';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  }, []);
  
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    translations: translationsData[language],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
