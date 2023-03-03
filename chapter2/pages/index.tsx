import styled from 'styled-components';
import Meta from '@/components/Meta';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';

const Container = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

const Home = () => {
  return (
    <>
      <Meta />
      <Container>
        <Hero />
        <Menu />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
