import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Img, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const apiKey = 'a1dc34d3f0a74391823ced4dbff955c9';
const cricketNewsApiUrl = `https://newsapi.org/v2/everything?q=cricket&apiKey=${apiKey}&pageSize=4&page=1`;

const initData = [
  {
    source: {
      id: null,
      name: 'Gizmodo.com',
    },
    author: 'Sabina Graves',
    title:
      'Disney Animation Marks 100 Years by Celebrating Its Own Wishing Star',
    description:
      'It’s an important Disney character you probably never thought too much about: the star, as in the “When You Wish Upon a Star” that Jiminy Cricket sings about, the star that Princess Tiana looks up to ask for her palace restaurant, and the star that Simba gaze…',
    url: 'https://gizmodo.com/ariana-debose-wish-disney-animation-fairytale-d23-expo-1849526298',
    urlToImage:
      'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/03a958741b1ba0fc9c94db58eea31f0c.jpg',
    publishedAt: '2022-09-12T21:30:00Z',
    content:
      'Its an important Disney character you probably never thought too much about: the star, as in the When You Wish Upon a Star that Jiminy Cricket sings about, the star that Princess Tiana looks up to as… [+2742 chars]',
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News',
    },
    author: null,
    title:
      'Mark Boucher to step down from South Africa head coach role after T20 World Cup',
    description:
      "South Africa men's head coach Mark Boucher will step down from the role after this winter's T20 World Cup.",
    url: 'https://www.bbc.co.uk/sport/cricket/62883281',
    urlToImage:
      'https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1F34/production/_126688970_boucherindex.png',
    publishedAt: '2022-09-12T16:38:44Z',
    content:
      "Before taking over as head coach, Mark Boucher, right, played 147 Tests for South Africa between 1997 and 2012\r\nSouth Africa men's head coach Mark Boucher will step down from the role after this wint… [+888 chars]",
  },
  {
    source: {
      id: null,
      name: 'The Guardian',
    },
    author: 'Tanya Aldred',
    title: 'County cricket: Northants v Surrey, Warwickshire v Somerset – live',
    description:
      'Live county cricket updates from 11am UK time You can email Tanya with your thoughts. The County Ground: Northants 339 and 209-5 v Surrey 421Edgbaston: Warwickshire 196 v Somerset 219 and 277-4 Continue reading...',
    url: 'https://www.theguardian.com/sport/live/2022/sep/15/county-cricket-northants-v-surrey-warwickshire-v-somerset-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/2669324ce0a40a27c23fbc3ae72c0b13501a58c2/0_232_3483_2090/master/3483.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=bbf162faf116c3306d1f8d1d003bdfa6',
    publishedAt: '2022-09-15T09:02:08Z',
    content:
      'Scores on the doors\r\nThe County Ground: Northants 339 and 209-5 v Surrey 421\r\nEdgbaston: Warwickshire 196 v Somerset 219 and 277-4\r\nHeadingley: Essex 225 and 162-9 BEAT Yorkshire 134 and 252 by one w… [+3425 chars]',
  },
  {
    source: {
      id: null,
      name: 'The Guardian',
    },
    author: 'James Wallace',
    title: 'Pakistan v England: first men’s T20 cricket international – live',
    description:
      'December Updates from Karachi where play begins at 3.30pm BST Email James or tweet @Jimbo_Cricket your thoughtsDecember 21, 2005. England’s weary cricketers trudge off the field under the misty haze of the Rawalpindi floodlights. A consolatio…',
    url: 'https://www.theguardian.com/sport/live/2022/sep/20/pakistan-england-first-mens-t20-cricket-international-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/1179137e47cf3aebfd3b4c9992839a328d3bcd51/235_318_4265_2558/master/4265.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=920c93500fe200d37516c75cec601cb6',
    publishedAt: '2022-09-20T14:06:14Z',
    content:
      'Teams:\r\nPakistan: Babar Azam (c), Mohammad Rizwan (wk), Haider Ali, Shan Masood, Iftikhar Ahmed, Khushdil Shah, Mohammad Nawaz, Usman Qadir, Haris Rauf, Naseem Shah, Shahnawaz Dahani\r\n(Derbyshires) S… [+3093 chars]',
  },
  {
    source: {
      id: null,
      name: 'The Guardian',
    },
    author: 'Daniel Gallan',
    title: 'Pakistan v England: third men’s T20 cricket international – live',
    description:
      'Live updates from Karachi, 3.30pm BST start Get in touch! You can email Daniel or tweet him Hello and welcome to the live OBO report of the 3rd T20 international between Pakistan and England from Karachi. We’re all square in the serie…',
    url: 'https://www.theguardian.com/sport/live/2022/sep/23/pakistan-v-england-third-mens-t20-cricket-international-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/434c3d9c1d9a85da83f44bd758968ffa4fe2f526/122_0_3967_2379/master/3967.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1eeb1608d1500503a20c816b63006544',
    publishedAt: '2022-09-23T13:30:36Z',
    content:
      'Will Jacks to debut. According to Matt Roller from ESPNCricinfo, itll Will Jacks. The 23-year-old off-spinning batter from Surrey. What a week its been for the south London club. After clinching the … [+110 chars]',
  },
  {
    source: {
      id: null,
      name: 'The Guardian',
    },
    author: 'James Wallace',
    title: 'Pakistan v England: fifth men’s T20 cricket international – live',
    description:
      'Live updates from the 3.30pm BST start in Lahore Get in touch! Email Jim or tweet @Jimbo_Cricket TEAMS: FOUR changes for England: Dawid Malan, Sam of the Currans, Chris Woakes and Mark Wood are in for England. Continue reading...',
    url: 'https://www.theguardian.com/sport/live/2022/sep/28/pakistan-v-england-fifth-mens-t20-cricket-international-live',
    urlToImage:
      'https://i.guim.co.uk/img/media/7efd0b8865e865eb9bb714c4be99b09e4449c5e8/7_0_5561_3336/master/5561.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7efa8b472a07dc2ee1a9cb792eba3950',
    publishedAt: '2022-09-28T14:18:40Z',
    content:
      'Show key events onlyPlease turn on JavaScript to use this feature\r\n1st over: Pakistan 7-0 (Babar 6, Rizwan 1) Woakes starts with a leg-side half volley to Rizwan who flicks for a single. Babar pulls … [+3903 chars]',
  },
];

const HomeNewsSection = () => {
  const [newsData, setNewsData] = useState(initData);

  // useEffect(() => {
  //   axios(cricketNewsApiUrl)
  //     .then(res => setNewsData(res.data.articles))
  //     .catch(err => console.log('err in getting data', err));
  // }, []);

  console.log('newsData', newsData);

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
