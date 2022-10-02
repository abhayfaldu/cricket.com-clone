import { Center, Flex, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SmallScreenNavbar = () => {
  return (
    <Center display={['flex', 'flex', 'flex', 'none']} w='100%' p={'0 8px'}>
      <Center w={'18%'} mr={'4%'}>
        <NavLink to={'/'}>
          <Img
            src='https://www.cricket.com/svgs/images/icon-128x128.png'
            alt='logo'
            w={'51px'}
          />
        </NavLink>
      </Center>
      <Stack w={'78%'}>
        <Text fontSize={'16px'} color={'#000c'} fontWeight={600}>
          What are you looking for?
        </Text>
        <Flex m={0}>
          <Center border={'1px solid #eee'} borderRadius={'0.25rem'} p={'8px'}>
            <Img
              src='https://www.cricket.com/svgs/frcBlueIcon.svg'
              alt='navLink_icon'
              w={'27px'}
              pr={'4px'}
            />
            <Text fontSize={'14px'} color={'#0009'} fontWeight={600}>
              Fantasy Center
            </Text>
          </Center>
          <NavLink to={'/videos/0'}>
            <Center
              border={'1px solid #eee'}
              borderRadius={'0.25rem'}
              p={'8px 16px'}
            >
              <Img
                src='https://www.cricket.com/svgs/frcBlueIcon.svg'
                alt='navLink_icon'
                w={'27px'}
                pr={'4px'}
              />
              <Text fontSize={'14px'} color={'#0009'} fontWeight={600}>
                Videos
              </Text>
            </Center>
          </NavLink>
        </Flex>
      </Stack>
    </Center>
  );
};

export default SmallScreenNavbar;
