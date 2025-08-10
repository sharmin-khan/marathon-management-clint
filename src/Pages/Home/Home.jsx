import React, { useEffect } from "react";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.webp";
import img3 from "../../assets/image/img3.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import WhyJoinMarathon from "../../Section/WhyJoinMarathon";
import TopRunners from "../../Section/TopRunners";
import { Helmet } from "react-helmet-async";
import UpcomingMarathon from "../../Section/UpcomingMarathon";
import Marathons from "../../Section/Marathons";

const Home = () => {
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-11/12 mx-auto pt-28">
       <Helmet>
        <title>Home | MarathonPro</title>
      </Helmet>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
            <img src={img3} className="w-full h-full object-cover rounded-xl" />
            {/* Light Black Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
              <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-white to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                Discover Global Marathon Events
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mb-6  drop-shadow-lg">
                Join thousands of runners in prestigious marathon events worldwide. 
                From city streets to scenic trails, find your perfect race.
              </p>
              <button
              
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer  font-medium bg-blue-600  text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                 Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
            <img src={img2} className="w-full h-full object-cover rounded-xl" />
            {/* Light Black Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
              <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-white to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                Professional Race Management
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mb-6  drop-shadow-lg">
                Experience world-class race organization with professional timing, 
                medical support, and comprehensive runner services.
              </p>
              <button
               
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer  font-medium bg-blue-600  text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
            <img src={img1} className="w-full h-full object-cover rounded-xl" />
            {/* Light Black Overlay */}
            <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
              <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-white to-blue-700 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Build Your Running Legacy
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mb-6 drop-shadow-lg">
                Track your progress, achieve personal records, and join an elite 
                community of dedicated runners and athletes.
              </p>
              <button
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer  font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Marathons></Marathons>
      <UpcomingMarathon></UpcomingMarathon>
      <TopRunners></TopRunners>
       <WhyJoinMarathon></WhyJoinMarathon>
    </div>
  );
};

export default Home;
