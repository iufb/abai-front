import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Text.module.css";
import { forwardRef } from "react";
export const Text = forwardRef(function Text(
  { tag, color = "primary", variant, className, children, ...props },
  ref,
) {
  const Component = motion[tag];

  return (
    <Component
      ref={ref}
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
});
