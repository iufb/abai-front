import { useTranslation } from "react-i18next";

import { InViewContainer } from "../InViewContainer/InViewContainer";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Programs.module.css";
import crop from "/crop.png";
export const Programs = () => {
  const { t } = useTranslation();

  return (
    <Section fullHeight className={styles.wrapper}>
      <Text tag="h1" variant={"title"}>
        {t("program.title")}
      </Text>
      <section className={styles.programWrapper}>
        <Program t={t} variant={"junior"} />
        <Program t={t} variant={"middle"} />
        <Program t={t} variant={"senior"} />
      </section>
      <SchoolFormat t={t} />
      <GoSection t={t} />
    </Section>
  );
};
const Program = ({ t, variant }) => (
  <section className={styles.program}>
    <section>
      <Text tag="h2" variant={"subtitle"} color="base">
        {t(`program.${variant}.title`)}
      </Text>
      <ul className={styles.list}>
        {t(`program.${variant}.content`, { returnObjects: true }).map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
    <div className={styles.imgWrapper}>
      <img src={crop} />
    </div>
  </section>
);
const SchoolFormat = ({ t }) => {
  return (
    <section className={styles.format}>
      <Text tag="h2" variant={"title"} color="primary">
        {t(`format.title`)}
      </Text>
      <Text tag="h4" variant={"subtitle"} color="secondary">
        {t(`format.first`)}
      </Text>
      <Text tag="p" variant={"p"} color="primary">
        {t(`format.second`)}
      </Text>
      <Schedule t={t} />
    </section>
  );
};
const Schedule = ({ t }) => {
  return (
    <section className={styles.scheduleWrapper}>
      {t("format.schedule", { returnObjects: true }).map((schedule, idx) => (
        <div key={idx} className={styles.scheduleItem}>
          <span className={styles.scheduleLeft}>{schedule.left}</span>
          <span className={styles.dottedLine} />
          <span className={styles.scheduleRight}>{schedule.right}</span>
        </div>
      ))}
    </section>
  );
};
const GoSection = ({ t }) => {
  return (
    <section className={styles.go}>
      <InViewContainer>
        <Text tag="h1" variant={"title"} color="base">
          {t(`go`)}
        </Text>
      </InViewContainer>
      <Button href="#form" color="base" isLink variant={"outline"}>
        {t("buttons.go")}
      </Button>
    </section>
  );
};
