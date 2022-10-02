import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../components/HomeVideosSection';
import VideosList from '../components/VideosList';

const query = 'cricket.com/tv';
const youtubeApiLink = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&q=${query}&maxResults=10&key=${api}`;

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  let { videoId } = useParams();
  const [isLoading, setisLoading] = useState(true);

  const getVideos = () => {
    axios
      .get(youtubeApiLink)
      .then(res => setVideos(res.data.items))
      .catch(err => console.log('error in getting videos:', err));
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <Center w={'100vw'} h='100vh' mt={'-11rem'}>
      <Img src='https://www.cricket.com/static/gif/logo.gif' />
    </Center>
  ) : (
    <>
      {/* for backGround gray */}
      <Box w='100%' bg='#E9E9EF' pb={2}>
        {/* Header red strip */}
        <Box h='11rem' bg='linear-gradient(270deg,#d44030,#9b000d)'></Box>

        {/* Video player */}
        <Box w={['97%', '97%', '97%', '976px']} m='auto' mt='-8.5rem'>
          <Box w='100%' h={['240px', '300px', '384px']}>
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${videos[videoId].id.videoId}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </Box>
          <Flex justify='space-between' bg='white' py={1}>
            <Box>
              <Text p={1} fontWeight={500} fontSize={'0.875rem'}>
                Cricket.com DECODED I Episode 50 I What makes Axar Patel more
                than just a 'Jadeja Clone'?
              </Text>
              <Text fontSize={'0.75rem'} fontWeight={400} px={2} pb={1}>
                5 hours ago
              </Text>
            </Box>
            <Center h={'50px'} w={'50px'}>
              <ChevronDownIcon w={8} h={8} color='gray' />
            </Center>
          </Flex>
        </Box>

        {/* videos list */}
        <VideosList videos={videos} />
      </Box>
    </>
  );
};

export default VideosPage;
