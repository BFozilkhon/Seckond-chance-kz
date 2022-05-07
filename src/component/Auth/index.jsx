import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

export const Auth = () => {
  return (
    <Container>
      <Container.Flexing>
        <Container.Btn to={"/auth/register"}>Регистрация</Container.Btn>
        <Container.Btn to={"logout"}>Вход</Container.Btn>
      </Container.Flexing>
      <Outlet />
    </Container>
  );
};

export default Auth;
