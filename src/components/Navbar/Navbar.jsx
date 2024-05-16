import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import { useSelectedLang } from "../../utils";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import logo from "/ais-logo-rs.png";
export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.logoWrapper}
        >
          <img src={logo} alt="Ais logo" className={styles.logo} />
        </a>
        <div className={styles.right}>
          <section className={styles.buttons}>
            <a className={styles.link} href="#about">
              {t("about.title")}
            </a>
            {/* <Button
              isLink={true}
              href="#admission"
              variant="outline"
              className={styles.applicationBtn}
            > */}
            <a className={styles.link} href="#admission">
              {t("buttons.admission")}
            </a>

            <Button
              isLink={true}
              color="base"
              href="#form"
              variant="primary"
              className={styles.applicationBtn}
            >
              {t("buttons.contact")}
            </Button>
          </section>
        </div>
        <div className={styles.langPhone}>
          <a className={styles.phone} href={"tel:+7 708 938 3180"}>
            <img className={styles.phoneIcon} src="/phone.svg" alt="call" />
            <span>+7 708 938 3180</span>
          </a>
          <LanguageSwitcher />
        </div>
        <BurgerButton className={styles.burger} />
      </nav>
    </header>
  );
};

const LanguageSwitcher = () => {
  const { lang, setLang, selectedLang, notSelected } = useSelectedLang();
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
