import styled from "styled-components";
import img1 from "../../../assets/imgs/dress1.png";
import { ReactComponent as tick } from "../../../assets/icons/tick.svg";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 30px 0px 100px 0px;
  padding: 0px 80px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
`;

export const Wrap = styled.div`
  display: flex;
  margin: 30px 0px;
`;

export const Card = styled.div`
  background: #ffffff;
  height: 220px;
  padding: 16px;
  display: flex;
  width: 80%;
`;

Card.Img = styled.div`
  background-image: url(${img1});
  background-size: 100% 100%;
  width: 140px;
  height: 100%;
  margin-right: 30px;
`;

Card.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
`;

Card.Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin: 10px 0px 20px 0px;
`;

Card.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #807b86;
  margin: 10px 0px;
`;

Card.Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: black;
  margin-left: 10px;
`;

// second Box
export const Box = styled.div`
  width: 302px;
  background-color: white;
  padding: 16px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
`;

Box.Flexing = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0px;
`;

Box.LightText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #807b86;
`;

Box.BoldText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #141414;
`;

Box.Btn = styled.div`
  width: 100%;
  height: 50px;
  background: #7f1aff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

export const QuoteCon = styled.div`
  width: 80%;
  background-color: white;
  padding: 16px;
`;

QuoteCon.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  margin-bottom: 20px;
`;

export const Divs = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  justify-content: space-between;
`;

Divs.Lable = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #807b86;
  margin-bottom: 10px;
`;

Divs.Input = styled.input`
  width: ${({ small }) => (small ? "120px" : "300px")};
  height: 52px;
  background: #ffffff;
  border: 1px solid #cccbda;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #141414;
  padding: 15px 12px;
  outline: none;
`;

Divs.Slesh = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #807b86;
  margin: 0px 6px;
`;

// Modal
export const Modals = styled(Modal)`
  .ant-modal-body {
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ant-modal-footer {
    display: none;
  }
`;

Modals.Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Modals.Tick = styled(tick)``;

Modals.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
  margin: 24px 0px 10px 0px;
`;

Modals.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #141414;
  text-align: center;
`;

Modals.Btn = styled.div`
  background: #7f1aff;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
  margin: 24px 0px;
  :active {
    transform: scale(0.98);
  }
`;

Modals.LinkText = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #7f1aff;
`;
