import React, { useState } from "react";
import { actives, InputCon, Modals } from "./style";

export const EmailModal = () => {
  const [active, setActive] = useState("");
  return (
    <Modals centered visible={false}>
      <Modals.Title>Введите новую почту</Modals.Title>
      <Modals.Lable>Эл. почта</Modals.Lable>
      <InputCon>
        <InputCon.Message />
        <InputCon.Input
          onChange={(e) => setActive(e.target.value)}
          type="text"
          placeholder="Введите email"
        />
      </InputCon>
      <Modals.Btn style={active.includes("@gmail.com") ? actives : {}}>
        Продолжить
      </Modals.Btn>
    </Modals>
  );
};

export default EmailModal;
