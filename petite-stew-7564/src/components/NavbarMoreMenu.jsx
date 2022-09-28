import React from 'react'
import {
  Box,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import styles from './Navbar.module.css';

const moreMenuData = [
  {
    icon: 'https://www.cricket.com/svgs/icons/stadium-icon.svg',
    title: 'Stadiums',
  },
  {
    icon: 'https://www.cricket.com/svgs/icons/rankings-icon.svg',
    title: 'Rankings',
  },
  {
    icon: 'https://www.cricket.com/svgs/GroupArchive.svg',
    title: 'Archives',
  },
  {
    icon: 'https://www.cricket.com/svgs/icons/records-icon.svg',
    title: 'Records',
  },
  {
    icon: 'https://www.cricket.com/svgs/icons/profile.svg',
    title: 'Profile',
  },
];

const NavbarMoreMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton className={styles.navbar__more}>
        <Box className={styles.navbar__moreBox}>
          <Box>
            <Img
              src={'https://www.cricket.com/svgs/icons/more.svg'}
              alt='nav_image'
              margin='auto'
            />
            <Text color={'white'} fontSize='0.64rem' p={'4px 0'}>
              More
              <ChevronDownIcon w={4} h={4} />
            </Text>
          </Box>
        </Box>
      </MenuButton>
      {/* more menu links */}
      <MenuList
        bg={'#172132'}
        color='white'
        border='none'
        position={'relative'}
        top='-9px'
        right='14px'
        borderRadius={0}
      >
        {moreMenuData.map(item => (
          <MenuItem
            key={item.title}
            _hover={{ backgroundColor: '#4e5661a7', color: 'white' }}
          >
            <Img src={item.icon} alt='menu_list_icon' pr={3} />
            <Text>{item.title}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default NavbarMoreMenu