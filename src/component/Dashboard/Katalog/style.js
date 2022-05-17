import styled from "styled-components";
// icons
import { ReactComponent as katalogOpener } from "../../../assets/icons/katalog-dash1.svg";

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Img1 = styled(katalogOpener)``;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #141414;
  margin-top: 40px;
`;
Container.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #7c7a7d;
  margin: 12px 0px 32px 0px;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Btn = styled.div`
  background: #ffffff;
  border: 1px solid #7f1aff;
  border-radius: 6px;
  width: 232px;
  height: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #7f1aff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 8px;
  :active {
    transform: scale(0.98);
  }
`;
