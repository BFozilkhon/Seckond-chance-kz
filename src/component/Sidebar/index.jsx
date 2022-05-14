import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../utils/sidebar";
import { Container, Menus } from "./style";

export const Sidebar = () => {
  const { SubMenu } = Menus;
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Container>
      <Menus
        onClick={handleClick}
        style={{ width: 256, background: "none" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className="sidebar"
      >
        {sidebarData.map(({ id, title, child }) => {
          return (
            <SubMenu style={{ background: "none" }} key={id} title={title}>
              {child.map((e) => {
                return (
                  <Link key={e.id} to={e.path}>
                    <Menus.Item>{e.item}</Menus.Item>
                  </Link>
                );
              })}
            </SubMenu>
          );
        })}
      </Menus>
      <Container.Links to="/accessory">Аксессуары</Container.Links>
      <Container.Links to="/discount">Аукцион</Container.Links>
    </Container>
  );
};

export default Sidebar;
