import styled from "styled-components";
// icons
import { ReactComponent as user } from "../../../../assets/icons/user-dash.svg";
import { ReactComponent as work } from "../../../../assets/icons/work.svg";
import { ReactComponent as bag } from "../../../../assets/icons/bag-dash.svg";

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
  grid-template-rows: 130px;
  grid-gap: 30px;
  grid-template-areas: "first second third four";
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
  border: ${({ circle }) => `2px solid ${circle}`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

MiniBox.Icons1 = styled(user)`
  path {
    stroke: #7f1aff;
  }
`;
MiniBox.Icons2 = styled(work)`
  path {
    fill: #ff7a1a;
  }
`;
MiniBox.Icons3 = styled(bag)`
  path {
    fill: ${({ color }) => color};
  }
`;

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

// Table

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0px 30px 0px;
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #141414;
`;

Flexing.Links = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #7f1aff;
`;
