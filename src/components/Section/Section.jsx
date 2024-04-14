import clsx from "clsx";
import styles from "./Section.module.css";
export const Section = ({
  fullHeight = false,
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={clsx(
        fullHeight ? styles.fullHeight : styles.screen,
        fullWidth ? styles.fullWidth : styles.limitedWidth,
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
