import React from "react";
import { discountData } from "../../../mock/discount";
import { Container, Wrap } from "./style";

export const Discount = () => {
  return (
    <Container>
      <Container.Header>Скидки дня</Container.Header>

      {/* Wrap */}
      <Wrap>
        {discountData.map((e) => {
          return (
            <Wrap.Box key={e.id}>
              <Wrap.Img src={e.img} alt="kategory" />
              <Wrap.Title>{e.title}</Wrap.Title>
              <Wrap.TitleLight>{e.titleLight}</Wrap.TitleLight>
              <Wrap.Price>{e.price}</Wrap.Price>
              <Wrap.Discount>{e.discount}</Wrap.Discount>
            </Wrap.Box>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Discount;
