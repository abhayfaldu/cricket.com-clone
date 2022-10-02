import { Center, Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HomeDataDigest from '../components/HomeDataDigest';
import HomeHeader from '../components/HomeHeader';
import HomeNewsSection from '../components/HomeNewsSection';
import HomeVideosSection from '../components/HomeVideosSection';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Center w={'100vw'} h='100vh' mt={'-11rem'}>
      <Img src='https://www.cricket.com/static/gif/logo.gif' />
    </Center>
  ) : (
    <>
      <HomeHeader />

      {/* featured videos section */}
      <HomeVideosSection />

      {/* news and articles Section */}
      <HomeNewsSection />

      {/* data digest section */}
      <HomeDataDigest />
    </>
  );
};

export default Home;
