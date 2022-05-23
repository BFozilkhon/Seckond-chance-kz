import React from "react";
import { useParams } from "react-router-dom";
import { homeTableData } from "../../../../mock/homeTable";
import { Container, Box, LinksFlex, WrapGrid, Flexing } from "./style";

export const ProductInfo = () => {
  const { id } = useParams();

  return (
    <>
      {homeTableData
        .filter(({ key }) => key === id.replace(":", ""))
        .map((value) => {
          return (
            <Container>
              <LinksFlex to={"/dashboard/order/table"}>
                <LinksFlex.Arrow />
                <LinksFlex.Links>Вернуться к заказам</LinksFlex.Links>
              </LinksFlex>

              <Container.Header>Заказ {value.nomer}</Container.Header>
              <WrapGrid>
                <Box>
                  <Box.Title>Информация о заказе и покупателе</Box.Title>
                  <Box.Text>
                    {"Дата поступления заказа".padEnd(71, ".")}{" "}
                    <Box.Span>12.02.2022, 12:34</Box.Span>
                  </Box.Text>
                  <Box.Text>
                    {"ФИО покупателя".padEnd(77, ".")}{" "}
                    <Box.Span>Оралова Жанель</Box.Span>
                  </Box.Text>
                  <Box.Text>
                    {"Эл. почта покупателя".padEnd(74, ".")}{" "}
                    <Box.Span>zhanel.oralova@gmai.com</Box.Span>
                  </Box.Text>
                  <Box.Text>
                    {"Срок выдачи заказа".padEnd(74, ".")}{" "}
                    <Box.Span>3 дня (до 15 февраля 2022)</Box.Span>
                  </Box.Text>
                </Box>
                <Box>
                  <Box.Item>Сумма заказа</Box.Item>
                  <Box.Price>5 990 ₸</Box.Price>
                  <Box.Item>
                    Поменяйте статус заказа на Выдан, если покупатель уже забрал
                    заказ{" "}
                  </Box.Item>
                  <Box.Btn>Оплачен</Box.Btn>
                </Box>
                <Box>
                  <Box.Title>Информация о товаре</Box.Title>
                  <Flexing>
                    <Flexing.Img src={value.url} alt="img" />
                    <div>
                      <Flexing.LightText>Название товара</Flexing.LightText>
                      <Flexing.DarkText first>{value.name}</Flexing.DarkText>
                      <Flexing.LightText>Размер товара</Flexing.LightText>
                      <Flexing.DarkText>XS - S</Flexing.DarkText>
                    </div>
                  </Flexing>
                </Box>
              </WrapGrid>
            </Container>
          );
        })}
    </>
  );
};

export default ProductInfo;
