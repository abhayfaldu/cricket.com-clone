import { Box, Center, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavbarMoreMenu from './NavbarMoreMenu';
import SmallScreenNavbar from './SmallScreenNavbar';

const navLinksData = [
  {
    to: '/fantasy-center',
    title: 'Fantasy Center',
    image: 'https://www.cricket.com/svgs/icons/frc.svg',
  },
  {
    to: '/criclytics',
    title: 'Criclytics',
    image: 'https://www.cricket.com/svgs/icons/criclytics-icon.svg',
  },
  {
    to: '/schedule',
    title: 'Schedule',
    image: 'https://www.cricket.com/svgs/icons/schedule-icon.svg',
  },
  {
    to: '/series',
    title: 'Series',
    image: 'https://www.cricket.com/svgs/icons/series-icon.svg',
  },
  {
    to: '/news',
    title: 'News',
    image: 'https://www.cricket.com/svgs/icons/news-and-articles-icon.svg',
  },
  {
    to: '/videos/0',
    title: 'Videos',
    image: 'https://www.cricket.com/svgs/icons/video-icon.svg',
  },
  {
    to: '/players',
    title: 'Players',
    image: 'https://www.cricket.com/svgs/icons/players-icon.svg',
  },
  {
    to: '/teams',
    title: 'Teams',
    image: 'https://www.cricket.com/svgs/icons/teams-icon.svg',
  },
];

const Navbar = () => {
  return (
    <>
      <Center
        h={'74px'}
        bg={'#172132'}
        w='100%'
        display={['none', 'none', 'none', 'flex']}
        position='sticky'
        top={0}
        left={0}
        zIndex='10000'
      >
        <Center
          w={['97%', '97%', '97%', '976px']}
          justifyContent={'space-between'}
        >
          {/* logo */}
          <NavLink to={'/'}>
            <Img
              p={'4px 64px 4px 0'}
              src='https://www.cricket.com/cricket.com.svg'
              alt='navbar_logo'
              h={'100%'}
            />
          </NavLink>

          <Center
            w={['auto', 'auto', '', 'auto']}
            display={['none', 'none', 'flex', 'flex']}
          >
            {/* NavLinks */}
            {navLinksData.map(item => (
              <NavLink
                to={item.to}
                end
                key={item.id}
                className={({ isActive }) =>
                  isActive ? styles.activeClass : styles.defaultClass
                }
                style={({ isActive }) =>
                  isActive
                    ? {
                        height: '74px',
                        padding: '16px',
                        backgroundColor: '#4e5661a7',
                        borderBottom: '4px solid red',
                      }
                    : {
                        height: '74px',
                        padding: '16px',
                      }
                }
              >
                <Box>
                  <Img src={item.image} alt='nav_image' margin='auto' />
                  <Text
                    color={'white'}
                    fontSize={['0.5rem', '0.5rem', '0.5rem', '0.64rem']}
                    p={'4px 0'}
                  >
                    {item.title}
                  </Text>
                </Box>
              </NavLink>
            ))}

            {/* navbar more menu */}
            <NavbarMoreMenu />
          </Center>
        </Center>
      </Center>

      {/* smaller screen nav */}
      <SmallScreenNavbar />
    </>
  );
};

export default Navbar;
