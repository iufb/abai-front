import { useTranslation } from "react-i18next";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Partners.module.css";
const logos = [
  "/partners/astanahub.svg",
  "/partners/drweb.png",
  "/partners/google.jpg",
  "/partners/huawei.svg",
  "/partners/tgarden.png",
  "/partners/sl.png",
  "/partners/kazrobotic.png",
  "/partners/qazin.svg",
  "/partners/sportprog.jpg",
];
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
