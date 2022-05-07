import React from "react";
import { Box, Container } from "./style";

export const Opener = () => {
  return (
    <Container>
      <Box>
        <Box.Img />
      </Box>
      <Box text>
        <Box.Div>
          <Box.Title>Уникальная одежда для уникальных людей</Box.Title>
          <Box.Text>
            Покупай винтажные вещи с любимых магазинов прямо на сайте
          </Box.Text>
          <Box.Btn>Начать покупки</Box.Btn>
        </Box.Div>
      </Box>
    </Container>
  );
};

export default Opener;
