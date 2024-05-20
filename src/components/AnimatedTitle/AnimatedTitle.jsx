import styles from "./AnimatedTitle.module.css";
import { Text } from "../Text/Text";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import clsx from "clsx";
const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export const AnimatedTitle = ({ text }) => {
  const { t } = useTranslation();
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.5, once: true });
  console.log("About school".split(""));
  return (
    <Text
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      tag="h1"
      variant={"title"}
      transition={{ staggerChildren: 0.05 }}
      aria-hidden
    >
      <h1 className={styles.screenReader}>{t(text)}</h1>
      {t(text)
        .split("")
        .map((char, idx) => (
          <motion.span variants={variants} className={styles.char} key={idx}>
            {char == " " ? "\u00A0" : char}
          </motion.span>
        ))}
    </Text>
  );
};
