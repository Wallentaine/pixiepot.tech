"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { GradientChart } from "./gradientChart";
import { PieChart } from "./pieChart";
import { BubbleChart } from "./bubbleChart";

const Slider = () => {
  return (
    <Swiper spaceBetween={200} slidesPerView={1} className="w-screen h-screen ">
      <SwiperSlide>
        <GradientChart />
      </SwiperSlide>
      <SwiperSlide>
        <PieChart />
      </SwiperSlide>
      <SwiperSlide>
        <BubbleChart />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
