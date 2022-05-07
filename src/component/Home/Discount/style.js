import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 80px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #141414;
  margin-bottom: 24px;
`;

//wrap
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Wrap.Box = styled.div`
  width: 22.5%;
  height: 500px;
`;

Wrap.Img = styled.img`
  width: 100%;
  height: 80%;
`;

Wrap.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
  margin: 16px 0px 4px 0px;
`;

Wrap.TitleLight = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #807b86;
  margin-bottom: 16px;
`;

Wrap.Price = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
`;

Wrap.Discount = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #807b86;
  margin-left: 16px;
`;
