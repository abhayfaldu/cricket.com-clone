import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Teams from './Teams';
import Series from './Series';
import Schedule from './Schedule';
import Players from './Players';
import VideosPage from './VideosPage';
import Criclytics from './Criclytics';
import FantasyCenter from './FantasyCenter';
import News from './News';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos' element={<VideosPage />} />
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
