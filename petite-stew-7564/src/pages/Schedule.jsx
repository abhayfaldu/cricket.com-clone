import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/pageNotFound');
  });
  return <></>;
}

export default Schedule