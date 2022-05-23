import { Modal, Select } from "antd";
import styled from "styled-components";
import { ReactComponent as backArrow } from "../../../../assets/icons/back.svg";

export const Container = styled.div`
  .ant-select {
    width: 100%;
  }

  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    width: 100%;
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

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ btn }) => btn && "24px"};
`;

Flexing.Arrow = styled(backArrow)``;

Flexing.Links = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #7f1aff;
  margin-left: 16px;
`;

Container.Header = styled.div`
  margin: 19px 0px 24px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
`;

export const WrapGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 300px 300px;
  grid-gap: 30px;
`;

export const Box = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 24px;
`;

export const BoxFirst = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 12px;
`;

export const InputWrapper = styled.div`
  grid-column: ${({ big }) => big && "2/3"};
  grid-row: ${({ big }) => big && "1/4"};
`;

InputWrapper.Lable = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 5px;
`;

InputWrapper.Input = styled.input`
  background: #ffffff;
  border: 1px solid #cccbda;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #807b86;
  padding: 15px 12px;
  outline: none;
  width: 100%;
`;

export const Selects = styled(Select)`
  .ant-select {
    width: 100%;
  }

  .ant-select-selector {
    background: white;
    border: 1px solid #cccbda;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #807b86;
    padding: 15px 12px;
    outline: none;
    width: 100%;
    height: 55px;
    background-color: red;
  }

  .ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    margin-top: 12px;
  }
`;

InputWrapper.TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #cccbda;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #807b86;
  padding: 15px 12px;
  outline: none;
  width: 100%;
  height: 90%;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
  margin: 16px 0px 6px 0px;
`;

Container.BtnInput = styled.div`
  background: #ffffff;
  border: ${({ on }) => (on ? "1px solid #7f1aff" : "1px solid #c0bbca")};
  color: ${({ on }) => (on ? "#7f1aff" : "#c0bbca")};
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  width: 68px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${({ on }) => on && "12px"};
  :active {
    transform: scale(0.98);
  }
`;

Container.BtnOn = styled.div`
  background: #eee8f9;
  border-radius: 6px;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #c0bbca;
  width: 210px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

Container.BtnOff = styled.div`
  background: #ffffff;
  border: 1px solid #7f1aff;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #7f1aff;
  width: 170px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

// Modal
export const Modals = styled(Modal)`
  .ant-modal-body {
    padding: 40px 40px;
  }
  .ant-modal-footer {
    display: none;
    border-radius: 12px;
  }
`;

Modals.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #141414;
`;

Modals.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #141414;
  margin-top: 12px;
`;

Modals.Btn = styled.div`
  margin: 24px 0px;
  background: ${({ cancel }) => (cancel ? "#7f1aff" : "white")};
  color: ${({ cancel }) => (cancel ? "white" : "#7f1aff")};
  border: ${({ cancel }) => !cancel && "1px solid #7f1aff"};
  margin-left: ${({ cancel }) => cancel && "16px"};
  height: 55px;
  padding: 12px 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  white-space: nowrap;
  cursor: pointer;

  :active {
    transform: scale(0.98);
  }
`;

export const activeStyle = {
  background: "#7F1AFF",
  color: "white",
};
