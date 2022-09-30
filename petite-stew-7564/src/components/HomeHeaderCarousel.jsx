import Slider from 'react-slick';
import './carousel.css';
import {
  Badge,
  Box,
  Center,
  Flex,
  Image,
  Img,
  Text,
} from '@chakra-ui/react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function Carousel() {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '-65px'
  };

  return (
    <>
      <Slider {...sliderSettings}>
        {/* 1 */}

        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              MATCH 10. Legends League Cricket T20, 2022
            </Text>
            <Flex align={'center'} justify={'space-between'} pt={2}>
              <Center>
                <Image
                  src='https://www.cricket.com/svgs/location-icon.svg'
                  alt='location-icon'
                />
                <Text ml={2} color='#777' fontSize={'.75rem'}>
                  Cuttack
                </Text>
              </Center>
              <Center
                color={'#777'}
                border={'1px solid #777'}
                borderRadius='2555px'
                p={'0 4px'}
                fontSize={'0.55rem'}
              >
                <Center
                  backgroundColor='#27ae60'
                  h={'0.4rem'}
                  w={'0.4rem'}
                  borderRadius='50%'
                  mr={1}
                ></Center>
                LIVE
              </Center>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://www.cricket.com/svgs/images/flag_empty.svg'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      MNT
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Flex>
                      <Text fontSize={'0.875rem'}>161/5</Text>
                      <Box ml={2}>(20.0)</Box>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://www.cricket.com/svgs/images/flag_empty.svg'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      IC
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Flex>
                      <Text fontSize={'0.875rem'} fontWeight='600'>
                        84/2
                      </Text>
                      <Box ml={2}>(9.0)</Box>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    IC need 76 runs
                  </Badge>
                </Flex>
                <Flex alignItems={'center'} pt={1}>
                  <Img
                    src='https://www.cricket.com/pngs/prediction-loader.png'
                    alt='prediction-loader'
                    w={'2rem'}
                    maxW='100%'
                  />
                  <Text fontSize={'0.75rem'} my={1} pl={2}>
                    {' '}
                    Win projections to be updated soon{' '}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 2 */}

        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              6th T20I. England tour of Pakistan, 2022
            </Text>
            <Flex align={'center'} pt={2}>
              <Image
                src='https://www.cricket.com/svgs/location-icon.svg'
                alt='location-icon'
              />
              <Text ml={2} color='#777' fontSize={'.75rem'}>
                Lahor
              </Text>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/6_flag_safari.png'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      PAK
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'}>30th september</Text>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/3_flag_safari.png'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      ENG
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} fontWeight='600'>
                      8:00 PM IST
                    </Text>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    19 hrs 53 mins to toss
                  </Badge>
                </Flex>
                <Flex flexDir={'column'} alignItems={'center'} pt={1}>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                  >
                    <Box color={'#35a863'}>61%</Box>
                    <Box color={'#d64b4b'}>39%</Box>
                  </Flex>
                  <Flex w='100%' mt={'2px'}>
                    <Box
                      bg='#35a863'
                      w='61%'
                      h='3.5px'
                      borderRadius={'2px 0 0 2px'}
                    ></Box>
                    <Box
                      bg='#d64b4b'
                      w='39%'
                      h='3.5px'
                      borderRadius={'0 2px 2px 0'}
                    ></Box>
                  </Flex>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                    color={'#727862'}
                  >
                    <Box>PAK</Box>
                    <Box>ENG</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 3 */}
        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              Match 11 . Legends League Cricket T20, 2022
            </Text>
            <Flex align={'center'} justify={'space-between'} pt={2}>
              <Center>
                <Image
                  src='https://www.cricket.com/svgs/location-icon.svg'
                  alt='location-icon'
                />
                <Text ml={2} color='#777' fontSize={'.75rem'}>
                  Jodhpur
                </Text>
              </Center>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://www.cricket.com/svgs/images/flag_empty.svg'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      GjG
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} color='#d64b4b'>
                      Today
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://www.cricket.com/svgs/images/flag_empty.svg'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      BHK
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} fontWeight='600'>
                      7:30 PM IST
                    </Text>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    5 hrs 53 mins to toss
                  </Badge>
                </Flex>
                <Flex alignItems={'center'} pt={1}>
                  <Img
                    src='https://www.cricket.com/pngs/prediction-loader.png'
                    alt='prediction-loader'
                    w={'2rem'}
                    maxW='100%'
                  />
                  <Text fontSize={'0.75rem'} my={1} pl={2}>
                    {' '}
                    Win projections to be updated soon{' '}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 4 */}
        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              2nd Semi-Final . Road Safety T20 World Series, 2022
            </Text>
            <Flex align={'center'} pt={2}>
              <Image
                src='https://www.cricket.com/svgs/location-icon.svg'
                alt='location-icon'
              />
              <Text ml={2} color='#777' fontSize={'.75rem'}>
                Raipur
              </Text>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/6_flag_safari.png'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      SL-L
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} color='#d64b4b'>
                      Today
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/3_flag_safari.png'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      WI-L
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} fontWeight='600'>
                      7:30 PM IST
                    </Text>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    5 hrs 53 mins to toss
                  </Badge>
                </Flex>
                <Flex flexDir={'column'} alignItems={'center'} pt={1}>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                  >
                    <Box color={'#35a863'}>70%</Box>
                    <Box color={'#d64b4b'}>30%</Box>
                  </Flex>
                  <Flex w='100%' mt={'2px'}>
                    <Box
                      bg='#35a863'
                      w='70%'
                      h='3.5px'
                      borderRadius={'2px 0 0 2px'}
                    ></Box>
                    <Box
                      bg='#d64b4b'
                      w='30%'
                      h='3.5px'
                      borderRadius={'0 2px 2px 0'}
                    ></Box>
                  </Flex>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                    color={'#727862'}
                  >
                    <Box>SL-L</Box>
                    <Box>WI-L</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 5 */}
        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              Match 2 . Women's Twenty20 Asia Cup, 2022
            </Text>
            <Flex align={'center'} pt={2}>
              <Image
                src='https://www.cricket.com/svgs/location-icon.svg'
                alt='location-icon'
              />
              <Text ml={2} color='#777' fontSize={'.75rem'}>
                Sylhet
              </Text>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/1126_flag_safari.png'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      IN-W
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} color='#d64b4b'>
                      1st October
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/1133_flag_safari.png'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      SL-L
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} fontWeight='600'>
                      1:00 PM IST
                    </Text>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    01 Oct 2022
                  </Badge>
                </Flex>
                <Flex flexDir={'column'} alignItems={'center'} pt={1}>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                  >
                    <Box color={'#35a863'}>66%</Box>
                    <Box color={'#d64b4b'}>34%</Box>
                  </Flex>
                  <Flex w='100%' mt={'2px'}>
                    <Box
                      bg='#35a863'
                      w='66%'
                      h='3.5px'
                      borderRadius={'2px 0 0 2px'}
                    ></Box>
                    <Box
                      bg='#d64b4b'
                      w='34%'
                      h='3.5px'
                      borderRadius={'0 2px 2px 0'}
                    ></Box>
                  </Flex>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                    color={'#727862'}
                  >
                    <Box>IN-W</Box>
                    <Box>SL-W</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 6 */}
        <Box>
          <Box bg={'white'} borderRadius='5px' w={'400px'} p={'8px 16px'}>
            <Text fontSize={'14px'} fontWeight='500' align={'left'}>
              6th T20I . England tour of Pakistan, 2022
            </Text>
            <Flex align={'center'} pt={2}>
              <Image
                src='https://www.cricket.com/svgs/location-icon.svg'
                alt='location-icon'
              />
              <Text ml={2} color='#777' fontSize={'.75rem'}>
                Sylhet
              </Text>
            </Flex>
            <Box pl={1}>
              <Box>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/1276_flag_safari.png'
                      alt='country-flag'
                      h='1rem'
                      w={'1.7rem'}
                      shadow='0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      BD-W
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} color='#d64b4b'>
                      1st October
                    </Text>
                  </Flex>
                </Flex>
                <Flex alignItems={'center'} justify='start' py={2}>
                  <Flex minW={'35%'} alignItems='center'>
                    <Img
                      src='https://images.cricket.com/teams/1482_flag_safari.png'
                      alt='country-flag'
                      shadow={
                        '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)'
                      }
                      h='1rem'
                      w={'1.7rem'}
                    />
                    <Text fontSize={'0.875rem'} fontWeight={600} ml={2}>
                      TL-W
                    </Text>
                  </Flex>
                  <Flex
                    maxW={'65%'}
                    alignItems='center'
                    letterSpacing={'-0.05em'}
                  >
                    <Text fontSize={'0.875rem'} fontWeight='600'>
                      8:30 AM IST
                    </Text>
                  </Flex>
                </Flex>
                <Flex py={1}>
                  <Badge
                    bg={'#feead9'}
                    borderRadius='9999px'
                    fontSize={'0.6rem'}
                    textAlign='left'
                    px={2}
                    py={1}
                  >
                    18 hrs 41 mins to toss
                  </Badge>
                </Flex>
                <Flex flexDir={'column'} alignItems={'center'} pt={1}>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                  >
                    <Box color={'#35a863'}>71%</Box>
                    <Box color={'#d64b4b'}>29%</Box>
                  </Flex>
                  <Flex w='100%' mt={'2px'}>
                    <Box
                      bg='#35a863'
                      w='71%'
                      h='3.5px'
                      borderRadius={'2px 0 0 2px'}
                    ></Box>
                    <Box
                      bg='#d64b4b'
                      w='29%'
                      h='3.5px'
                      borderRadius={'0 2px 2px 0'}
                    ></Box>
                  </Flex>
                  <Flex
                    fontSize={'0.75rem'}
                    fontWeight={600}
                    w='100%'
                    justify={'space-between'}
                    align='center'
                    color={'#727862'}
                  >
                    <Box>BD-W</Box>
                    <Box>TL-W</Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider>
    </>
  );
}
