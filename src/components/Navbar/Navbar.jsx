import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import logo from "/ais-logo-rs.png";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { BurgerButton } from "../BurgerButton/BurgerButton";
export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Ais logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <LanguageSwitcher />
          <Button
            isLink={true}
            href="#form"
            variant="primary"
            className={styles.applicationBtn}
          >
            Оставить заявку
          </Button>
        </div>
        <BurgerButton className={styles.burger}>
          <div className={styles.right}>
            <LanguageSwitcher />
            <Button
              isLink={true}
              href="#form"
              variant="primary"
              className={styles.applicationBtn}
            >
              Оставить заявку
            </Button>
          </div>
        </BurgerButton>
      </nav>
    </header>
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
