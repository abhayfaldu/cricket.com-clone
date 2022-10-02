import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Criclytics from './Criclytics';
import FantasyCenter from './FantasyCenter';
import Home from './Home';
import News from './News';
import PageNotFound from './PageNotFound';
import Players from './Players';
import Schedule from './Schedule';
import Series from './Series';
import Teams from './Teams';
import VideosPage from './VideosPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos/:videoId' element={<VideosPage />} />
      <Route path='/pageNotFound' element={<PageNotFound />} />
      <Route path='/criclytics' element={<Criclytics />} />
      <Route path='/fantasy-center' element={<FantasyCenter />} />
      <Route path='/news' element={<News />} />
      <Route path='/players' element={<Players />} />
      <Route path='/Schedule' element={<Schedule />} />
      <Route path='/series' element={<Series />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
  );
};

export default AllRoutes;
