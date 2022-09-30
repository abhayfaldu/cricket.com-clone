import React from 'react';
import HomeVideosSection from '../components/HomeVideosSection';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <>
      <HomeHeader />

      {/* featured videos section */}
      <HomeVideosSection />
    </>
  );
};

export default Home;
