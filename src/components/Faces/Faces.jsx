import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";

export const Faces = () => {
  const { t } = useTranslation();
  return (
    <Section full>
      <Text tag="h1" variant={"title"}>
        {t("faces.title")}
      </Text>
    </Section>
  );
};
