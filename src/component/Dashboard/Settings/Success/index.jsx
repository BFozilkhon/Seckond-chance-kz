import React from "react";
import { Modals } from "./style";

export const SuccessModal = () => {
  return (
    <Modals centered visible={false}>
      <Modals.Circle>
        <Modals.Tick />
      </Modals.Circle>
      <Modals.Title>Вы успешно изменили пароль</Modals.Title>
    </Modals>
  );
};

export default SuccessModal;
