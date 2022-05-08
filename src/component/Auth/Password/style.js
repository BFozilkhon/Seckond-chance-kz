import styled from "styled-components";
import { ReactComponent as password } from "../../../assets/icons/password.svg";

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  background-color: white;
  margin-top: 30px;
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #807b86;
  margin: 8px 0px 32px 0px;
`;

Container.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cccbda;
  height: 48px;
  margin: 10px 0px 0px 0px;
  margin-bottom: ${({ first }) => first && "40px"};
`;

Div.IconCon = styled.div`
  width: 60px;
  height: 100%;
  border-right: 1px solid #cccbda;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Div.Icons = styled(password)``;

Div.Input = styled.input`
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #807b86;
  padding: 15px 12px;
  width: 100%;
  height: 0px;
`;

//li
export const Ul = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

Ul.Li = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #807b86;
`;

Container.Btn = styled.div`
  background: #7f1aff;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  opacity: ${({ active }) => (active === true ? "1" : "0.3")};
  cursor: ${({ active }) => (active === true ? "pointer" : "no-drop")};
  :active {
    transform: ${({ active }) => (active ? "scale(0.96)" : "scale(1)")};
  }
`;
