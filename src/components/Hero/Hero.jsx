import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <Section>
      {t("hello")}
      <LanguageSwitcher />
    </Section>
  );
};
function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ru")}>Ru</button>
    </div>
  );
}
