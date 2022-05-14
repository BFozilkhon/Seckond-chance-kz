import React from "react";
import AnyProduct from "./AnyProduct";
import Description from "./Description";
import { Container } from "./style";

export const Shop = () => {
  return (
    <Container>
      <Description />
      <AnyProduct />
    </Container>
  );
};

export default Shop;
