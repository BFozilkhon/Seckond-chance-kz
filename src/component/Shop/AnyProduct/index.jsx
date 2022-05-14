import React from "react";
import { discountData } from "../../../mock/discount";
import CardGeneric from "../../Generic/Card";
import { Container, Wrap } from "./style";

export const AnyProduct = () => {
  return (
    <Container>
      <Container.Header>Другие предложения</Container.Header>

      {/* Wrap */}
      <Wrap>
        {discountData
          .filter((e) => e.home)
          .map((value) => {
            return <CardGeneric data={value} />;
          })}
      </Wrap>
    </Container>
  );
};

export default AnyProduct;
