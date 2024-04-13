import clsx from "clsx";
import styles from "./Section.module.css";
export const Section = ({ className, children, ...props }) => {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      {children}
    </section>
  );
};
