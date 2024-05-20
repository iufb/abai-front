import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Hero.module.css";
const heroBgs = ["/herobg-light.webp", "/ch/2.webp"];
const slideUp = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: "easeInOut",
    },
  },
};
export const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev == heroBgs.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Section fullWidth>
      <section
        style={{
          backgroundImage: `url(${heroBgs[current]})`,
        }}
        className={styles.bg}
      >
        <section className={styles.blur} />
        <motion.section
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className={styles.content}
        >
          <Text tag={"h1"} color="base" variant={"title"}>
            {t("hero.title")}
          </Text>
          <Text tag={"h2"} color="base" variant={"title"}>
            {t("hero.subtitle")}
          </Text>
          <Text tag={"h4"} color="base" variant={"title"}>
            {t("hero.subsubtitle")}
          </Text>
          <Text tag={"h5"} color="base" variant={"title"}>
            {t("hero.text")}
          </Text>

          <Button
            href="#form"
            isLink
            className={styles.button}
            variant={"outline"}
            color="base"
          >
            {t("buttons.contact")}
          </Button>
        </motion.section>
      </section>
    </Section>
  );
};
