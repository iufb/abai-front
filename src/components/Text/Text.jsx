import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Text.module.css";
export const Text = ({
  tag,
  color = "primary",
  variant,
  className,
  children,
  ...props
}) => {
  const Component = motion[tag];

  return (
    <Component
      className={clsx(
        {
          title: styles.title,
          subtitle: styles.subtitle,
          subsubtitle: styles.subsubtitle,
          p: styles.p,
          span: styles.span,
        }[variant],
        {
          primary: styles.primary,
          secondary: styles.secondary,
          base: styles.base,
        }[color],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
