import styles from "./Checkbox.module.css";
export const Checkbox = ({ label, ...props }) => {
  return (
    <label className={styles.container}>
      {label}
      <input type="checkbox" {...props} />
      <span className={styles.checkmark}></span>
    </label>
  );
};
