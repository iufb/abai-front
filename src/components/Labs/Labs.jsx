import { useTranslation } from "react-i18next";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelectedLang } from "../../utils";
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
    images: {
      ru: "/labs/ru/robots.webp",
      kz: "/labs/kz/robots.webp",
    },
  },
  {
    title: "labs.game.title",
    body: "labs.game.body",
    images: {
      ru: "/labs/ru/games.webp",
      kz: "/labs/kz/games.webp",
    },
  },
  {
    title: "labs.3d.title",
    body: "labs.3d.body",
    images: {
      ru: "/labs/ru/3d.webp",
      kz: "/labs/ru/3d.webp",
    },
  },
  {
    title: "labs.vr.title",
    body: "labs.vr.body",
    images: {
      ru: "/labs/ru/meta.webp",
      kz: "/labs/kz/meta.webp",
    },
  },
  {
    title: "labs.huawei.title",
    body: "labs.huawei.body",
    images: {
      ru: "/labs/ru/HUAWEI.webp",
      kz: "/labs/kz/HUAWEI.webp",
    },
  },
  {
    title: "labs.web.title",
    body: "labs.web.body",
    images: {
      ru: "",
      kz: "",
    },
  },
  {
    title: "labs.ai.title",
    body: "labs.ai.body",
    images: {
      ru: "/labs/ru/AI-ALEMI.webp",
      kz: "/labs/kz/AI-ALEMI.webp",
    },
  },
  {
    title: "labs.start.title",
    body: "labs.start.body",
    images: {
      ru: "/labs/ru/ABAI-START.webp",
      kz: "/labs/kz/ABAI-START.webp",
    },
  },
  {
    title: "labs.sport.title",
    body: "labs.sport.body",
    images: {
      ru: "/labs/ru/ABAI-IT-SPORT.webp",
      kz: "/labs/kz/ABAI-IT-SPORT.webp",
    },
  },
  {
    title: "labs.design.title",
    body: "labs.design.body",
    images: {
      ru: "/labs/ru/DESIGN.webp",
      kz: "/labs/kz/DESIGN.webp",
    },
  },
];
const MainSlider = ({ t }) => {
  const { lang } = useSelectedLang();
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
              <img
                src={lang ? lab.images.kz : lab.images.ru}
                alt={`${lab.title}`}
              />
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
