import styled from 'styled-components';
import bread2 from '../assets/images/bread2.jpg';

const S_Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${bread2.src});
`;

const S_Menu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20vh;
`;

const S_Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const S_Title = styled.h2`
  font-family: 'Dancing Script', cursive;
  font-size: 7rem;
  font-weight: lighter;
  margin-bottom: 2rem;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
  }
`;

const S_MenuList = styled.ul`
  padding-left: 1.125rem;
`;

const S_MenuItem = styled.li`
  font-size: 1.125rem;
  line-height: 2.5;
`;

const Menu = () => {
  return (
    <S_Section>
      <S_Menu>
        <S_Wrapper>
          <S_Title>Menu</S_Title>
          <S_MenuList>
            <S_MenuItem>メロンパン</S_MenuItem>
            <S_MenuItem>クロワッサン</S_MenuItem>
            <S_MenuItem>バゲット</S_MenuItem>
            <S_MenuItem>あんぱん</S_MenuItem>
          </S_MenuList>
        </S_Wrapper>
      </S_Menu>
    </S_Section>
  );
};

export default Menu;
