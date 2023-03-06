import styled from "styled-components";
import PostTitle from "./PostTitle";

const S_Container = styled.main`
  @media screen and (min-width: 600px) {
    width: 68%;
    margin-bottom: 0;
  }
`;

const Posts = () => {
  return (
    <S_Container>
      <PostTitle title="初めて猫を飼う人は必見!猫を飼うときに必要なもの" />
    </S_Container>
  );
};

export default Posts;
