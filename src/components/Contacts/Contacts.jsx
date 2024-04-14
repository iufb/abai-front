import { useTranslation } from "react-i18next";
import styles from "./Contacts.module.css";
import { Link } from "../Link/Link";
import { Text } from "../Text/Text";

export const Contacts = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <Text tag="h4" variant={"subtitle"} color="base">
        {t("footer.rightTitle")}
      </Text>
      <Text tag="h6" variant={"subsubtitle"} color="base">
        E-mail
      </Text>
      <Link href={"mailto:abaiitschool@gmail.com"}>abaiitschool@gmail.com</Link>
      <Text tag="h6" variant={"subsubtitle"} color="base">
        {t("footer.school")}
      </Text>
      <Link href={"tel:+7 707 150 42 00"}>+7 (707) 150 42 00</Link>
    </section>
  );
};
