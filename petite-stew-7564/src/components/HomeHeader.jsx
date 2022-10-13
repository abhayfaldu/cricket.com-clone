import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import HomeHeaderCarousel from './HomeHeaderCarousel';

const HomeHeader = () => {
  return (
    <>
      <Center
        w={'100%'}
        bg='linear-gradient(to bottom, #982a2a , #d5303a )'
        h='218px'
        pb={'0.5rem'}
      >
        <Center
          w={['97%', '97%', '97%', '976px']}
          h='100%'
          mt={'-0.5rem'}
          px={'1rem'}
        >
          <Box p={0} zIndex={1} h='250px' maxW='778px' padding='23px 0 0 0'>
            <HomeHeaderCarousel />
          </Box>
        </Center>
      </Center>
    </>
  );
};

export default HomeHeader;
