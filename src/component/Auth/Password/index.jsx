import React, { useState } from "react";
import { Container, Div, Ul } from "./style";
import { message } from "antd";

export const Password = () => {
  const [active, setActive] = useState(false);

  const getPassword = (e) => {
    if (
      e.target.value.length >= 8 &&
      e.target.value.match(/[0-9]/g).length > 0
    ) {
      setActive(true);
    }
  };

  const success = () => {
    message.success("This is a success message");
  };

  return (
    <Container>
      <Container.Title>Придумайте пароль</Container.Title>
      <Container.Text>Придумайте пароль для входа.</Container.Text>
      {/* first */}
      <Container.Item>Пароль</Container.Item>
      <Div className="focused" first>
        <Div.IconCon className="right-focus">
          <Div.Icons />
        </Div.IconCon>
        <Div.Input
          type="password"
          placeholder="Введите пароль"
          onChange={getPassword}
        />
      </Div>
      {/* second */}
      <Container.Item>Повторите пароль</Container.Item>
      <Div className="focused">
        <Div.IconCon className="right-focus">
          <Div.Icons />
        </Div.IconCon>
        <Div.Input
          type="password"
          placeholder="Введите пароль повторно"
          onChange={getPassword}
        />
      </Div>
      {/* li */}
      <Ul>
        <Ul.Li>Минимум 8 символов.</Ul.Li>
        <Ul.Li>
          Должен состоять из букв латинского алфавита, арабских цифр и спец.
          символов.
        </Ul.Li>
        <Ul.Li>Должно содержать одно число.</Ul.Li>
      </Ul>
      <Container.Btn onClick={active && success} active={active}>
        Получить код
      </Container.Btn>
    </Container>
  );
};

export default Password;
