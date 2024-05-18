import clsx from "clsx";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { supabase } from "../../supabase";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Admission.module.css";
export const Admission = () => {
  const [tab, setTab] = useState("how");
  const { t } = useTranslation();
  return (
    <Section id="admission" fullHeight className={styles.wrapper}>
      <Text tag={"h1"} variant={"title"}>
        {t("admission.title")}
      </Text>
      <section className={styles.content}>
        <section className={styles.tabs}>
          {t("admission.tabs", { returnObjects: true }).map(
            ({ key, value }) => (
              <Tab
                value={value}
                isActive={key == tab}
                key={key}
                onClick={() => setTab(key)}
              />
            ),
          )}
        </section>
        <section className={styles.right}>{ShowContent(tab, t)}</section>
      </section>

      <Hint t={t} />
      <Text
        className={styles.admissionEnd}
        tag={"h2"}
        color="primary"
        variant={"subtitle"}
      >
        {t("admission.prices.end")}
      </Text>
      <Trans
        i18nKey="admission.prices.by"
        components={{
          br: <br />,
          title: (
            <Text
              className={styles.by}
              tag={"h3"}
              color="secondary"
              variant={"title"}
            ></Text>
          ),
        }}
      />
      <AskQuestionForm t={t} />
    </Section>
  );
};
const ShowContent = (tab, t) => {
  switch (tab) {
    case "how":
      return <SelectionCommittee t={t} />;
    case "prices":
      return <Prices t={t} />;
    case "rules":
      return <Rules t={t} />;
    case "docs":
      return <Docs t={t} />;
  }
};
const AskQuestionForm = ({ t }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
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
      question,
    };
    const { error } = await supabase.from("questions").insert(params);
    if (error) {
      setError(t("question.error"));
    } else {
      setNotification(t("question.notification"));
      setName("");
      setEmail("");
      setTel("");
      setQuestion("");
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formUp}>
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
            className={styles.formDown}
            type="email"
            required
            label={t("question.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Input
          type="text"
          required
          label={t("question.question")}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
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
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.firstStep")}
          </Text>
        </section>
        <span className={styles.arrowRight}>{"→"}</span>
        <section className={styles.selectionStep}>
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.secondStep")}
          </Text>
        </section>
        <span className={styles.arrowRight}>{"→"}</span>
        <section className={styles.selectionStep}>
          <Text tag={"p"} variant={"p"}>
            {t("admission.how.thirdStep")}
          </Text>
        </section>
      </section>
    </section>
  );
};

const Prices = ({ t }) => {
  return (
    <section className={styles.tabContentWrapper}>
      <Text tag={"h2"} color="primary" variant={"subtitle"}>
        {t("admission.prices.month.content")}
        <Text tag={"span"} color="secondary" variant={"subtitle"}>
          {t("admission.prices.month.accent")}
        </Text>
      </Text>
      <Text tag={"h2"} color="primary" variant={"subtitle"}>
        {t("admission.prices.lunch.content")}
        <Text tag={"span"} color="secondary" variant={"subtitle"}>
          {t("admission.prices.lunch.accent")}
        </Text>
      </Text>
      <Text tag={"p"} color="primary" variant={"p"}>
        {t("admission.prices.olimps")}
      </Text>
      <Text tag={"h2"} color="primary" variant={"subtitle"}>
        {t("admission.prices.dormitory.content")}
        <Text tag={"span"} color="secondary" variant={"subtitle"}>
          {t("admission.prices.dormitory.accent")}
        </Text>
      </Text>
      <Text tag={"p"} color="primary" variant={"p"}>
        {t("admission.prices.sale")}
      </Text>
    </section>
  );
};
const Tab = ({ isActive, value, ...props }) => {
  return (
    <button className={clsx(styles.tab, isActive && styles.active)} {...props}>
      {value}
    </button>
  );
};
const Rules = ({ t }) => {
  return (
    <section className={styles.tabContentWrapper}>
      <Text tag={"h3"} color="secondary" variant={"subtitle"}>
        {t("admission.rules.title")}
      </Text>
      <ul className={styles.list}>
        {t("admission.rules.content", { returnObjects: true }).map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
  );
};
const Docs = ({ t }) => {
  return (
    <section className={styles.tabContentWrapper}>
      <Text tag={"h3"} color="secondary" variant={"subtitle"}>
        {t("admission.docs.title")}
      </Text>
      <ul className={styles.list}>
        {t("admission.docs.content", { returnObjects: true }).map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
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
