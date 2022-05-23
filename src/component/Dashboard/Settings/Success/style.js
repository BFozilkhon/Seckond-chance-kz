import { Modal } from "antd";
import styled from "styled-components";
import { ReactComponent as tick } from "../../../../assets/icons/tick.svg";

// Modal
export const Modals = styled(Modal)`
  .ant-modal-body {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

Modals.Tick = styled(tick)``;

Modals.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #0f0e1e;
  margin-top: 25px;
`;
