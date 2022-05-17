import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 48px;
  height: max-content;
  background-color: white;

  /* active Navlink */
  .icons-active .icons-container {
    background-color: #7f1aff;
    transform-origin: left;
  }

  .icons-active .icons-items {
    color: #7f1aff;
  }

  .icons-active .icons {
    path {
      stroke: #fff;
    }
  }
`;

export const Wrap = styled.div`
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .icons {
    path {
      stroke: #c0bbca;
    }
  }

  /* hover */
  :hover .icons-container {
    background-color: #7f1aff;
    transform-origin: left;
  }

  :hover .icons-items {
    color: #7f1aff;
  }

  :hover .icons {
    path {
      stroke: #fff;
    }
  }
`;

Wrap.Items = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #7c7a7d;
  margin-top: 31px;
`;

Wrap.IconsCon = styled.div`
  width: 56px;
  height: 56px;
  background-color: white;
  box-shadow: 0px 0px 16px rgba(242, 94, 127, 0.04);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
