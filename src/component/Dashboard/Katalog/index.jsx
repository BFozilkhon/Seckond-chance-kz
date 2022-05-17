import React from "react";
import { Container, Flexing } from "./style";

export const Katalog = () => {
  return (
    <Container>
      <Container.Wrap>
        <Container.Img1 />
        <Container.Title>У вас еще нет товаров</Container.Title>
        <Container.Text>
          Добавьте новые товары и отправьте их на продажу
        </Container.Text>
        <Flexing>
          <Flexing.Btn>Стандартный товар</Flexing.Btn>
          <Flexing.Btn>Аукионный товар</Flexing.Btn>
        </Flexing>
      </Container.Wrap>
    </Container>
  );
};

export default Katalog;
