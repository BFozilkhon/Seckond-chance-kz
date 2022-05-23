import React from "react";
import EmailModal from "./Email";
import {
  Box,
  Container,
  InputCon,
  InputWrap,
  WrapGrid,
  Items,
  Div,
} from "./style";
import SuccessModal from "./Success";
import UnicPasswordModal from "./UnicPassword";

export const Settings = () => {
  return (
    <Container>
      <Container.Header>Магазин</Container.Header>
      <WrapGrid>
        <Box names="first">
          <Box.Title>Данные магазина</Box.Title>
          {/* Input*/}
          <InputWrap>
            <InputWrap.Boxing>
              <Items>Название магазина</Items>
              <InputCon>
                <InputCon.Icons1 />
                <InputCon.Input type="text" placeholder="Ekinshi" />
              </InputCon>
            </InputWrap.Boxing>
            <InputWrap.Boxing>
              <Items>Контактный номер</Items>
              <InputCon>
                <InputCon.Icons2 />
                <InputCon.Input type="text" placeholder="+7 (708) 369 09 15" />
              </InputCon>
            </InputWrap.Boxing>
            <InputWrap.Boxing>
              <Items>Адрес в Алматы</Items>
              <InputCon>
                <InputCon.Icons3 />
                <InputCon.Input type="text" placeholder="Байтурсынова 56, Г" />
              </InputCon>
            </InputWrap.Boxing>
            <InputWrap.Boxing>
              <Items>Ссылка на соц: сет (не обязательно)</Items>
              <InputCon>
                <InputCon.Icons4 />
                <InputCon.Input type="text" placeholder="Вставьте ссылку" />
              </InputCon>
            </InputWrap.Boxing>
          </InputWrap>
        </Box>
        <Box names="second">
          <Box.Title>Фотография (или логотип) магазина</Box.Title>
        </Box>
        <Box names="third">
          <Box.Title>Изменить пароль</Box.Title>
          <Box.Wrapper>
            {/* first */}
            <Div>
              <Items>Текущий пароль</Items>
              <InputCon>
                <InputCon.Icons4 />
                <InputCon.Input type="text" placeholder="Вставьте ссылку" />
              </InputCon>
            </Div>
            {/* second */}
            <Div>
              <Items>Текущий пароль</Items>
              <InputCon>
                <InputCon.Icons4 />
                <InputCon.Input type="text" placeholder="Вставьте ссылку" />
              </InputCon>
            </Div>
            {/* third */}
            <Div>
              <Items>Текущий пароль</Items>
              <InputCon>
                <InputCon.Icons4 />
                <InputCon.Input type="text" placeholder="Вставьте ссылку" />
              </InputCon>
            </Div>
            <Container.BtnInput>Cохранить</Container.BtnInput>
          </Box.Wrapper>
        </Box>
      </WrapGrid>
      <Container.Item>
        Вы зарегистрированы на почту{" "}
        <Container.Link>ekinshi.shop@gmail.com</Container.Link>
      </Container.Item>
      <Container.Btn>Изменить почту</Container.Btn>
      <SuccessModal />
      <EmailModal />
      <UnicPasswordModal />
    </Container>
  );
};

export default Settings;
