import { Box, Center, Flex, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import SmallScreenFooter from './SmallScreenFooter';

const Footer = () => {
  return (
    <>
      {/* large screen footer */}
      <Box
        w={'100%'}
        p={'32px 0'}
        bg={'#172132'}
        display={['none', 'none', 'none', 'flex']}
      >
        <Flex
          h={'50px'}
          w={'976px'}
          m='auto'
          justify={'space-between'}
          color={'#777'}
        >
          <Box>
            <Img
              src='https://www.cricket.com/svgs/cricket-logo.svg'
              alt='logo'
            />
            <Text fontSize={'.64rem'}>Cricket like never before</Text>
          </Box>
          <Center maxW={'61rem'}>
            {['Terms of use', 'Privacy Policy', 'Cookies Policy'].map(item => (
              <Text px={'8px'} fontSize={'12px'}>
                {item}
              </Text>
            ))}
          </Center>
          <Stack>
            <Flex justify={'flex-end'}>
              <Text fontSize={'0.64rem'} pr={'16px'}>
                Follow us on
              </Text>
              <Flex>
                {[
                  'https://www.cricket.com/svgs/facebook.svg',
                  'https://www.cricket.com/svgs/twitter.svg',
                  'https://www.cricket.com/svgs/linkedin.svg',
                ].map(item => (
                  <Img src={item} alt='facebook_logo' px={'4px'} />
                ))}
              </Flex>
            </Flex>
            <Text fontSize={'.75rem'}>
              @ 2020 cricket.com | All rights reserved
            </Text>
          </Stack>
        </Flex>
      </Box>

      {/* small screen footer */}
      <SmallScreenFooter />
    </>
  );
};

export default Footer;
