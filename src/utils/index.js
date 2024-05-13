import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { slugify } from "transliteration";
import { supabase } from "../supabase";
export const uploadFile = async (file, email) => {
  if (!file) return null;

  const { data, error } = await supabase.storage
    .from("pickerFiles")
    .upload(email + "/" + slugify(file.name), file);

  if (error) return null;
  return data.path;
};

export const useSelectedLang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const selectedLang = lang ? "kz" : "ru";
  const notSelected = selectedLang == "kz" ? "ru" : "kz";
  useEffect(() => {
    changeLanguage(selectedLang);
  }, [lang]);
  return { lang, setLang, selectedLang, notSelected };
};
