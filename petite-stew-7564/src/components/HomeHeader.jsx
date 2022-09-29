import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import HomeHeaderCarousel from './HomeHeaderCarousel';

const HomeHeader = () => {
  return (
    <>
      <Center w={'100%'} bg='linear-gradient(to bottom, #982a2a , #d5303a )' h='250px'>
        <Center w={['97%', '97%', '97%', '976px']} mt={'-0.5rem'} px={'1rem'} >
          <Box position={'relative'}>
            <Box
              position={'relative'}
              overflow={'hidden'}
              p={0}
              zIndex={1}
            >
              <HomeHeaderCarousel />
            </Box>
          </Box>
        </Center>
      </Center>
    </>
  );
};

export default HomeHeader;
