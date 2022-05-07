import React from "react";
import Category from "./Category";
import Discount from "./Discount";
import Opener from "./Opener";

export const Home = () => {
  return (
    <div>
      <Opener />
      <Category />
      <Discount />
    </div>
  );
};

export default Home;
