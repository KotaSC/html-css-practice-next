import styled from "styled-components";

const S_Post = styled.div`
  padding-bottom: 10px;
  background-image: linear-gradient(
    45deg,
    #fff 30%,
    #ccc 30%,
    #ccc 50%,
    #fff 50%,
    #fff 80%,
    #ccc 80%,
    #ccc 100%
  );
  background-size: 6px 6px;
  margin-bottom: 1.5rem;
`;

const S_PostTitle = styled.h2`
  background: #fff;
  padding: 0 0.5rem 0.875rem;
  font-size: 1.5rem;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 500;
  line-height: 1.5;
  color: #949087;
  text-decoration: none;
`;

const PostTitle = (props: { title: string }) => {
  return (
    <S_Post>
      <S_PostTitle>{props.title}</S_PostTitle>
    </S_Post>
  );
};

export default PostTitle;
