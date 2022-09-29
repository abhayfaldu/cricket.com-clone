import { Box, Button, Slider, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './carousel.css';

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoPlay: false,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotelCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ];

  return (
    <>
      <div>
        <Button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </Button>
        <Button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </Button>
      </div>
      <div className='content'>
        <Slider
          ref={setSliderRef}
          {...sliderSettings}
        >
          {hotelCards.map((card, index) => (
            <Box key={index} bg={'lightblue'}>
              <Text>{card.title}</Text>
              <Text>{card.pricingText}</Text>
              <Text>{card.description}</Text>
              <Button>Buy Now</Button>
            </Box>
          ))}
        </Slider>

        {/* <div className='slick-slider'  ref={setSliderRef} {...sliderSettings} >
        <div className='slick-list'>
          <div className='slick-track'>
            <div className='slick-slide'>AA</div>
            <div className='slick-slide'>BB</div>
            <div className='slick-slide'>CC</div>
            <div className='slick-slide'>DD</div>
            <div className='slick-slide'>EE</div>
            <div className='slick-slide'>FF</div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
