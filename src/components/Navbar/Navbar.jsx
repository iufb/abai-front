import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

import { useSelectedLang } from "../../utils";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { Link } from "../Link/Link";
import logo from "/ais-logo-rs.png";
export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Ais logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <section className={styles.buttons}>
            <a className={styles.link} href="#about">
              {t("about.title")}
            </a>
            <Button
              isLink={true}
              href="#admission"
              variant="outline"
              className={styles.applicationBtn}
            >
              {t("buttons.admission")}
            </Button>

            <Button
              isLink={true}
              color="base"
              href="#form"
              variant="primary"
              className={styles.applicationBtn}
            >
              {t("buttons.contact")}
            </Button>
            <Link href={"tel:+7 708 938 3180"}>
              <img className={styles.phoneIcon} src="/phone.png" alt="call" />
            </Link>
          </section>
          <LanguageSwitcher />
          <BurgerButton className={styles.burger} />
        </div>
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
