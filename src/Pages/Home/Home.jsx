import React from "react";
import img1 from "../../assets/image/slide3.jpg";
import img2 from "../../assets/image/img2.webp";
import img3 from "../../assets/image/img3.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 my-4">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 px-4 text-center">
              <h2 className="text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                Every Step Counts: Embrace the Marathon Journey
              </h2>
              <p className="text-blue-400 text-sm sm:text-base md:text-md max-w-3xl">
                Push your boundaries, connect with fellow runners, and celebrate
                the spirit of endurance in thrilling marathon events worldwide.
              </p>
              <a
                href="#_"
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-[#0080db4f] border-blue-600 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
            <img src={img2} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 px-4 text-center">
              <h2 className="text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                Run Your Limits: Join the Ultimate Marathon Experience
              </h2>
              <p className="text-blue-400 text-sm sm:text-base md:text-lg max-w-3xl">
                Discover your true strength by pushing past your limits and
                becoming part of the global running community.
              </p>
              <a
                href="#_"
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-[#0080db4f] border-blue-600 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
            <img src={img1} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 px-4 text-center">
              <h2 className="text-blue-600 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                Chase the Finish Line with Passion and Purpose
              </h2>
              <p className="text-blue-400 text-sm sm:text-base md:text-lg max-w-3xl">
                Whether you're a beginner or a pro, every finish line crossed is
                a victory worth celebrating.
              </p>
              <a
                href="#_"
                className="lg:mt-6 mt-2 rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-[#0080db4f] border-blue-600 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 group-hover:text-white ease">
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
