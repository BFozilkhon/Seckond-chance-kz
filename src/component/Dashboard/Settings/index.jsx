import React from "react";
import { Box, Container, WrapGrid } from "./style";

export const Settings = () => {
  return (
    <Container>
      <Container.Header>Магазин</Container.Header>
      <WrapGrid>
        <Box names="first">
          <Box.Title>Данные магазина</Box.Title>
        </Box>
        <Box names="second">
          <Box.Title>Фотография (или логотип) магазина</Box.Title>
        </Box>
        <Box names="third">
          <Box.Title>Изменить пароль</Box.Title>
        </Box>
      </WrapGrid>
      <Container.Item>
        Вы зарегистрированы на почту{" "}
        <Container.Link>ekinshi.shop@gmail.com</Container.Link>
      </Container.Item>
      <Container.Btn>Изменить почту</Container.Btn>
    </Container>
  );
};

export default Settings;
