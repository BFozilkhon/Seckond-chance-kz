import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, NavItems, Wrap } from "./style";
import { SidebarDashboard } from "../SidebarDashboard";
export const NavbarDashboard = () => {
  return (
    <>
      <Container>
        <Link to={"/"}>
          <Container.Logo>2ndChance.kz</Container.Logo>
        </Link>
        <NavItems>
          <NavItems.Notlification />
          <NavItems.LogOut />
        </NavItems>
      </Container>

      {/* Wrap */}
      <Wrap>
        <SidebarDashboard />
        <div style={{ padding: "24px 42px", width: "100%" }}>
          <Outlet />
        </div>
      </Wrap>
    </>
  );
};
export default NavbarDashboard;
