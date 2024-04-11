import clsx from "clsx";
import styles from "./Button.module.css";
export const Button = ({ isLink, variant, children, className, ...props }) => {
  const ElementType = isLink ? "a" : "button";
  return (
    <ElementType
      className={clsx(
        className,
        styles.button,
        { primary: styles.primary }[variant],
      )}
      {...props}
    >
      {children}
    </ElementType>
  );
};
