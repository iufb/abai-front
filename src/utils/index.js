import { slugify } from "transliteration";
import { supabase } from "../supabase";
export { LangProvider, useSelectedLang } from "./context";
export const uploadFile = async (file, email) => {
  if (!file) return null;

  const { data, error } = await supabase.storage
    .from("pickerFiles")
    .upload(email + "/" + slugify(file.name), file);

  if (error) return null;
  return data.path;
};
