import React, { useState } from "react";
import { Container, Div } from "./style";

export const LogOut = () => {
  const [active, setActive] = useState(false);

  const getEmail = (e) => {
    if (e.target.value.includes("@gmail.com")) {
      setActive(true);
    }
  };

  return (
    <Container>
      <Container.Title>Авторизация</Container.Title>
      <Container.Text>Введите данные ниже для входа</Container.Text>

      {/* email */}
      <Container.Item>Эл. почта</Container.Item>
      <Div className="focused">
        <Div.IconCon className="right-focus">
          <Div.Icons />
        </Div.IconCon>
        <Div.Input type="email" placeholder="Введите" onChange={getEmail} />
      </Div>

      {/* password */}
      <Container.Item>Пароль</Container.Item>
      <Div className="focused">
        <Div.IconCon className="right-focus">
          <Div.Password />
        </Div.IconCon>
        <Div.Input
          type="email"
          placeholder="Введите пароль"
          onChange={getEmail}
        />
      </Div>
      <Container.Link>Забыли пароль?</Container.Link>
      <Container.Btn active={active}>Войти</Container.Btn>
    </Container>
  );
};

export default LogOut;
