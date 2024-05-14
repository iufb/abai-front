import clsx from "clsx";
import styles from "./Button.module.css";
export const Button = ({
  isLink,
  color = "secondary",
  variant,
  children,
  className,
  ...props
}) => {
  const ElementType = isLink ? "a" : "button";
  return (
    <ElementType
      className={clsx(
        className,
        styles.button,
        { base: styles.base, secondary: styles.secondary }[color],
        {
          primary: styles.primary,
          outline: styles.outline,
        }[variant]
      )}
      {...props}
    >
      {children}
    </ElementType>
  );
};
