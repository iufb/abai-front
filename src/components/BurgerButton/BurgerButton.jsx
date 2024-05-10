import clsx from "clsx";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Contacts } from "../Contacts/Contacts";
import styles from "./BurgetButton.module.css";
export const BurgerButton = ({ className }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    changeOverflow();
  };
  const changeOverflow = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const navigate = () => {
    setIsOpen(false);
    changeOverflow();
  };
  return (
    <>
      <button
        aria-label="Меню"
        className={clsx(styles.wrapper, className)}
        onClick={toggleMenu}
      >
        <img src="/burger.svg" />
      </button>
      {isOpen &&
        createPortal(
          <div className={styles.menu}>
            <button className={styles.close} onClick={toggleMenu}>
              X
            </button>
            <ul className={styles.links}>
              <li className={styles.link}>
                <a onClick={navigate} href="#about">
                  {t("about.title")}
                </a>
              </li>
              <li className={styles.link}>
                <a onClick={navigate} href="#admission">
                  {t("buttons.admission")}
                </a>
              </li>
              <li className={styles.link}>
                <a onClick={navigate} href="#form">
                  {t("buttons.contact")}
                </a>
              </li>
            </ul>
            <Contacts />
          </div>,
          document.body
        )}
    </>
  );
};
