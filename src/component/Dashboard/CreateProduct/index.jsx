import React, { useState } from "react";
import {
  Box,
  BoxFirst,
  Container,
  Flexing,
  InputWrapper,
  WrapGrid,
  Text,
  Modals,
  Selects,
} from "./style";
import { Checkbox } from "antd";
import "./style.css";

export const CreateProduct = () => {
  const [visible, setVisible] = useState(false);

  const { Option } = Selects;
  return (
    <Container>
      <Flexing>
        <Flexing.Arrow />
        <Flexing.Links>Вернуться к каталогу</Flexing.Links>
      </Flexing>

      <Container.Header>Добавить стандартный товар</Container.Header>
      {/* Grid */}
      <WrapGrid>
        <BoxFirst>
          <InputWrapper>
            <InputWrapper.Lable>Название товара</InputWrapper.Lable>
            <InputWrapper.Input type="text" placeholder="Введите" />
          </InputWrapper>
          <InputWrapper>
            <InputWrapper.Lable>Название товара</InputWrapper.Lable>
            {/* select */}
            <Selects
              showSearch
              placeholder="Введите"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Selects>
          </InputWrapper>
          <InputWrapper>
            <InputWrapper.Lable>Название товара</InputWrapper.Lable>
            {/* select */}
            <Selects
              showSearch
              placeholder="Введите"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Selects>
          </InputWrapper>
          <InputWrapper big>
            <InputWrapper.Lable>Описание</InputWrapper.Lable>
            <InputWrapper.TextArea
              type="text"
              placeholder="Введите подробное описание товара"
            />
          </InputWrapper>
        </BoxFirst>
        <Box>
          <InputWrapper>
            <InputWrapper.Lable>Название товара</InputWrapper.Lable>
            <InputWrapper.Input type="text" placeholder="Введите" />
          </InputWrapper>
          <Checkbox style={{ marginTop: "20px" }}>Товар со скидкой</Checkbox>
        </Box>
        <Box></Box>
        <Box>
          <InputWrapper>
            <Text>Название товара</Text>
            {/* select */}
            <Selects
              showSearch
              placeholder="Введите"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Selects>
          </InputWrapper>
          <InputWrapper>
            <Text>Название товара</Text>
            {/* select */}
            <Selects
              showSearch
              placeholder="Введите"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Selects>
          </InputWrapper>

          <Text>Состояние</Text>
          <Flexing>
            <Container.BtnInput on>Новый</Container.BtnInput>
            <Container.BtnInput>Б/У</Container.BtnInput>
          </Flexing>
        </Box>
      </WrapGrid>
      <Flexing btn>
        <Container.BtnOn onClick={() => setVisible(true)}>
          Сохранить
        </Container.BtnOn>
        <Container.BtnOff>Отмена</Container.BtnOff>
      </Flexing>

      {/* modal */}
      <Modals centered visible={visible} onCancel={() => setVisible(false)}>
        <Modals.Title>Отменить добавление товара?</Modals.Title>
        <Modals.Text>Введенные данные будут удалены</Modals.Text>
        <Flexing>
          <Modals.Btn onClick={() => setVisible(false)}>
            Вернуться назад
          </Modals.Btn>
          <Modals.Btn cancel onClick={() => setVisible(false)}>
            Да, отменить
          </Modals.Btn>
        </Flexing>
      </Modals>
    </Container>
  );
};

export default CreateProduct;
