import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";

export const Hero = () => {
  const { t } = useTranslation();
  return <Section>{t("hello")}</Section>;
};
