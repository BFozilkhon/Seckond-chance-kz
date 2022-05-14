import { Tabs } from "antd";
import styled from "styled-components";
import { ReactComponent as location } from "../../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../../assets/icons/phone.svg";
import { ReactComponent as instagram } from "../../../assets/icons/instagram.svg";

export const Container = styled.div`
  margin: 30px 0px;
`;

Container.LocationLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7f1aff;
  margin-bottom: 20px;
`;

// Wrap
export const Wrap = styled.div`
  display: flex;
`;

Wrap.Box = styled.div`
  flex: ${({ second }) => (second ? "5" : "4")};
`;

// Imgs
export const Flexing = styled.div`
  display: flex;
`;

Flexing.MainImg = styled.img`
  height: 690px;
  width: 70%;
  margin-left: 50px;
`;

Flexing.SmallImg = styled.img`
  height: 90px;
  width: 75px;
  display: block;
  margin-bottom: 20px;
  cursor: pointer;
`;

// Content
Wrap.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
`;

Wrap.Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
  margin-top: 8px;
`;

Wrap.Btn = styled.div`
  width: 350px;
  height: 52px;
  background: #7f1aff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 32px 0px;
  :active {
    transform: scale(0.98);
  }
`;

Wrap.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #807b86;
  margin: 5px 0px;
`;

Wrap.Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;

Wrap.ConIcons = styled.div`
  margin-top: 30px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

Div.Location = styled(location)``;
Div.Phone = styled(phone)``;
Div.Instagram = styled(instagram)``;

Div.Items = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #807b86;
  margin-left: 16px;
`;

// Tab
export const DivTabs = styled(Tabs)`
  margin-top: 32px;
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #7f1aff;
  }
  .ant-tabs-tabpane {
    width: 80%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #141414;
  }

  .ant-tabs-tab {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #807b86;
  }
`;
