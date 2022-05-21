import { TableHome } from "./Table";
import React from "react";
import { Container, Flexing, MiniBox, WrapGrid } from "./style";

export const LatestOrders = () => {
  return (
    <Container>
      <Container.Header>Добро пожаловать, Shopname</Container.Header>
      <Container.Text>
        Здесь вы можете пополнять и редактировать каталог, управлять заказами и
        данными магазина
      </Container.Text>

      <WrapGrid>
        <MiniBox name="first">
          <MiniBox.Circle circle="#7F1AFF">
            <MiniBox.Icons1 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>456</MiniBox.Title>
            <MiniBox.Item>Покупателей</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="second">
          <MiniBox.Circle circle="#FF7A1A">
            <MiniBox.Icons2 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>112 900 ₸</MiniBox.Title>
            <MiniBox.Item>Заработано за месяц</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="third">
          <MiniBox.Circle circle="#53D160">
            <MiniBox.Icons3 color="#53D160" />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>23</MiniBox.Title>
            <MiniBox.Item>заказов за месяц</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="four">
          <MiniBox.Circle circle="#5C61F4">
            <MiniBox.Icons3 color="#5C61F4" />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>156</MiniBox.Title>
            <MiniBox.Item>товаров в каталоге</MiniBox.Item>
          </div>
        </MiniBox>
      </WrapGrid>
      <Flexing>
        <Flexing.Title>Последние заказы</Flexing.Title>
        <Flexing.Links>Смотреть все</Flexing.Links>
      </Flexing>
      <TableHome />
    </Container>
  );
};

export default LatestOrders;
