import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as arrow } from "../../../../assets/icons/arrow.svg";

export const Container = styled.div``;

export const LinksFlex = styled(Link)`
  display: flex;
  align-items: center;
`;

LinksFlex.Arrow = styled(arrow)``;

LinksFlex.Links = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #7f1aff;
  margin-left: 16px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: #141414;
  margin: 19px 0px 32px 0px;
`;

export const WrapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 280px);
  grid-gap: 24px;
`;

export const Box = styled.div`
  background-color: white;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 28px 24px 14px 24px;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  margin-bottom: 20px;
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #666c72;
`;

Box.Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #1a1c1f;
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #666c72;
`;

Box.Price = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 35px;
  color: #7f1aff;
  margin: 12px 0px 22px 0px;
`;

Box.Btn = styled.div`
  background: #eee8f9;
  border-radius: 6px;
  width: 180px;
  height: 52px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #7c7a7d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
  margin-top: 30px;
`;

export const Flexing = styled.div`
  display: flex;
`;

Flexing.Img = styled.img`
  width: 100px;
  height: 120px;
  margin-right: 20px;
`;

Flexing.LightText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #7c7a7d;
  margin-bottom: 5px;
`;

Flexing.DarkText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #141414;
  margin-bottom: ${({ first }) => first && "15px"};
`;
