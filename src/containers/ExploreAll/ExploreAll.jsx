import React from "react";
import './ExploreAll.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom,Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ExploreAll = () => {
    return (
        <div className="ExploreAll pt-5">
            <div className="pb-5">                
                <h4 className="text-center">NEW EXPLORE</h4>
                <h1 className="text-center">Explore All</h1>
            </div>
            <div className="d-flex flex-column images-slider">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation = {true}                
                    modules={[Zoom,Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="assets/images/90.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/99.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/166.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/289.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/1140.png" className="swipper-slide-img col-12"/></SwiperSlide>
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    navigation = {true}                
                    modules={[Zoom,Autoplay, Pagination, Navigation]}
                    className="mySwiper1"
                >
                    <SwiperSlide><img src="assets/images/166.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/289.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/1140.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/90.png" className="swipper-slide-img col-12"/></SwiperSlide>
                    <SwiperSlide><img src="assets/images/99.png" className="swipper-slide-img col-12"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
} 
export default ExploreAll;