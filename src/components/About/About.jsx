import clsx from "clsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./About.module.css";
import first from "/1.png";
import second from "/2.png";
import third from "/3.png";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
const leftVariants = {
  offscreen: {
    x: -300,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const rightVariants = {
  offscreen: {
    x: 300,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
export const About = () => {
  const { t } = useTranslation();
  return (
    <Section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "10px" }}
      id={"about"}
      fullHeight
    >
      <section className={styles.wrapper}>
        <motion.div variants={leftVariants} className={styles.left}>
          {["starRight", "starLeft", "starBottom"].map((s) => (
            <motion.img
              animate={{ rotate: [-20, 20, -20] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "mirror",
              }}
              key={s}
              src="/ui-icons/stars.svg"
              alt="stars-ui"
              className={styles[s]}
            />
          ))}
          <AnimatedTitle text={"about.title"} />
          <Text tag="h4" variant={"subtitle"} color="secondary">
            {t("about.subtitle")}
          </Text>
          <Text tag="p" variant={"p"}>
            {t("about.content")}
          </Text>
        </motion.div>
        <motion.div variants={rightVariants} className={styles.right}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/VaXjvyKFD_4"
            title="Технологический кластер «Abai IT-Valley”"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>
      <section className={styles.bottom}>
        <Text tag="h4" variant={"subtitle"} color="secondary">
          {t("factors.title")}
        </Text>
        <motion.section
          variants={containerVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-300px" }}
          initial="hidden"
          className={styles.factorWrapper}
        >
          <Factor t={t} variant={"first"} />
          <Factor t={t} variant={"second"} />
          <Factor t={t} variant={"third"} />
        </motion.section>
        <Text className={styles.end} tag="h3" variant={"subtitle"}>
          {t("factors.end")}
        </Text>
      </section>
    </Section>
  );
};
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Factor = ({ t, variant }) => {
  return (
    <motion.div
      variants={childVariants}
      className={clsx(
        styles.factor,
        { first: styles.first, second: styles.second, third: styles.third }[
          variant
        ],
      )}
    >
      <img
        src={{ first, second, third }[variant]}
        alt={variant}
        className={styles.numbers}
      />
      <Text tag="p" variant={"p"}>
        {t(`factors.${variant}`)}
      </Text>
    </motion.div>
  );
};
