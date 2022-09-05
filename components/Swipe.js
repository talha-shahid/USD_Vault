import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/61eaf7492f29840013760da4/img/1662127291659_Spartan%20Labs%20x%20CoinMarketCap%20State%20of%20teh%20DeFi%20Industry%20Report%20280x136.png" className="w-full rounded-md" alt=""  srcSet="" /></span></SwiperSlide>
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1661946020806_Meta%20280x136.png" alt="" className="w-full rounded-md" srcSet="" /></span></SwiperSlide>
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/630f84537c6300001bd8c71b/img/1661961301321_280x136-1-min.png" className="w-full rounded-md" alt=""  srcSet="" /></span></SwiperSlide>
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg" className="w-full rounded-md" alt=""  srcSet="" /></span></SwiperSlide>
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1660103453949_280x136.jpg" alt="" className="w-full rounded-md"  srcSet="" /></span></SwiperSlide>
        <SwiperSlide><span><img src="https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png" alt="" className="w-full rounded-md"  srcSet="" /></span></SwiperSlide>
      </Swiper>
    </div>
  );
}

