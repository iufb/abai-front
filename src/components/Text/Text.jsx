import clsx from "clsx";
import styles from "./Text.module.css";
export const Text = ({ tag, variant, className, children, ...props }) => {
  const Component = tag;
  return (
    <Component
      className={clsx(
        {
          title: styles.title,
          subtitle: styles.subtitle,
          p: styles.p,
          span: styles.span,
        }[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
