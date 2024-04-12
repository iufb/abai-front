import { supabase } from "../supabase";
import { slugify } from "transliteration";
export const uploadFile = async (file, email) => {
  if (!file) return null;

  const { data, error } = await supabase.storage
    .from("pickerFiles")
    .upload(email + "/" + slugify(file.name), file);

  if (error) return null;
  return data.path;
};
