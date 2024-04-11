import styles from "./Section.module.css";
export const Section = ({ children, ...props }) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};
