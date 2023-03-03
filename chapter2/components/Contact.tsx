import styled from 'styled-components';
import cafe from '../assets/images/cafe.jpg';

const S_Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${cafe.src});
`;

const Contact = () => {
  return <S_Section></S_Section>;
};

export default Contact;
