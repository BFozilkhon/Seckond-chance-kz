import React, { useRef, useState } from "react";
import { Modals, Div } from "./style";

export const UnicPasswordModal = () => {
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  return (
    <Modals centered visible={false}>
      <Modals.Title>Подтвердите почту</Modals.Title>
      <Modals.Text>
        Мы отправили 6-ти значный код подтверждения на почту
        second.ekinshi@gmail.com. Введите его
      </Modals.Text>
      {/* input */}
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
      <Modals.Btn active={true}>Продолжить</Modals.Btn>
    </Modals>
  );
};

export default UnicPasswordModal;
