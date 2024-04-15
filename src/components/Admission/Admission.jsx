import { useState } from "react";
import { Section } from "../Section/Section";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";
import firstStep from "/firstStep.png";
import secondStep from "/secondStep.png";
import thirdStep from "/thirdStep.png";
import styles from "./Admission.module.css";
import { Text } from "../Text/Text";
import clsx from "clsx";
import { supabase } from "../../supabase";
export const Admission = () => {
  const [tab, setTab] = useState("how");
  const { t } = useTranslation();
  return (
    <Section id="admission" fullHeight className={styles.wrapper}>
      <Text tag={"h1"} variant={"title"}>
        {t("admission.title")}
      </Text>
      {/* <section> */}
      {/*   {t("admission.tabs", { returnObjects: true }).map(({ key, value }) => ( */}
      {/*     <Tab */}
      {/*       value={value} */}
      {/*       isActive={key == tab} */}
      {/*       key={key} */}
      {/*       onClick={() => setTab(key)} */}
      {/*     /> */}
      {/*   ))} */}
      {/* </section> */}
      {tab == "how" ? <SelectionCommittee t={t} /> : <Prices t={t} />}
      <AskQuestionForm t={t} />
    </Section>
  );
};
const AskQuestionForm = ({ t }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNotification("");
    const params = {
      name,
      email,
      tel,
    };
    const { error } = await supabase.from("questions").insert(params);
    if (error) {
      setError(t("question.error"));
    } else {
      setNotification(t("question.notification"));
    }

    setLoading(false);
  };

  return (
    <section className={styles.askQuestion}>
      <Text tag={"h3"} variant={"title"}>
        {t("question.title")}
      </Text>
      {error && <span className="error">{error}</span>}
      {notification && <span className="success">{notification}</span>}
      <form onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          label={t("question.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="tel"
          required
          label={t("question.tel")}
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <Input
          type="email"
          required
          label={t("question.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          color="base"
          disabled={loading}
          type={"submit"}
          variant="primary"
        >
          {loading ? t("buttons.form.loading") : t("buttons.form.base")}
        </Button>
      </form>
    </section>
  );
};
const SelectionCommittee = ({ t }) => {
  return (
    <section className={clsx(styles.firstTab, styles.appear)}>
      <Text tag={"h4"} variant={"subtitle"}>
        {t("admission.how.title")}
      </Text>

      <section className={styles.selection}>
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
