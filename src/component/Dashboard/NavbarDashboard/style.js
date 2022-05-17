import styled from "styled-components";
import { ReactComponent as notlification } from "../../../assets/icons/notlification.svg";
import { ReactComponent as logout } from "../../../assets/icons/logout.svg";

export const Container = styled.div`
  padding: 26px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

Container.Logo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #7f1aff;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

NavItems.Notlification = styled(notlification)``;

NavItems.LogOut = styled(logout)`
  margin-left: 40px;
`;

// wrap

export const Wrap = styled.div`
  display: flex;
`;
