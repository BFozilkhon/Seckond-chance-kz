import styled from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 500px;
  margin: 30px 0px;
`;

Box.Img = styled.img`
  width: 100%;
  height: 80%;
`;

Box.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
  margin: 16px 0px 4px 0px;
`;

Box.TitleLight = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #807b86;
  margin-bottom: 16px;
`;

Box.Price = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
`;

Box.Discount = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #807b86;
  margin-left: 16px;
`;
