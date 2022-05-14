import React from "react";
import Category from "./Category";
import Discount from "./Discount";
import Market from "./Market";
import Opener from "./Opener";
import Product from "./Product";

export const Home = () => {
  return (
    <>
      <Opener />
      <Category />
      <Discount />
      <Product />
      <Market />
    </>
  );
};

export default Home;
