import { useTranslation } from "react-i18next";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Partners.module.css";
const logos = [
  { image: "/partners/astanahub.svg", name: "ASTANA HUB" },
  { image: "/partners/drweb.png", name: "Dr.WEB" },
  { image: "/partners/google.jpg", name: "GOOGLE DEVELOPERS GROUP" },
  { image: "/partners/huawei.svg", name: "HUAWEI" },
  { image: "/partners/tgarden.png", name: "TechGarden" },
  { image: "/partners/sl.png", name: "SpaceLab" },
  { image: "/partners/kazrobotic.png", name: "KAZRobotics" },
  { image: "/partners/qazin.svg", name: "QAZINNOVATION" },
  { image: "/partners/sportprog.jpg", name: "FEDERATION OF SPORT PROGRAMMING" },
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
          <SwiperSlide className={styles.slide} key={idx}>
            <div className={styles.logo}>
              <img src={logo.image} />
            </div>
            <span>{logo.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
