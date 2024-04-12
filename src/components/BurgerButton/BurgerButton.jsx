import clsx from "clsx";
import styles from "./BurgetButton.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export const BurgerButton = ({ className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <button className={clsx(styles.wrapper, className)} onClick={toggleMenu}>
        <img src="/burger.svg" />
      </button>
      {isOpen &&
        createPortal(
          <div className={styles.menu}>
            <button className={styles.close} onClick={toggleMenu}>
              X
            </button>
            {children}
          </div>,
          document.body,
        )}
    </>
  );
};
