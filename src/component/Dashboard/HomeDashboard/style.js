import styled from "styled-components";
// icons
import { ReactComponent as user } from "../../../assets/icons/user-dash.svg";
import { ReactComponent as work } from "../../../assets/icons/work.svg";
import { ReactComponent as bag } from "../../../assets/icons/bag-dash.svg";
import { ReactComponent as img1 } from "../../../assets/icons/dash-home1.svg";
import { ReactComponent as img2 } from "../../../assets/icons/dash-home2.svg";

export const Container = styled.div``;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
`;

Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #7c7a7d;
  margin-top: 20px;
  width: 32%;
`;

export const WrapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 130px 250px;
  grid-gap: 30px;
  grid-template-areas: "first second third four" "five five six six";
  margin-top: 32px;
`;

//MiniBox
export const MiniBox = styled.div`
  padding: 20px 24px;
  background-color: white;
  border-radius: 6px;
  grid-area: ${({ name }) => name};
  display: flex;
  align-items: center;
`;

MiniBox.Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #c0bbca;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

MiniBox.Icons1 = styled(user)``;
MiniBox.Icons2 = styled(work)``;
MiniBox.Icons3 = styled(bag)``;

MiniBox.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
`;

MiniBox.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7a7d;
  margin-top: 8px;
`;

// BigBox
export const BigBox = styled.div`
  padding: 26px 10px 10px 33px;
  background-color: white;
  border-radius: 6px;
  grid-area: ${({ names }) => names};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

BigBox.Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

BigBox.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: #141414;
`;

BigBox.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #7c7a7d;
  width: ${({ long }) => (long ? "100%" : "63%")};
`;

BigBox.Btn = styled.div`
  background: #7f1aff;
  border-radius: 6px;
  width: 200px;
  height: 43px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

BigBox.Img1 = styled(img1)`
  width: 250px;
  height: 100%;
`;
BigBox.Img2 = styled(img2)``;
