import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Players = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/pageNotFound');
  });
  return <></>;
}

export default Players