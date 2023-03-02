import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import favicon from '../assets/images/favicon.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>WCB Bakery</title>
        <meta
          name='description'
          content='こだわりのパンが勢ぞろいのベーカリー'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/svg+xml' href={favicon.src} />
      </Head>
      <Hero></Hero>
    </>
  );
};

export default Home;
