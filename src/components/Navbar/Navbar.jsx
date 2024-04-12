import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import logo from "/ais-logo-rs.png";
import { useEffect, useState } from "react";
export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Ais logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <LanguageSwitcher />
        <Button isLink={true} href="#form" variant="primary">
          Оставить заявку
        </Button>
      </div>
    </nav>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const selectedLang = lang ? "ru" : "en";
  useEffect(() => {
    changeLanguage(lang ? "ru" : "en");
  }, [lang]);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={lang}
        onChange={(e) => {
          setLang(!lang);
        }}
      />
      <span data-lang={selectedLang.toUpperCase()} className={styles.slider} />
    </label>
  );
};
