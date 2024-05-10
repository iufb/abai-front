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
    title: "labs.robot.title",
    body: "labs.robot.body",
    images: ["/labs/1.jpeg", "/labs/2.jpeg", "/labs/3.jpg"],
  },
  {
    title: "labs.game.title",

    body: "labs.game.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.3d.title",
    body: "labs.3d.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.vr.title",
    body: "labs.vr.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.huawei.title",

    body: "labs.huawei.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.web.title",
    body: "labs.web.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.ai.title",
    body: "labs.ai.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.start.title",

    body: "labs.start.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.sport.title",

    body: "labs.sport.body",
    images: ["/labs/4.jpg", "/labs/5.jpg", "/labs/6.jpg"],
  },
  {
    title: "labs.design.title",
    body: "labs.design.body",
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
            <div className={styles.imgContainer}>
              <img src={lab.image} alt={`${title}`} />
            </div>

            <Text variant={"p"} color="primary" tag={"p"}>
              {t(lab.body)}
            </Text>
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
