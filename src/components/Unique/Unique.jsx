import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "../Section/Section";
import { Text } from "../Text/Text";
import styles from "./Unique.module.css";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Unique = () => {
  const { t } = useTranslation();
  return (
    <Section className={styles.wrapper}>
      <Text tag="h1" variant={"title"}>
        {t("unique.title")}
      </Text>
      <InViewContainer>
        <Text
          className={styles.title}
          tag="h1"
          color="secondary"
          variant={"subtitle"}
        >
          {t("unique.about.title")}
        </Text>
        <Text tag="h1" color="primary" variant={"p"}>
          {t("unique.about.body")}
        </Text>
      </InViewContainer>
      <Text tag="h2" color="secondary" variant={"subtitle"}>
        {t("unique.inProgram.title")}
      </Text>
      <ProgramsSlider t={t} />
      <InViewContainer>
        <section className={styles.hint}>
          <Text tag="h2" color="primary" variant={"subtitle"}>
            {t("unique.inProgram.and.1")}
          </Text>
        </section>
        <section className={styles.hint}>
          <Text tag="h2" color="primary" variant={"subtitle"}>
            {t("unique.inProgram.and.2")}
          </Text>
        </section>
        <section className={styles.hint}>
          <Text tag="h2" color="primary" variant={"subtitle"}>
            {t("unique.inProgram.and.3")}
          </Text>
        </section>
      </InViewContainer>
    </Section>
  );
};

const ProgramsSlider = ({ t }) => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "var(--color-primary)",
        margin: "20px 0",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        // desktop >= 991
        991: {
          slidesPerView: 3,
        },
      }}
      className={styles.slider}
    >
      {t("unique.inProgram.content", { returnObjects: true }).map((c, idx) => (
        <SwiperSlide className={styles.slide} key={idx}>
          <Text
            className={styles.end}
            tag="span"
            color="secondary"
            variant={"subtitle"}
          >
            <span className={styles.idx}>{idx + 1}.</span>
            {c.highlight}
          </Text>
          {c.body}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
const InViewContainer = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.7, 1],
    ["0%", "20%", "-10%", "-10%"],
  );
  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ",
        y,
        margin: "0 0 30px 0",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {children}
    </motion.div>
  );
};
