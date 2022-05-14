import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
//css
import "swiper/css";
import "swiper/css/navigation";
import { Container, Card, Flexing, Swipers } from "./style";
import { marketData } from "../../../mock/market";
export const Market = () => {
  return (
    <Container>
      <Flexing>
        <Flexing.Title>Магазины</Flexing.Title>
      </Flexing>
      <Swipers
        classname="swiper"
        slidesPerView={4.4}
        spaceBetween={100}
        slidesPerGroup={1}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {marketData.map(({ id, title, text, url }) => {
          return (
            <SwiperSlide key={id}>
              <Card>
                <Card.Img src={url} alt={title} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swipers>
    </Container>
  );
};

export default Market;
