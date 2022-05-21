import { Table } from "antd";
import styled from "styled-components";

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
