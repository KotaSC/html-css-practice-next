import { ReactNode } from "react";
import styled from "styled-components";
import cat1 from "../../assets/images/cat1.jpg";

const S_PostThumb = styled.div`
  margin: 0 0 1rem 0;
  position: relative;

  @media screen and (min-width: 600px) {
    margin: 0 3rem 1rem 0;

    // 画像の周りにテキストを回り込ませる
    shape-outside: circle();
    float: left;
  }
`;

const S_PostImg = styled.img`
  // モバイルサイズでは画面の横幅いっぱいに画像を表示
  width: 100%;
  height: 260px;
  object-fit: cover;

  /*
    左上：40%/50%
    右上：70%/50%
    右下：50%/50%
    左下：30%/50%
  */
  border-radius: 40% 70% 50% 30%/50%;

  @media screen and (min-width: 600px) {
    width: 220px;
    height: 180px;
  }
`;

const S_PostDate = styled.p``;

const S_PostDesc = styled.p`
  color: #949087;
  line-height: 1.6;
`;

const Post = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <S_PostThumb>
        <S_PostDate>
          <span>2020</span>12/28
        </S_PostDate>
        <S_PostImg src={cat1.src} alt="猫の画像" />
      </S_PostThumb>
      <S_PostDesc>{children}</S_PostDesc>
    </>
  );
};

export default Post;
