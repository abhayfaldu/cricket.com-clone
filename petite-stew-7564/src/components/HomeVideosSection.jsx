import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const api = 'AIzaSyCnT0wok4ge0qm6LaaFPOhpIzuoE95pa9I';
const query = 'cricket.com/tv';
const youtubeApiLink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&q=${query}&maxResults=6&key=${api}`;

const HomeVideosSection = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    axios
      .get(youtubeApiLink)
      .then(res => setVideos(res.data.items))
      .catch(err => console.log('error in getting videos:', err));
  };

  useEffect(() => {
    getVideos();
  }, []);

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
            FEATURED VIDEOS
          </Text>
          <NavLink to={'/videos'}>
            <ChevronRightIcon w={5} h={5} />
          </NavLink>
        </Flex>
        <Flex p={4} m={0} overflowX='scroll'>
          <Flex>
            {videos.map((video, index) => (
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
                    <Img
                      src={video.snippet.thumbnails.high.url}
                      alt='video-poster'
                      w='100%'
                      h='100%'
                      objectFit={'cover'}
                      color='transparent'
                    />
                  </Center>
                  <Center position={'absolute'} w={'16rem'} h={'9rem'}>
                    <Img
                      src='https://www.cricket.com/svgs/videoIcon.svg'
                      alt='play-icon'
                      zIndex={0}
                      mx='auto'
                      maxW='100%'
                    />
                  </Center>
                  <Text>{video.snippet.title}</Text>
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
