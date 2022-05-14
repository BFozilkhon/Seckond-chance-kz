import React, { useState } from "react";
import { Container, Wrap, Card, Box, QuoteCon, Divs, Modals } from "./style";

export const Buy = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <Container.Header>Оформление покупки</Container.Header>
      <Wrap>
        <Card>
          <Card.Img />
          <div>
            <Card.Title>Бархатное платье с открытой спинкой</Card.Title>
            <Card.Price>6 500 ₸</Card.Price>
            <Card.Text>
              Магазин: <Card.Span>Robin.clothes</Card.Span>
            </Card.Text>
            <Card.Text>
              Адрес самовывоза:{" "}
              <Card.Span>г. Алматы, Назарбаева, 120 </Card.Span>
            </Card.Text>
          </div>
        </Card>
        <Box>
          <Box.Flexing>
            <Box.LightText>Номер заказа</Box.LightText>
            <Box.BoldText>543</Box.BoldText>
          </Box.Flexing>
          <Box.Flexing>
            <Box.LightText>Итого к оплате</Box.LightText>
            <Box.BoldText>6 500 ₸</Box.BoldText>
          </Box.Flexing>
          <Box.Btn onClick={() => setVisible(true)}>Оплатить</Box.Btn>
        </Box>
      </Wrap>
      <Wrap>
        <QuoteCon>
          <QuoteCon.Title>Оплата</QuoteCon.Title>
          <Divs>
            <div>
              <Divs.Lable>Номер карты</Divs.Lable>
              <Divs.Input type="text" />
            </div>
            <div>
              <Divs.Lable>Срок действия</Divs.Lable>
              <Divs>
                <Divs.Input type="text" small />
                <Divs.Slesh>/</Divs.Slesh>
                <Divs.Input type="text" small />
              </Divs>
            </div>
            <div>
              <Divs.Lable>ФИ владельца карты</Divs.Lable>
              <Divs.Input type="text" />
            </div>
          </Divs>
        </QuoteCon>
      </Wrap>

      {/* modal */}
      <Modals centered visible={visible} onCancel={() => setVisible(false)}>
        <Modals.Circle>
          <Modals.Tick />
        </Modals.Circle>
        <Modals.Title>Покупака оформлена</Modals.Title>
        <Modals.Text>
          Вы можете забрать товар по адресу Назарбаева, 120. Назовите номер
          заказа продавцу
        </Modals.Text>
        <Modals.Btn onClick={() => setVisible(false)}>
          Перейти к заказу
        </Modals.Btn>
        <Modals.LinkText to="/">Вернуться на главную</Modals.LinkText>
      </Modals>
    </Container>
  );
};

export default Buy;
