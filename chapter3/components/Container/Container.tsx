import { ReactNode } from "react";
import styled from "styled-components";

const S_Container = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    padding: 1rem 2.5rem 2.5rem;
  }
`;

const Container = ({ children }: { children: ReactNode }) => {
  return <S_Container>{children}</S_Container>;
};

export default Container;
