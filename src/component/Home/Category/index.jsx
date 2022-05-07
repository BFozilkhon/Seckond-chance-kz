import React from "react";
import { categoryData } from "../../../mock/category";
import { Container, Wrap } from "./style";

export const Category = () => {
  return (
    <Container>
      <Container.Header>Категории</Container.Header>

      {/* Wrap */}
      <Wrap>
        {categoryData.map(({ id, item, img }) => {
          return (
            <Wrap.Box key={id}>
              <Wrap.Img src={img} alt="kategory" />
              <Wrap.Item>{item}</Wrap.Item>
            </Wrap.Box>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Category;
