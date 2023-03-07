"use client";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Tovar from "../assets/img/tovar.jpg"

// Import Swiper styles

export default function MySwiper() {
  return (
    <Swiper className='swiper-block'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image className='swiper-slide' src={Tovar}/></SwiperSlide>
      <SwiperSlide><Image className='swiper-slide' src={Tovar}/></SwiperSlide>
      <SwiperSlide><Image className='swiper-slide' src={Tovar}/></SwiperSlide>
      <SwiperSlide><Image className='swiper-slide' src={Tovar}/></SwiperSlide>
      
    </Swiper>
  );
};