import styled from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow.svg";

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  background-color: white;
  margin-top: 30px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Icons = styled(arrow)``;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
  margin-left: 12px;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #807b86;
  margin: 8px 0px 32px 0px;
  width: 90%;
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
  justify-content: space-between;
  background: #ffffff;
  margin: 10px 0px 40px 0px;
`;

Div.Input = styled.input`
  border: none;
  outline: none;
  width: 42px;
  padding: 21px 0px;
  height: 30px;
  color: red;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #141414;
  border-bottom: 1px solid #c0bbca;
`;

Container.Link = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7f1aff;
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
