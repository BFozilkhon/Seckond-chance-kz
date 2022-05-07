import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 80px;
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr);
  grid-template-rows: 200px;
  grid-gap: 20px;
  background-color: white;
`;

export const Box = styled.div`
  display: ${({ unic }) => unic && "flex"};
  flex-direction: column;
  justify-content: space-between;
`;

//first
Box.Logo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #7f1aff;
`;

Box.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #807b86;
  width: ${({ copy }) => !copy && "70%"};
  margin-top: ${({ copy }) => !copy && "12px"};
`;

// items, category
Box.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
`;

Box.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #141414;
  margin: 8px 0px;
`;
