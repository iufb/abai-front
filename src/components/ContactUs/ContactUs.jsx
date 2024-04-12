import { useState } from "react";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Input } from "../Input/Input";
import { Radio } from "../Radio/Radio";
import { Section } from "../Section/Section";
import styles from "./ContactUs.module.css";
import { supabase } from "../../supabase";
import { uploadFile } from "../../utils";

export const ContactUs = () => {
  return (
    <Section id="form">
      <section className={styles.wrapper}>
        <div className={styles.bg}>ContactUs</div>
        <Form />
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
  const [lang, setLang] = useState(languages[0]);
  const [nextClass, setNextClass] = useState(classes[0]);
  const [sourcesState, setSourcesState] = useState([]);
  const [parent, setParent] = useState("");
  const [tel, setTel] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [student, setStudent] = useState("");
  const [birthDate, setBirthDate] = useState("");
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
      language: lang,
      class: nextClass,
      files: fileUrl ? [fileUrl] : null,
    };
    const { error } = await supabase.from("application").insert(params);
    if (error) {
      setError("Ошибка! Что-то пошло не так.");
    } else {
      setNotification("Ваша заявка отправлена!");
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
            label={"ФИО родителя"}
            value={parent}
            required
            onChange={(e) => setParent(e.target.value)}
          />
          <Input
            label={"Номер мобильного телефона родителя"}
            type="tel"
            value={tel}
            required
            onChange={(e) => setTel(e.target.value)}
          />
          <Input
            label={"Адрес электронной почты родителя"}
            value={parentEmail}
            required
            onChange={(e) => setParentEmail(e.target.value)}
          />
          <Input
            label={"ФИО ребенка"}
            required
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
          <div className={styles.selectWrapper}>
            <span>Язык обучения в текущей школе:</span>
            {languages.map((l) => (
              <Radio
                key={l}
                label={l}
                checked={lang === l}
                value={l}
                onChange={(e) => setLang(e.target.value)}
              />
            ))}
          </div>
          <Input
            label={"Дата рождения ребенка"}
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Input
            label={
              "В какой школе ребёнок обучается сейчас? (Укажите название и город)"
            }
            required
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div className={styles.formRight}>
          <div className={styles.selectWrapper}>
            <span>В какой класс поступает ребенок?</span>
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
            <span>Как Вы узнали о нас?</span>
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
            label={"Прикрепите файлы проектов, олимпиад"}
            type="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      {error && <span className="error">{error}</span>}
      {notification && <span className="success">{notification}</span>}
      <Button disabled={loading} type="submit" variant={"primary"}>
        {loading ? "Oтправляем" : "Отправить"}
      </Button>
    </form>
  );
};
