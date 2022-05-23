import { Modal } from "antd";
import styled from "styled-components";
import { ReactComponent as message } from "../../../../assets/icons/message.svg";

// Modal
export const Modals = styled(Modal)`
  .ant-modal-body {
    padding: 30px;
    width: auto;
  }
  .ant-modal-footer {
    display: none;
    border-radius: 12px;
  }
  .ant-modal-content {
    width: 400px;
    border-radius: 12px;
  }
`;

Modals.Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #53d160;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Modals.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  margin-bottom: 16px;
`;

Modals.Lable = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 6px;
`;

export const InputCon = styled.div`
  background: #ffffff;
  border: 1px solid #cfcde4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 13px;
  width: 100%;
  margin: 6px 0px 32px 0px;
`;

InputCon.Message = styled(message)``;

InputCon.Input = styled.input`
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #7c7a7d;
  margin-left: 14px;
`;

Modals.Btn = styled.div`
  background: #eee8f9;
  border-radius: 6px;
  width: 100%;
  height: 55px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #c0bbca;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

export const actives = {
  background: "#7F1AFF",
  color: "#FFFFFF",
};
