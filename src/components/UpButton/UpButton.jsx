import { useEffect, useState } from "react";
import styles from "./UpButton.module.css";
export const UpButton = () => {
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

  const opacity = (scrollPosition / document.body.scrollHeight) * 2;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      style={{
        opacity,
      }}
      onClick={scrollToTop}
      className={styles.up}
      aria-label="up button"
    >
      <img src="/up.svg" />
    </button>
  );
};
