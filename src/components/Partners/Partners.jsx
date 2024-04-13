import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import { Autoplay } from "swiper/modules";
const logos = [
  "/partners/astanahub.svg",
  "/partners/drweb.png",
  "/partners/google.png",
  "/partners/huawei.svg",
  "/partners/jusan.png",
  "/partners/kazrobotic.png",
  "/partners/qazin.svg",
  "/partners/sportprog.jpg",
  "/partners/btseduc.png",
];
import styles from "./Partners.module.css";
import { useTranslation } from "react-i18next";
export const Partners = () => {
  const { t } = useTranslation();
  return (
    <Section fullHeight className={styles.slider}>
      <Text tag={"h2"} variant={"title"}>
        {t("supports")}
      </Text>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={3}
        modules={[Autoplay]}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx} className={styles.logo}>
            <img src={logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
