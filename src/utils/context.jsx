import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LangContext = createContext();
export const LangProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const selectedLang = lang ? "ru" : "kz";
  const notSelected = selectedLang == "kz" ? "ru" : "kz";
  useEffect(() => {
    changeLanguage(selectedLang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, selectedLang, notSelected }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSelectedLang = () => useContext(LangContext);
