import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./About.module.css";
import first from "/1.png";
import second from "/2.png";
import third from "/3.png";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Section id={"about"} fullHeight>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <img
            src="/ui-icons/stars.svg"
            alt="stars-ui"
            className={styles.starRight}
          />
          <img
            src="/ui-icons/stars.svg"
            alt="stars-ui"
            className={styles.starLeft}
          />
          <img
            src="/ui-icons/stars.svg"
            alt="stars-ui"
            className={styles.starBottom}
          />

          <Text tag="h1" variant={"title"}>
            {t("about.title")}
          </Text>
          <Text tag="h4" variant={"subtitle"} color="secondary">
            {t("about.subtitle")}
          </Text>
          <Text tag="p" variant={"p"}>
            {t("about.content")}
          </Text>
        </section>
        <section className={styles.right}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/VaXjvyKFD_4"
            title="Технологический кластер «Abai IT-Valley”"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </section>
      <section className={styles.bottom}>
        <Text tag="h4" variant={"subtitle"} color="secondary">
          {t("factors.title")}
        </Text>
        <section className={styles.factorWrapper}>
          <Factor t={t} variant={"first"} />
          <Factor t={t} variant={"second"} />
          <Factor t={t} variant={"third"} />
        </section>
        <Text className={styles.end} tag="h3" variant={"subtitle"}>
          {t("factors.end")}
        </Text>
      </section>
    </Section>
  );
};
const Factor = ({ t, variant }) => {
  return (
    <section
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
    </section>
  );
};
