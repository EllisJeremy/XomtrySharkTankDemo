import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.css";
import "swiper/css";

type SomeItemType = {
  title: string;
  description: string;
};

type SliderProps = {
  items: SomeItemType[];
};

const Card = ({ item }: { item: SomeItemType }) => (
  <div style={styles.cardDiv}>
    <h2>{item.title}</h2>
    <p>{item.description}</p>
  </div>
);

export default function Slider({ items }: SliderProps) {
  return (
    <Swiper slidesPerView={2}>
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Card item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
