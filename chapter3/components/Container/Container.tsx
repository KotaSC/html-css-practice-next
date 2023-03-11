import { ReactNode } from "react";
import styled from "styled-components";

const S_Container = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    padding: 1rem 2.5rem 2.5rem;
  }
  background-color: #fff;
  max-width: 920px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <S_Container>{children}</S_Container>;
};

export default Container;
