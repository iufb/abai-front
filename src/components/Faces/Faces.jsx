import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatedTitle } from "../AnimatedTitle/AnimatedTitle";
import { Section } from "../Section/Section";

import styles from "./Faces.module.css";
const images = [
  "/ch/1.webp",
  "/ch/2.webp",
  "/ch/3.webp",
  "/ch/5.webp",
  "/ch/6.webp",
];

export const Faces = () => {
  return (
    <Section fullHeight>
      <AnimatedTitle text={"faces.title"} />
      <section className={styles.wrapper}>
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
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCube, Pagination, Navigation]}
          className={styles.slider}
        >
          {new Array(5).fill(".").map((_, idx) => (
            <SwiperSlide className={styles.slide} key={idx}>
              <img loading="lazy" src={images[idx]} alt={`face ${idx + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Section>
  );
};
