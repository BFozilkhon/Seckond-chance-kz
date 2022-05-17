import React from "react";
import { Container } from "./style";

export const Order = () => {
  return (
    <Container>
      <Container.Wrap>
        <Container.Img1 />
        <Container.Title>У вас еще нет заказов</Container.Title>
        <Container.Text>К вам еще не поступало новых заявок</Container.Text>
      </Container.Wrap>
    </Container>
  );
};

export default Order;
