import React, { useState } from "react";
import { Container, Div } from "./style";

export const Register = () => {
  const [active, setActive] = useState(false);

  const getEmail = (e) => {
    if (e.target.value.includes("@gmail.com")) {
      setActive(true);
    }
  };

  return (
    <Container>
      <Container.Title>Регистрация</Container.Title>
      <Container.Text>Введите эл. почту для регистрации</Container.Text>
      <Container.Item>Эл. почта</Container.Item>
      <Div className="focused">
        <Div.IconCon className='right-focus'>
          <Div.Icons />
        </Div.IconCon>
        <Div.Input type="email" placeholder="Введите" onChange={getEmail} />
      </Div>
      <Container.Btn active={active}>Получить код</Container.Btn>
    </Container>
  );
};

export default Register;
