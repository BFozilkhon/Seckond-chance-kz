import styled from "styled-components";
import { ReactComponent as bag } from "../../../assets/icons/bag-input.svg";
import { ReactComponent as phone } from "../../../assets/icons/phone-input.svg";
import { ReactComponent as location } from "../../../assets/icons/location-input.svg";
import { ReactComponent as instagram } from "../../../assets/icons/instagram-input.svg";

export const Container = styled.div``;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
`;

export const WrapGrid = styled.div`
  display: grid;
  margin: 24px 0px 30px 0px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 280px 200px;
  grid-gap: 30px;
  grid-template-areas: "first second" "third third";
`;

// Box
export const Box = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 5px;
  grid-area: ${({ names }) => names};
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #0f0e1e;
  margin-bottom: 16px;
`;

export const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
  width: 100%;
  height: 80%;
`;

InputWrap.Boxing = styled.div``;

export const Items = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 6px;
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cfcde4;
  border-radius: 5px;
  width: 80%;
  height: 55px;
  padding: 16px;
`;

InputCon.Icons1 = styled(bag)``;
InputCon.Icons2 = styled(phone)``;
InputCon.Icons3 = styled(location)``;
InputCon.Icons4 = styled(instagram)``;

InputCon.Input = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #141414;
  border: none;
  outline: none;
  margin-left: 16px;
`;

// Items
Container.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;

Container.Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #7f1aff;
`;

Container.Btn = styled.div`
  width: 200px;
  height: 48px;
  background: #7f1aff;
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

// third box

Box.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65%;
`;

export const Div = styled.div`
  width: 30%;
`;

Container.BtnInput = styled.div`
  background: #eee8f9;
  border-radius: 6px;
  width: 138px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #c0bbca;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
