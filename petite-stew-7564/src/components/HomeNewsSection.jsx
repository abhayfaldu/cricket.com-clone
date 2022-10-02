import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const apiKey = 'a1dc34d3f0a74391823ced4dbff955c9';
const cricketNewsApiUrl = `https://newsapi.org/v2/everything?q=cricket&apiKey=${apiKey}&pageSize=4&page=1`;

const HomeNewsSection = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios(cricketNewsApiUrl)
      .then(res => setNewsData(res.data.articles))
      .catch(err => console.log('err in getting data', err));
  }, []);

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
            NEWS AND ARTICLES
          </Text>
          <NavLink to={'/videos'}>
            <ChevronRightIcon w={5} h={5} />
          </NavLink>
        </Flex>
        <Flex flexDir='column'>
          {newsData.map(item => (
            <Flex
              key={item.title}
              p={4}
              flexDir={['column', 'column', 'row']}
              borderBottom='0.5px solid lightgray'
            >
              <Box w='100%'>
                <Img
                  src={item.urlToImage}
                  alt='newsImage'
                  w='100%'
                  h={'100%'}
                  objectFit='cover'
                />
              </Box>
              <Box px={2} w='100%'>
                <Text
                  py={1}
                  color='#141b2f'
                  lineHeight={1.25}
                  fontWeight={600}
                  m={0}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={'0.875rem'}
                  pt={2}
                  w='100%'
                  lineHeight={'1.5'}
                  mb={3}
                  fontWeight='400'
                >
                  {item.content}
                </Text>
                <Flex justify={'space-between'}>
                  <Flex>
                    <Img
                      o={0.8}
                      w='1rem'
                      h='1rem'
                      maxW={'100%'}
                      src='https://www.cricket.com/svgs/user.svg'
                    />
                    <Text fontWeight='500' fontSize={'0.75rem'} pl='0.25rem'>
                      Aakash Sivasubramaniam
                    </Text>
                  </Flex>
                  <Text fontWeight='500' fontSize={'0.75rem'}>
                    {`${item.publishedAt.slice(8, 10)}-${item.publishedAt.slice(
                      5,
                      7
                    )}-${item.publishedAt.slice(0, 4)}`}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default HomeNewsSection;
