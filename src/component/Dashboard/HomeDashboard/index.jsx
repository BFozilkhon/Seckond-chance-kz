import React from "react";
import { BigBox, Container, MiniBox, WrapGrid } from "./style";

export const HomeDashboard = () => {
  return (
    <Container>
      <Container.Header>Добро пожаловать, Shopname</Container.Header>
      <Container.Text>
        Здесь вы можете пополнять и редактировать каталог, управлять заказами и
        данными магазина
      </Container.Text>

      <WrapGrid>
        <MiniBox name="first">
          <MiniBox.Circle>
            <MiniBox.Icons1 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>0</MiniBox.Title>
            <MiniBox.Item>Покупателей</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="second">
          <MiniBox.Circle>
            <MiniBox.Icons2 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>0</MiniBox.Title>
            <MiniBox.Item>Заработано за месяц</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="third">
          <MiniBox.Circle>
            <MiniBox.Icons3 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>0</MiniBox.Title>
            <MiniBox.Item>заказов за месяц</MiniBox.Item>
          </div>
        </MiniBox>
        <MiniBox name="four">
          <MiniBox.Circle>
            <MiniBox.Icons3 />
          </MiniBox.Circle>
          <div>
            <MiniBox.Title>0</MiniBox.Title>
            <MiniBox.Item>товаров в каталоге</MiniBox.Item>
          </div>
        </MiniBox>
        <BigBox names="five">
          <BigBox.Div>
            <BigBox.Title>Заполните данные магазина</BigBox.Title>
            <BigBox.Text>
              Перейдите в раздел Магазин и добавьте необходимые данные
            </BigBox.Text>
            <BigBox.Btn>Перейти в Магазин</BigBox.Btn>
          </BigBox.Div>
          <BigBox.Img1 />
        </BigBox>
        <BigBox names="six">
          <BigBox.Div>
            <BigBox.Title>Добавьте товары в каталог</BigBox.Title>
            <BigBox.Text long>
              Разместите товары на сайт для пользователей
            </BigBox.Text>
            <BigBox.Btn>Добавить товар</BigBox.Btn>
          </BigBox.Div>
          <BigBox.Img2 />
        </BigBox>
      </WrapGrid>
    </Container>
  );
};

export default HomeDashboard;
