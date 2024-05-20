import { useTranslation } from "react-i18next";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
import { Section } from "../Section/Section";
import styles from "./Partners.module.css";
const logos = [
  { image: "/partners/astanahub.svg", name: "ASTANA HUB" },
  { image: "/partners/drweb.png", name: "Dr.WEB" },
  { image: "/partners/google.webp", name: "GOOGLE DEVELOPERS GROUP" },
  { image: "/partners/huawei.svg", name: "HUAWEI" },
  { image: "/partners/tgarden.png", name: "TechGarden" },
  { image: "/partners/sl.png", name: "SpaceLab" },
  { image: "/partners/kazrobotic.png", name: "KAZRobotics" },
  { image: "/partners/qazin.svg", name: "QAZINNOVATION" },
  {
    image: "/partners/sportprog.webp",
    name: "FEDERATION OF SPORT PROGRAMMING",
  },
  {
    image: "/partners/obr.webp",
    name: "partners.obr",
  },
];

export const Partners = () => {
  const { t } = useTranslation();
  return (
    <Section fullHeight className={styles.slider}>
      <AnimatedTitle text={"supports"} />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={40}
        slidesPerView={3}
        modules={[Autoplay]}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide className={styles.slide} key={idx}>
            <div className={styles.logo}>
              <img src={logo.image} alt="logo.name" loading="lazy" />
            </div>
            <span>{idx == logos.length - 1 ? t(logo.name) : logo.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
