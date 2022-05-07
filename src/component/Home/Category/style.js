import styled from "styled-components";

export const Container = styled.div`
  padding: 80px;
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
  width: 31%;
  height: 500px;
`;

Wrap.Img = styled.img`
  width: 100%;
  height: 80%;
`;

Wrap.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #141414;
  margin-top: 16px;
`;
