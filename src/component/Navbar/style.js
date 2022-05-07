import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { Select } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px 28px 80px;
  background-color: white;
  width: 100%;
`;

Container.Logo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #7f1aff;
`;

// Wrap
export const Div = styled.div`
  width: 55%;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ items }) => (items ? "80%" : "100%")};
  margin-left: auto;
  margin-top: ${({ items }) => items && "28px"};
`;

export const DivInput = styled.div`
  background: #ffffff;
  border: 1px solid #cccbda;
  padding: 17px;
  width: 53%;
  height: 48px;
  display: flex;
  align-items: center;
`;

DivInput.Search = styled(search)``;

DivInput.Input = styled.input`
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #141414;
  padding-left: 10px;
`;

export const Selects = styled(Select)`
  .ant-select-selector {
    background: white;
    border: 1px solid #cccbda;
    padding: 17px;
    width: 280px !important;
    height: 48px !important;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #141414;
  }
  .ant-select-selection-search-input {
    margin-top: 8px !important;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

Flexing.User = styled(user)``;

Flexing.Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #141414;
  margin-left: 8px;
`;

// 2section items
Wrap.Items = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
`;
