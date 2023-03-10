import styled from "styled-components";
import headerImg from "../../assets/images/header.svg";

const S_Header = styled.header`
  max-width: 1000px;
  margin: 2.5rem auto 0;
  background: url(${headerImg.src});
  height: 170px;
`;

const S_PageTitle = styled.h1`
  @media screen and (min-width: 600px) {
    margin: 1rem 0 2rem;
  }
  text-align: center;
  font-size: 3.75rem;
  font-family: "Amatic SC", cursive;
  margin: 1rem 0;
  padding-top: 2rem;
`;

const S_PageDesc = styled.p`
  @media screen and (min-width: 600px) {
    font-size: 1.125rem;
    margin-bottom: 4rem;
  }
  text-align: center;
`;

const Header = () => {
  return (
    <S_Header>
      <S_PageTitle>Cat Blog</S_PageTitle>
      <S_PageDesc>猫の育て方や保護猫の情報を日々お届けします．</S_PageDesc>
    </S_Header>
  );
};

export default Header;
