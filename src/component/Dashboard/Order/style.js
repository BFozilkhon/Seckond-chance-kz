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
