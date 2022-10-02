import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Criclytics = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/pageNotFound');
  });
  return <></>;
};

export default Criclytics;
