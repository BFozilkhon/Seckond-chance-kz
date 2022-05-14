import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  padding: 0px 80px;
  position: relative;
`;

export const Flexing = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #141414;
`;

// Swiper
export const Swipers = styled(Swiper)`
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    left: auto;
    right: 80px;
    z-index: 999;
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 0px;
    z-index: 999;
  }
`;

// Card
export const Card = styled.div`
  width: 400px;
  height: 500px;
`;

Card.Img = styled.img`
  height: 70%;
  width: 100%;
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
  margin: 15px 0px 10px 0px;
`;

Card.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #807b86;
`;
