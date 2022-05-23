import { Modal, Table } from "antd";
import styled from "styled-components";
import { ReactComponent as eye } from "../../../../../assets/icons/eye.svg";
import { ReactComponent as edit } from "../../../../../assets/icons/edit.svg";
import { ReactComponent as deletes } from "../../../../../assets/icons/delete.svg";

export const ItemNomer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff7a1a;
`;

export const Default = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #141414;
`;

export const Link = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #7f1aff;
  cursor: pointer;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Eye = styled(eye)`
  margin: 0px 5px;
  cursor: pointer;
`;
Flexing.Edit = styled(edit)`
  margin: 0px 5px;
  cursor: pointer;
`;
Flexing.Deletes = styled(deletes)`
  margin: 0px 5px;
  cursor: pointer;
`;

// Table

export const Tables = styled(Table)`
  .ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
    .ant-select-selector {
    background-color: #fff5ed;
    border: none !important;
  }
  .ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
    .ant-select-selector {
    background-color: #eefbf0;
    border: none !important;
  }

  .ant-table-thead > tr > th {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7c7a7d;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    transform: scale(0);
  }

  .ant-select-status-error.ant-select-single.ant-select-show-arrow
    .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: #ff7a1a;
  }

  .ant-select-status-warning.ant-select-single.ant-select-show-arrow
    .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: #53d160;
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
  line-height: 30px;
  color: #141414;
  width: 90%;
`;

Modals.Btn = styled.div`
  margin: 24px 0px;
  background: ${({ cancel }) => (cancel ? "#7f1aff" : "white")};
  color: ${({ cancel }) => (cancel ? "white" : "#7f1aff")};
  border: ${({ cancel }) => !cancel && "1px solid #7f1aff"};
  margin-left: ${({ cancel }) => cancel && "16px"};
  height: 55px;
  width: 50%;
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
