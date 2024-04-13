import { useState } from "react";
import { Section } from "../Section/Section";
import { useTranslation } from "react-i18next";
import firstStep from "/firstStep.png";
import secondStep from "/secondStep.png";
import thirdStep from "/thirdStep.png";
import styles from "./Admission.module.css";
import { Text } from "../Text/Text";
import clsx from "clsx";
export const Admission = () => {
  const [tab, setTab] = useState("how");
  const { t } = useTranslation();
  return (
    <Section fullHeight className={styles.wrapper}>
      <Text tag={"h1"} variant={"title"}>
        {t("admission.title")}
      </Text>
      <section>
        {t("admission.tabs", { returnObjects: true }).map(({ key, value }) => (
          <Tab
            value={value}
            isActive={key == tab}
            key={key}
            onClick={() => setTab(key)}
          />
        ))}
      </section>
      {tab == "how" ? <SelectionCommittee t={t} /> : <Prices t={t} />}
    </Section>
  );
};
const SelectionCommittee = ({ t }) => {
  return (
    <section className={clsx(styles.firstTab, styles.appear)}>
      <Text tag={"h4"} variant={"subtitle"}>
        {t("admission.how.title")}
      </Text>

      <section className={styles.selection}>
        <span className={styles.dots} />
        <section className={styles.selectionStep}>
          <img src={firstStep} alt="firstStep" />
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.firstStep")}
          </Text>
        </section>
        <section className={styles.selectionStep}>
          <img src={secondStep} alt="secondStep" />
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.secondStep")}
          </Text>
        </section>
        <section className={styles.selectionStep}>
          <img src={thirdStep} alt="thirdStep" />
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.thirdStep")}
          </Text>
        </section>
      </section>
      <Hint t={t} />
    </section>
  );
};

const Prices = ({ t }) => {
  return <section>prices</section>;
};
const Tab = ({ isActive, value, ...props }) => {
  return (
    <button className={clsx(styles.tab, isActive && styles.active)} {...props}>
      {value}
    </button>
  );
};

const Hint = ({ t }) => {
  return (
    <section className={styles.hint}>
      <Text tag={"h3"} variant={"subtitle"}>
        {t("admission.how.subtitle")}
      </Text>
      <Text tag={"p"} variant={"p"}>
        {t("admission.how.contentFirst")}
      </Text>
      <br />
      <Text tag={"p"} variant={"p"}>
        {t("admission.how.contentSecond")}
      </Text>
    </section>
  );
};
