import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Div, Flexing } from "./style";

export const Verify = () => {
  const [active, setActive] = useState(true);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  return (
    <Container>
      <Flexing>
        <Flexing.Icons />
        <Flexing.Title>Введите код</Flexing.Title>
      </Flexing>
      <Container.Text>
        На вашу почту отправлен SMS-код для регистрации. Введите его.
      </Container.Text>
      {/* code verify */}
      <Div>
        <Div.Input
          onChange={() => inputRef2.current.focus()}
          type="text"
          maxLength="1"
        />
        <Div.Input
          onChange={() => inputRef3.current.focus()}
          ref={inputRef2}
          type="text"
          maxLength="1"
        />
        <Div.Input
          onChange={() => inputRef4.current.focus()}
          ref={inputRef3}
          type="text"
          maxLength="1"
        />
        <Div.Input
          onChange={() => inputRef5.current.focus()}
          ref={inputRef4}
          type="text"
          maxLength="1"
        />
        <Div.Input ref={inputRef5} type="text" maxLength="1" />
      </Div>
      <Container.Link>Отправить повторно</Container.Link>
      <Link to={"/auth/password"}>
        <Container.Btn active={active}>Далее</Container.Btn>
      </Link>
    </Container>
  );
};

export default Verify;
