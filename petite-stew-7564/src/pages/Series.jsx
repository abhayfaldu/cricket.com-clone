import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/pageNotFound');
  });
  return <></>;
}

export default Series