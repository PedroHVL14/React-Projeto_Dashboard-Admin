
import React, { createContext, useContext, useState, useEffect } from "react";
import { ptBR } from "../locales/pt-BR";
import { enUS } from "../locales/en-US";

type Language = "pt-BR" | "en-US";

interface LanguageContextProps {
  language: Language;
  t: Record<string, string>;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "pt-BR";
  });
  
  const [translations, setTranslations] = useState<Record<string, string>>(
    language === "pt-BR" ? ptBR : enUS
  );

  useEffect(() => {
    setTranslations(language === "pt-BR" ? ptBR : enUS);
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  
  return context;
};
