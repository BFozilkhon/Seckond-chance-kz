import React from "react";
import { footerData } from "../../mock/footer";
import { Box, Container } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Box unic>
        <div>
          <Box.Logo>2ndChance.kz</Box.Logo>
          <Box.Text>
            Покупай винтажные вещи с любимых магазинов прямо на сайте
          </Box.Text>
        </div>
        <Box.Text copy>©2022 2ndChance.kz. Все права защищены.</Box.Text>
      </Box>
      {footerData.map(({ id, title, children }) => {
        return (
          <Box key={id}>
            <Box.Title>{title}</Box.Title>
            {children?.map((e) => {
              return <Box.Item key={e.id}>{e.item}</Box.Item>;
            })}
          </Box>
        );
      })}
    </Container>
  );
};

export default Footer;
