import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../StyleSheets/swiper-stars.css";
import "../StyleSheets/stars.css";
import image from "../Assets/srp-img.webp";
// import jeelogo from '../Assets/jee-main logo.png'

function Stars() {
  return (
    <>
      <div id="stars-heading">
        <p>
          Our Shining <span>Stars</span>
        </p>
        <p id="stars-description">
          Listen to the experience of our students who have done it themselves.
        </p>
      </div>

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
        className="mySwiper-stars"
      >
        <SwiperSlide className="mySwiperslide-stars">
          <div id="stars">
            <div id="stars-details">
              <div className="star-details-wrap">
                <div className="image-stars">
                  <img src={image} alt="" />
                  <span className="star-name">Anshuman Debasis</span>
                </div>
                <div className="stars-talk">
                  <p>
                    <span>SRP Sir</span> was instrumental towards my journey in
                    JEE Mains and Adv. preparation. He acted as a wonderful
                    mentor. His convivial personality helped me to ask and clear
                    my doubts in math that I came across in preparation for JEE
                    Mains and Adv. Along with this he also motivated me and gave
                    tips on how to effectively stay calm and attempt the paper.
                  </p>
                </div>
              </div>
            </div>
            <div id="stars-details">
              <div className="star-details-wrap">
                <div className="image-stars">
                  <img src={image} alt="" />
                </div>
                <div className="stars-talk">
                  <p>
                    <span>SRP Sir</span> was instrumental towards my journey in
                    JEE Mains and Adv. preparation. He acted as a wonderful
                    mentor. His convivial personality helped me to ask and clear
                    my doubts in math that I came across in preparation for JEE
                    Mains and Adv. Along with this he also motivated me and gave
                    tips on how to effectively stay calm and attempt the paper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mySwiperslide-stars">
         slide 2
          </SwiperSlide>
        <SwiperSlide className="mySwiperslide-stars">Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Stars;
