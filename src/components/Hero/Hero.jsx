import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Hero.module.css";
import { Button } from "../Button/Button";
export const Hero = () => {
  const { t } = useTranslation();
  return (
    <Section fullWidth>
      <section className={styles.bg}>
        <section className={styles.blur} />
        <section className={styles.content}>
          <Text tag={"h1"} color="base" variant={"title"}>
            {t("hero.title")}
          </Text>
          <Text tag={"h2"} color="base" variant={"title"}>
            {t("hero.subtitle")}
          </Text>
          <Text tag={"h4"} color="base" variant={"title"}>
            {t("hero.subsubtitle")}
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
        </section>
      </section>
    </Section>
  );
};
