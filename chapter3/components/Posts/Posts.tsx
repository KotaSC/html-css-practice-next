import styled from "styled-components";
import PostTitle from "./PostTitle";
import Post from "./Post";

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
      <Post>
        Te magna eirmod elitr eirmod nonumy sanctus in ea justo dolores dolore
        amet. Sit dolores molestie duis magna ut kasd minim stet facilisi et
        molestie eos lobortis. Dolor voluptua ut. Kasd kasd diam aliquyam lorem
        lorem dolor kasd at invidunt ut sit lorem. Consequat no aliquyam rebum
        feugiat stet lorem diam ipsum dolor veniam illum ex. Gubergren ex
        dolores stet duo amet eos duis takimata lorem duo elitr amet minim
        invidunt diam.
      </Post>
    </S_Container>
  );
};

export default Posts;
