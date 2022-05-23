import { Select } from "antd";
import styled from "styled-components";
import { ReactComponent as search } from "../../../../assets/icons/search.svg";

export const Container = styled.div`
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
  }

  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    margin-top: 9px;
  }
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
  margin-bottom: 24px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px 20px 0px;
  justify-content: ${({ input }) => input && "space-between"};
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(183, 188, 204, 0.5);
  border-radius: 5px;
  width: 45%;
  padding: 10px 23px;
`;

InputCon.Search = styled(search)``;

InputCon.Input = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7a7d;
  margin-left: 13px;
`;

Container.Btn = styled.div`
  background: #ffffff;
  border: 1px solid #c0bbca;
  border-radius: 5px;
  padding: 8px 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #c0bbca;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  cursor: pointer;
  margin-left: ${({ second }) => second && "24px"};
  :active {
    transform: scale(0.98);
  }
`;

export const actives = {
  borderColor: "#7F1AFF",
  color: "#7F1AFF",
};

// Select

export const Selects = styled(Select)``;
