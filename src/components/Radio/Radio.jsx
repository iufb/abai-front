import styles from "./Radio.module.css";
export const Radio = ({ label, ...props }) => {
  return (
    <label htmlFor={label} className={styles.container}>
      {label}
      <input type="radio" {...props} id={label} />
      <span className={styles.checkmark}></span>
    </label>
  );
};
