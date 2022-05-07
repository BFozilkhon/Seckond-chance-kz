import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  margin: 100px auto;
`;

Container.Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Container.Btn = styled(NavLink)`
  width: 100%;
  height: 55px;
  background: #eee8f9;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #807b86;
  display: flex;
  align-items: center;
  justify-content: center;
`;
