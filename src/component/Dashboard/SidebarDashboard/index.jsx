import React from "react";
import { NavLink } from "react-router-dom";
import { dashboardData } from "../../../utils/dashboard";
import { Container, Wrap } from "./style";

export const SidebarDashboard = () => {
  return (
    <Container>
      {dashboardData.map(({ id, title, Icons, path, hidden }) => {
        return (
          !hidden && (
            <NavLink
              className={({ isActive }) => isActive && "icons-active"}
              key={id}
              to={`/dashboard/${path}`}
            >
              <Wrap>
                <Wrap.IconsCon className="icons-container">
                  <Icons className="icons" />
                </Wrap.IconsCon>
                <Wrap.Items className="icons-items">{title}</Wrap.Items>
              </Wrap>
            </NavLink>
          )
        );
      })}
      <Wrap></Wrap>
    </Container>
  );
};

export default SidebarDashboard;
