import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const videosData = [
  {
    title:
      "TEAM INDIA'S T20I TIER LIST I CDC Follow Through with Avanish Hegde I Cricket.com",
    poster: 'https://img.youtube.com/vi/ha6B1U9f-yY/mqdefault.jpg',
  },
  {
    title:
      'BREAKING NEWS! Jasprit Bumrah injured, ruled out of the T20 World Cup 2022 I Cricket.com',
    poster: 'https://img.youtube.com/vi/gqQgCOWpJa0/mqdefault.jpg',
  },
  {
    title:
      'Reactions! India run through Proteas top-order with ease | CDC Watchalong Best Bits',
    poster: 'https://img.youtube.com/vi/OIQ_PlPLDCc/mqdefault.jpg',
  },
  {
    title:
      'Reactions! India run through Proteas top-order with ease | CDC Watchalong Best Bits',
    poster: 'https://img.youtube.com/vi/LMy0LHt9Tpw/mqdefault.jpg',
  },
  {
    title:
      "Analysing India's squad for the WT20 | Wrong'Uns with Weston | Episode 3",
    poster: 'https://img.youtube.com/vi/UpWJiTveRqs/mqdefault.jpg',
  },
  {
    title:
      'Harry Brook: Not Just Another English Cricketer | CDC Features I Cricket.com',
    poster: 'https://img.youtube.com/vi/STmW8tM4uHo/mqdefault.jpg',
  },
];

const HomeVideosSection = () => {
  return (
    <>
      <Box
        w={['97%', '97%', '97%', '976px']}
        shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
        m='auto'
        my={3}
        borderRadius='5px'
        className='home__featuredVideos'
      >
        <Flex
          p={4}
          justify='space-between'
          w='100%'
          borderBottom={'0.2px solid lightgray'}
        >
          <Text fontSize={'0.75rem'} fontWeight={600}>
            FEATURED VIDEOS
          </Text>
          <NavLink to={'/videos'}>
            <ChevronRightIcon w={5} h={5} />
          </NavLink>
        </Flex>
        <Flex p={4} m={0} overflowX='scroll'>
          <Flex>
            {videosData.map((video, index) => (
              <NavLink to={`/videos/${index}`}>
                <Flex
                  flexDir={'column'}
                  m='8px 16px 8px 0'
                  position='relative'
                  zIndex={0}
                >
                  <Center
                    zIndex={0}
                    position='relative'
                    overflow={'hidden'}
                    w={'16rem'}
                    h={'9rem'}
                  >
                    <span
                      style={{
                        color: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      <Img
                        src={video.poster}
                        alt='video-poster'
                        maxW='100%'
                        h='100%'
                        objectFit={'cover'}
                        color='transparent'
                      />
                    </span>
                  </Center>
                  <Center
                    position={'absolute'}
                    w={'16rem'}
                    h={'9rem'}
                  >
                    <Img
                      src='https://www.cricket.com/svgs/videoIcon.svg'
                      alt='play-icon'
                      zIndex={0}
                      mx='auto'
                      maxW='100%'
                    />
                  </Center>
                  <Text>{video.title}</Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default HomeVideosSection;
