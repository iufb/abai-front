import { useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";
import { Section } from "../Section/Section";
import styles from "./ContactUs.module.css";
import { supabase } from "../../supabase";
import { uploadFile } from "../../utils";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  return (
    <Section id="form" className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.bg}>
          ContactUs
          <Form />
        </div>
      </section>
    </Section>
  );
};

const languages = ["Русский", "Казахский"];
const classes = [
  "5-й класс",
  "6-ой класс",
  "7-ой класс",
  "8-ой класс",
  "9-й класс",
  "10-й класс",
];
const sources = [
  "Instagram",
  "Facebook",
  "Поиск в Google",
  "Рекомендации знакомых",
  "Проходили / проезжали мимо",
];
const Form = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(languages[0]);
  const [nextClass, setNextClass] = useState(classes[0]);
  const [sourcesState, setSourcesState] = useState([]);
  const [parent, setParent] = useState("");
  const [tel, setTel] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [student, setStudent] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [achievements, setAchievements] = useState("");
  const [school, setSchool] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setFile(selectedFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setNotification("");
    const fileUrl = await uploadFile(file, parentEmail);
    const params = {
      parent,
      email: parentEmail,
      tel,
      student,
      birthdate: birthDate,
      sources: sourcesState.join(","),
      school,
      achievements,
      language: lang,
      class: nextClass,
      files: fileUrl ? [fileUrl] : null,
    };
    const { error } = await supabase.from("application").insert(params);
    if (error) {
      setError(t("form.error"));
    } else {
      setNotification(t("form.notification"));
    }

    setLoading(false);
  };
  const sourcesOnChange = (e) => {
    if (sourcesState.findIndex((source) => source === e.target.value) !== -1) {
      setSourcesState(
        sourcesState.filter((source) => source !== e.target.value),
      );
      return;
    }
    setSourcesState([...sourcesState, e.target.value]);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formContent}>
        <div className={styles.formLeft}>
          <Input
            label={t("form.parent")}
            value={parent}
            required
            onChange={(e) => setParent(e.target.value)}
          />
          <Input
            label={t("form.tel")}
            type="tel"
            value={tel}
            required
            onChange={(e) => setTel(e.target.value)}
          />
          <Input
            label={t("form.email")}
            value={parentEmail}
            required
            onChange={(e) => setParentEmail(e.target.value)}
          />
          <Input
            label={t("form.child")}
            required
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
          <div className={styles.selectWrapper}>
            <span>{t("form.lang")}</span>
            {languages.map((l) => (
              <Radio
                key={l}
                label={l}
                checked={lang === l}
                value={l}
                onChange={(e) => setLang(e.target.value)}
              />
            ))}
            <Input
              label={t("form.achievements")}
              required
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
            />
          </div>
          <Input
            label={t("form.birthdate")}
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Input
            label={t("form.school")}
            required
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className={styles.formRight}>
          <div className={styles.selectWrapper}>
            <span>{t("form.nextclass")}</span>
            {classes.map((c) => (
              <Radio
                key={c}
                label={c}
                checked={nextClass === c}
                value={c}
                onChange={(e) => setNextClass(e.target.value)}
              />
            ))}
          </div>
          <div className={styles.selectWrapper}>
            <span>{t("form.sources")}</span>
            {sources.map((s) => (
              <Checkbox
                key={s}
                label={s}
                checked={
                  sourcesState.findIndex((source) => source === s) !== -1
                }
                value={s}
                onChange={sourcesOnChange}
              />
            ))}
          </div>

          <Input
            label={t("form.docs")}
            type="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      {error && <span className="error">{error}</span>}
      {notification && <span className="success">{notification}</span>}
      <Button disabled={loading} type="submit" variant={"primary"}>
        {loading ? t("buttons.form.loading") : t("buttons.form.base")}
      </Button>
    </form>
  );
};
