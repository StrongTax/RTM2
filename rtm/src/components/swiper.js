import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


import "../styles/swiper.css";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import Art1 from "../articulos/Art1";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function swipe() {
  
  
  
  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 100000000,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide><Art1/></SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </>
  )
}

