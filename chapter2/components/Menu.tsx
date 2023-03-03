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

const Menu = () => {
  return <S_Section></S_Section>;
};

export default Menu;
