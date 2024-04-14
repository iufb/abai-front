import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import { useEffect, useState } from "react";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import logo from "/ais-logo-rs.png";
export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Ais logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <section className={styles.buttons}>
            <Button
              isLink={true}
              href="#admission"
              variant="outline"
              className={styles.applicationBtn}
            >
              Поступление
            </Button>

            <Button
              isLink={true}
              color="base"
              href="#form"
              variant="primary"
              className={styles.applicationBtn}
            >
              Оставить заявку
            </Button>
          </section>
          <LanguageSwitcher />
          <BurgerButton className={styles.burger} />
        </div>
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
  const selectedLang = lang ? "kz" : "ru";
  const notSelected = selectedLang == "kz" ? "ru" : "kz";
  useEffect(() => {
    changeLanguage(selectedLang);
  }, [lang]);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={lang}
        onChange={() => {
          setLang(!lang);
        }}
      />
      <span
        data-notactive={notSelected}
        data-lang={selectedLang}
        className={styles.slider}
      />
    </label>
  );
};
