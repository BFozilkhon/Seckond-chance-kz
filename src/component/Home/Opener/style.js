import styled from "styled-components";
import imgs from "../../../assets/imgs/opener.png";

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
`;

export const Box = styled.div`
  flex: 1;
  background: #7f1aff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//img
Box.Img = styled.div`
  background-image: url(${imgs});
  background-size: 100% 100%;
  height: 600px;
  width: 100%;
`;

//texts

Box.Div = styled.div`
  width: 80%;
  margin: auto;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 50px;
  color: #ffffff;
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-top: 20px;
  width: 70%;
`;

Box.Btn = styled.div`
  width: 216px;
  height: 48px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #7f1aff;
  margin-top: 48px;
  cursor: pointer;
  :active {
    transform: scale(0.96);
  }
`;
