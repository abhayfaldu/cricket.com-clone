import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const images = [
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/d2093c655fff970c893d62e6f355715b2ce27a26.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/453aaf421bc1087199fbd51833b77738cf4f6377.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/f62a6cf67cbce5037a4c02a023a5b806ef3534dd.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/4eec0f8505aa7b1172a8ca8126389c5b88384981.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/6257d2eda461af5fe1f4168c13d13c457d73cf21.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/88026356440612a5c3a3b16234ddf827a2027d1b.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/b7be88db4ed72d29bec11d2a5ac271e705143652.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/9e5c5d14bd79a895e66c2314b6c1f6628d4fc2b4.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/8d7af975730cb8dc72fe7fb657bd19dbe263e5a9.png',
  'https://s3.ap-south-1.amazonaws.com/image.cricket.com/datadigest/f1fe2624538691e627f133424d5edbd4598f29e0.png',
];

const HomeDataDigest = () => {
  return (
    <>
      <Box
        w={['97%', '97%', '97%', '976px']}
        shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
        m='auto'
        my={3}
        borderRadius='5px'
        className='noScrollBars'
      >
        <Flex
          p={4}
          justify='space-between'
          w='100%'
          borderBottom={'0.2px solid lightgray'}
        >
          <Text fontSize={'0.75rem'} fontWeight={600}>
            NEWS AND ARTICLES
          </Text>
          <NavLink to={'/videos'}>
            <ChevronRightIcon w={5} h={5} />
          </NavLink>
        </Flex>
        <Flex p={4} mb={['90px', '90px', '90px', '1rem']} overflowX='scroll'>
          <Flex>
            {images.map(image => (
              <Img mr={4} src={image} alt='data-image' h={'192px'} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default HomeDataDigest;
