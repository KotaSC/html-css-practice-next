import styled from 'styled-components';
import cafe from '../assets/images/cafe.jpg';
import SNSLinks from './SNSLinks';

const S_Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${cafe.src});
`;

const S_Contact = styled.div`
  text-align: center;
  padding-top: 10vh;
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

const S_Info = styled.p`
  line-height: 1.7;
  font-size: 1.125rem;
`;

const S_Button = styled.button`
  background: #555;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 3.5rem;
  border-radius: 6px;
  border: none;
  margin: 2rem 0 2.25rem;
`;

const Contact = () => {
  return (
    <S_Section>
      <S_Contact>
        <S_Title>Contact</S_Title>
        <S_Info>大阪府大阪市</S_Info>
        <S_Info>営業時間 8:00〜20:00</S_Info>
        <S_Button>お問い合わせ</S_Button>
        <SNSLinks />
      </S_Contact>
    </S_Section>
  );
};

export default Contact;
