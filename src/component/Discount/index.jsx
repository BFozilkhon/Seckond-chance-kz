import React, { useState } from "react";
import { active, Container, DivBtn, DivSelect, Wrap } from "./style";
import Sidebar from "../Sidebar";
import { discountData } from "../../mock/discount";
import CardGeneric from "../Generic/Card";
import { btnCategoryData } from "../../mock/btn-category";
import { Menu, Dropdown, Space, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { size } from "../../mock/selected";

export const Discount = () => {
  const [types, setTypes] = useState("product");

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const menu1 = (
    <Menu
      items={[
        {
          label: size.map(({ id, item }) => (
            <DivSelect.Flexing>
              <Checkbox key={id}>{item}</Checkbox>
            </DivSelect.Flexing>
          )),
          key: "0",
        },
      ]}
    />
  );

  return (
    <Container>
      <Sidebar />

      {/* Wrap */}
      <Wrap>
        <Wrap.Header>Платья</Wrap.Header>
        <DivBtn>
          {btnCategoryData.map(({ id, title, type }) => {
            return (
              <DivBtn.Btn
                style={types === type ? active : {}}
                onClick={() => setTypes(type)}
                key={id}
              >
                {title}
              </DivBtn.Btn>
            );
          })}
        </DivBtn>
        <DivSelect>
          {/* first */}
          <Dropdown overlay={menu1} trigger={["click"]}>
            <Space style={{ cursor: "pointer" }}>
              <DivSelect.Item>Размер</DivSelect.Item>
              <DownOutlined />
            </Space>
          </Dropdown>
          {/* second */}
          <Dropdown overlay={menu1} trigger={["click"]}>
            <Space style={{ cursor: "pointer" }}>
              <DivSelect.Item>Состояние</DivSelect.Item>
              <DownOutlined />
            </Space>
          </Dropdown>
        </DivSelect>
        <Wrap.Flexing>
          {discountData.map((value) => {
            return <CardGeneric data={value} />;
          })}
        </Wrap.Flexing>
      </Wrap>
    </Container>
  );
};
