
export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: any;
}

export interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
}
