import clsx from "clsx";
import styles from "./Input.module.css";
export const Input = ({ className, label, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        id={label}
        className={clsx(styles.input)}
        placeholder={label}
        {...props}
      />
    </div>
  );
};
