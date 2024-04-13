import clsx from "clsx";
import styles from "./Section.module.css";
export const Section = ({
  fullHeight = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(
        styles.section,
        fullHeight ? styles.fullHeight : styles.screen,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
