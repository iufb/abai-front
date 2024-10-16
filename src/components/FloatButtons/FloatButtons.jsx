import { useEffect, useState } from "react";
import styles from "./FloatButtons.module.css";
export const FloatButtons = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = (scrollPosition / document.body.scrollHeight) * 3;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={styles.buttons}
      style={{
        opacity: opacity ? opacity : 0,
      }}
    >
      <a className={styles.phone} href={"tel:+7 708 938 3180"}>
        <img className={styles.phoneIcon} src="/phone.svg" alt="call" />
      </a>

      <button
        onClick={scrollToTop}
        className={styles.up}
        aria-label="up button"
      >
        <img src="/up.svg" alt="up icon" />
      </button>
    </div>
  );
};
