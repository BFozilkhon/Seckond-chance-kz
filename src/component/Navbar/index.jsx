import React from "react";
import { Link, Outlet } from "react-router-dom";
import { navbarData } from "../../utils/navbar";
import { Container, Div, DivInput, Flexing, Selects, Wrap } from "./style";

export const Navbar = () => {
  const { Option } = Selects;
  return (
    <>
      <Container>
        <Link to={"/home"}>
          <Container.Logo>2ndChance.kz</Container.Logo>
        </Link>
        {/* Wrap */}
        <Div>
          <Wrap>
            <DivInput>
              <DivInput.Search />
              <DivInput.Input />
            </DivInput>
            {/* Select */}
            <Selects
              showSearch
              placeholder="Search to Select"
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
              <Option value="1">Алматы</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Selects>
            {/* profil */}
            <Flexing>
              <Flexing.User />
              <Flexing.Name>Войти</Flexing.Name>
            </Flexing>
          </Wrap>
          {/* 2section */}
          <Wrap items>
            {navbarData.map(({ id, title, hidden, path }) => {
              return (
                !hidden && (
                  <Link to={path}>
                    <Wrap.Items key={id}>{title}</Wrap.Items>
                  </Link>
                )
              );
            })}
          </Wrap>
        </Div>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
