import { Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  const linkStyle = {
    color: 'red',
    textDecoration: 'underline',
  };
  return (
    <>
      <Text mt={'20px'} fontSize='30px' fontWeight={'bold'}>
        404 &nbsp; | &nbsp; Page Not Found
      </Text>
      <Text fontSize={'16px'} fontWeight={'400'}>
        choose only{' '}
        <NavLink to={'/'} style={linkStyle}>
          home page
        </NavLink>{' '}
        or{' '}
        <NavLink to={'/videos'} style={linkStyle}>
          videos page
        </NavLink>
        .
      </Text>
    </>
  );
};

export default PageNotFound;
