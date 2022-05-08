import React from "react";
import { Box } from "./style";

export const CardGeneric = ({ data }) => {
  return (
    <Box key={data?.id}>
      <Box.Img src={data?.img} alt="kategory" />
      <Box.Title>{data?.title}</Box.Title>
      <Box.TitleLight>{data?.titleLight}</Box.TitleLight>
      <Box.Price>{data?.price}</Box.Price>
      <Box.Discount>{data?.discount}</Box.Discount>
    </Box>
  );
};
export default CardGeneric;
