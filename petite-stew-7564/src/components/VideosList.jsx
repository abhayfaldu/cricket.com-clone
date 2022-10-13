import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const VideosList = ({ videos }) => {
  const navigate = useNavigate();

  const handleVideoClick = index => {
    navigate(`/videos/${index}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Center
        w={['97%', '97%', '97%', '976px']}
        bg='white'
        m='auto'
        mt={2}
        display='block'
      >
        <Flex
          w='100%'
          pt={2}
          fontSize='0.75rem'
          color={'#999'}
          textAlign='center'
          fontWeight={600}
          borderBottom='0.3px solid lightgray'
        >
          <Box
            w={'25%'}
            p={'8px 16px'}
            color='black'
            bg={'#eee'}
            borderBottom='1px solid #f00'
          >
            LATEST
          </Box>
          <Box w={'25%'} p={'8px 16px'}>
            FANTASY
          </Box>
          <Box w={'25%'} p={'8px 16px'}>
            MATCHRELATED
          </Box>
          <Box w={'25%'} p={'8px 16px'}>
            NEWS
          </Box>
        </Flex>
        {videos.map((video, index) => (
          <Flex
            key={video.id.videoId}
            flexDir={['column', 'row']}
            m={['8px 8px', '8px 8px', '16px 8px']}
            gap={4}
            onClick={() => handleVideoClick(index)}
            _hover={{ cursor: 'pointer' }}
            // overflow="hidden"
          >
            <Center
              w={['100%', '160px']}
              h={['250px', '96px']}
              zIndex={0}
              overflow='hidden'
              backgroundSize={'contain'}
            >
              <Img
                w='100%'
                h={'127%'}
                src={video.snippet.thumbnails.high.url}
                alt='videoThumbnail'
              />
              <Center position={'absolute'} w={'16rem'} h={'9rem'}>
                <Img
                  src='https://www.cricket.com/svgs/videoIcon.svg'
                  alt='play-icon'
                  zIndex={0}
                  mx='auto'
                  maxW='100%'
                />
              </Center>
            </Center>
            <Box flex={1}>
              <Text fontWeight={500}>{video.snippet.title}</Text>
              <Text fontSize={'0.67rem'} pt={1}>
                {video.snippet.publishTime.slice(11, 13)} hours ago
              </Text>
              <Text py={2} fontSize='0.75rem'>
                {video.snippet.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Center>
    </>
  );
};

export default VideosList;
