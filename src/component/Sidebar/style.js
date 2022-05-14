import { Menu } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 255px;
  height: 94vh;
  position: sticky;
  top: 10%;
  padding-top: 10px;
  margin-right: 44px;
  display: flex;
  flex-direction: column;
`;

export const Menus = styled(Menu)`
  .ant-menu-inline .ant-menu-item::after {
    border: none;
  }

  .ant-menu-title-content,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #141414;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    padding-left: 20px;
  }

  .ant-menu-sub.ant-menu-inline {
    background: none !important;
  }
`;

Menus.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #141414;
  padding-left: 40px;
  transition: all 0.5s;
  margin: 8px 0px;
  :hover {
    color: #7f1aff;
  }
`;

Container.Links = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #141414;
  padding-left: 22px;
  margin: 8px 0px;
  :hover {
    color: #7f1aff;
  }
`;
