import clsx from "clsx";
import styles from "./Section.module.css";
import { motion } from "framer-motion";
export const Section = ({
  fullHeight = false,
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  return (
    <motion.section
      className={clsx(
        fullHeight ? styles.fullHeight : styles.screen,
        fullWidth ? styles.fullWidth : styles.limitedWidth,
        className,
      )}
      {...props}
    >
      {children}
    </motion.section>
  );
};
