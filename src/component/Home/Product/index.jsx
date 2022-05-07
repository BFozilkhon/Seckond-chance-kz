import React from "react";
import { Box, Container, Wrap } from "./style";

export const Product = () => {
  return (
    <Container>
      <Wrap>
        <Box>
          <Box.Div>
            <Box.Header>Аукционные товары от 500 ₸</Box.Header>
            <Box.Text>
              Участвуй в аукционе и получай лучшие товары прямо на сайте
            </Box.Text>
            <Box.Btn>Перейти</Box.Btn>
          </Box.Div>
        </Box>
        <Wrap.Img />
      </Wrap>
    </Container>
  );
};

export default Product;
