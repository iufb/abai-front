import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./About.module.css";
import first from "/1.png";
import second from "/2.png";
import third from "/3.png";
import clsx from "clsx";
export const About = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <Text tag="h1" variant={"title"}>
            {t("about.title")}
          </Text>
          <Text tag="h4" variant={"subtitle"}>
            {t("about.subtitle")}
          </Text>
          <Text tag="p" variant={"p"}>
            {t("about.content")}
          </Text>
        </section>
        <section className={styles.right}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/kqb9qKmWzcs"
            title="Технологический кластер «Abai IT-Valley”"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </section>
      <section className={styles.bottom}>
        <Text tag="h4" variant={"subtitle"}>
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
      <img src={{ first, second, third }[variant]} width={100} height={100} />
      <Text tag="p" variant={"p"}>
        {t(`factors.${variant}`)}
      </Text>
    </section>
  );
};