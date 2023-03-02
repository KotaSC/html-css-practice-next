import styled from 'styled-components';
import bread1 from '../../assets/images/bread1.jpg';

const S_Section = styled.section`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${bread1.src});
`;

const S_Hero = styled.div`
  text-align: center;
  padding-top: 10vh;
`;

const S_Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 7rem;
  font-weight: lighter;
  margin-bottom: 2rem;
`;

const S_Intro = styled.p`
  line-height: 1.7;
  font-size: 1.125rem;
`;

const Hero = () => {
  return (
    <S_Section>
      <S_Hero>
        <S_Title>WCB Bakery</S_Title>
        <S_Intro>
          素材と食感にこだわったパンが勢ぞろい．
          <br />
          毎朝仕込んで焼き上げています．
          <br />
          パンと一緒に過ごす至福のひとときをお楽しみください．
        </S_Intro>
      </S_Hero>
    </S_Section>
  );
};

export default Hero;
