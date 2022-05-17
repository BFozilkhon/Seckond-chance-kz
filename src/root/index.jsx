import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavbarDashboard from "../component/Dashboard/NavbarDashboard";
import Navbar from "../component/Navbar";
import { dashboardData } from "../utils/dashboard";
import { navbarData } from "../utils/navbar";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {navbarData?.map(({ id, path, element, child }) => {
          return (
            <Route key={id} path={path} element={element}>
              {child.map((item) => {
                return (
                  <Route
                    key={item.id}
                    path={item.path}
                    element={item.element}
                  />
                );
              })}
            </Route>
          );
        })}
      </Route>

      <Route path="/dashboard" element={<NavbarDashboard />}>
        {dashboardData.map(({ id, path, element }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Route>

      <Route path="/" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default Root;
