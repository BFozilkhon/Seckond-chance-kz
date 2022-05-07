import React from "react";
import Category from "./Category";
import Discount from "./Discount";
import Opener from "./Opener";
import Product from "./Product";

export const Home = () => {
  return (
    <>
      <Opener />
      <Category />
      <Discount />
      <Product />
    </>
  );
};

export default Home;
