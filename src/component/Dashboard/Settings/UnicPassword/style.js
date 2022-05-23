import { Modal } from "antd";
import styled from "styled-components";
import { ReactComponent as tick } from "../../../../assets/icons/tick.svg";

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
Modals.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  margin-bottom: 25px;
`;

Modals.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #141414;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  margin: 10px 0px 40px 0px;
  width: 100%;
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

Modals.Btn = styled.div`
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
  border-radius: 6px;
  opacity: ${({ active }) => (active === true ? "1" : "0.3")};
  cursor: ${({ active }) => (active === true ? "pointer" : "no-drop")};
  :active {
    transform: ${({ active }) => (active ? "scale(0.96)" : "scale(1)")};
  }
`;
