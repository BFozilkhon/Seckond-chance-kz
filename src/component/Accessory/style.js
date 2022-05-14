import { Dropdown } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 80px;
  display: flex;
`;

export const Wrap = styled.div`
  width: 76%;
  margin-left: auto;
`;

Wrap.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  color: #141414;
`;

export const DivBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

DivBtn.Btn = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #807b86;
  padding: 15px 30px;
  cursor: pointer;
  margin: 0px 3px;
  transition: all 0.3s;
  :active {
    transform: scale(0.94);
  }
`;

export const active = {
  background: "#7f1aff",
  color: "#ffffff",
};

Wrap.Flexing = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const DivSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

DivSelect.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #141414;
`;

DivSelect.Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0px;
`;

export const Dropdowns = styled(Dropdown)`
  margin-left: ${({ first }) => (first ? "6px" : "35px")};
`;
