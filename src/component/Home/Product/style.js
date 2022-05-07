import styled from "styled-components";
import img from "../../../assets/imgs/product-home.png";

export const Container = styled.div`
  padding: 80px;
`;

export const Wrap = styled.div`
  display: flex;
  background: #7f1aff;
`;

export const Box = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//items

Box.Div = styled.div`
  width: 80%;
`;

Box.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  color: #ffffff;
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  width: 60%;
  margin: 24px 0px 40px 0px;
`;

Box.Btn = styled.div`
  width: 148px;
  height: 48px;
  background: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #7f1aff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.96);
  }
`;

//imgs
Wrap.Img = styled.div`
  background-image: url(${img});
  background-size: 100% 100%;
  flex: 2;
  height: 400px;
`;
