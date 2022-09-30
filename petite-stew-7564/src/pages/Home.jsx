import React from 'react';
import HomeDataDigest from '../components/HomeDataDigest';
import HomeHeader from '../components/HomeHeader';
import HomeNewsSection from '../components/HomeNewsSection';
import HomeVideosSection from '../components/HomeVideosSection';

const Home = () => {
  return (
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
