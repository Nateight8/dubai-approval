import React from "react";
import { Box, Typography, Container, Grid, Button, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SlideComponent from "./SlideComponent";
import SlideComp from "./SliderComp";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <Swiper
      slidesPerView={1}
      //   spaceBetween={10}
      // modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideComp />
      </SwiperSlide>
      <SwiperSlide>
        <SlideComponent />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
