import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../StyleSheets/swiper.css';
import '../StyleSheets/about.css'
import image from '../Assets/srp-img.webp'

function About() {
  return (
    <>
    <Swiper
        spaceBetween={10}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div id="teacher-about">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="image-about">
              <div>
                Learn From <span>SRP sir</span>
              </div>
              <p>B.Tech, M.Tech(Gold medalist)</p>
              <p>8+ yreas of experience</p>
              <p>Producer of 100+ ranks at IIT JEE</p>
            </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div id="teacher-about">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="image-about">
              <div>
                Learn From <span>SRP sir</span>
              </div>
              <p>B.Tech, M.Tech(Gold medalist)</p>
              <p>8+ yreas of experience</p>
              <p>Producer of 100+ ranks at IIT JEE</p>
            </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>

    </>
  );
}

export default About;
