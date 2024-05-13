import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";

import styles from "./Faces.module.css";
const images = [
  "/faces/1.webp",
  "/faces/2.webp",
  "/faces/3.webp",
  // "/faces/4.webp",
  "/faces/5.webp",
  "/faces/6.webp",
  "/faces/7.webp",
  "/faces/8.webp",
  "/faces/9.webp",
];

export const Faces = () => {
  const { t } = useTranslation();
  return (
    <Section fullHeight>
      <Text tag="h1" variant={"title"}>
        {t("faces.title")}
      </Text>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        style={{
          "--swiper-pagination-color": "var(--color-primary)",
          "--swiper-navigation-color": "var(--color-primary)",
        }}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination, Navigation]}
        className={styles.slider}
      >
        {new Array(8).fill(".").map((_, idx) => (
          <SwiperSlide className={styles.slide} key={idx}>
            <img src={images[idx]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
