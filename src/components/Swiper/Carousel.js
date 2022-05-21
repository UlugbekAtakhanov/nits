import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.scss";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="carousel-container absolute top-0 left-0 w-full -z-10 min-h-screen">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-black/80 z-10 to-black/[.15] w-screen h-screen"></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="main-carousel"
      >
        <SwiperSlide><img src="/images/hero/hero-bg1.jpg" alt="img" />
        </SwiperSlide>

        <SwiperSlide><img src="/images/hero/hero-bg2.jpg" alt="img" />
        </SwiperSlide>

        <SwiperSlide><img src="/images/hero/hero-bg3.jpg" alt="img" />
        </SwiperSlide>

        <SwiperSlide><img src="/images/hero/hero-bg4.jpg" alt="img" />
        </SwiperSlide>

        <SwiperSlide><img src="/images/hero/hero-bg5.jpg" alt="img" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Carousel