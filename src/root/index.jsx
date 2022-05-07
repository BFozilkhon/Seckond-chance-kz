import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { navbarData } from "../utils/navbar";

const Root = () => {
  return (
    <Routes>
      {navbarData?.map(({ id, path, element, child }) => {
        return (
          <Route key={id} path={path} element={element}>
            {child.map((item) => {
              return (
                <Route key={item.id} path={item.path} element={item.element} />
              );
            })}
          </Route>
        );
      })}

      <Route path="/" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default Root;
