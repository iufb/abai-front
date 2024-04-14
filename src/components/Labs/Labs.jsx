import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Labs.module.css";
export const Labs = () => {
  const { t } = useTranslation();
  return (
    <Section fullHeight>
      <Text tag={"h2"} variant={"title"}>
        {t("labs.title")}
      </Text>
      <MainSlider t={t} />
    </Section>
  );
};
const labs = [
  {
    title: "labs.robot",
    images: ["/labs/1.jpeg", "/labs/2.jpeg", "/labs/3.jpg"],
  },
  { title: "labs.game", images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"] },
  { title: "labs.3d", images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"] },
  { title: "labs.vr", images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"] },
  {
    title: "labs.huawei",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  { title: "labs.web", images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"] },
  { title: "labs.ai", images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"] },
  {
    title: "labs.start",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.sport",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.design",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
];
const MainSlider = ({ t }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "var(--color-primary)",
      }}
      modules={[Navigation]}
      centeredSlides
      speed={600}
      navigation
      slidesPerView={1}
    >
      {labs.map((lab) => (
        <SwiperSlide className={styles.slide} key={lab.title}>
          <section className={styles.slideContent}>
            <Text variant={"subtitle"} color="primary" tag={"h4"}>
              {t(lab.title)}
            </Text>
            <Images title={lab.title} imgs={lab.images} />
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Images = ({ title, imgs }) => {
  return (
    <section className={styles.images}>
      {imgs.map((image, idx) => (
        <div key={idx} className={styles.imgContainer}>
          <img src={image} alt={`${title}-${idx}`} />
        </div>
      ))}
    </section>
  );
};
