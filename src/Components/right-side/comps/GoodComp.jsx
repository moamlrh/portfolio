import React from "react";
import "./GoodComp.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

function GoodComp() {
  return (
    <div className="good-at" id="good">
      <h2>What I’m good at?</h2>
      <p>
        Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
        Vestibulum congue leo et tellus aliquam, eu viverra nulla semper. Nullam
        eu faucibus diam. Donec eget massa ante.
      </p>
      <div className="good-sections">
        <Swiper
          slidesPerView={1}
          navigation
          pagination
          loop="true"
          loopFillGroupWithBlank="true"
        >
          <SwiperSlide>
            <div className="col-2">
              <h3>LOGO</h3>
              <h4>GOOOGLE </h4>
              <p>
                congue quis eget eros.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-2">
              <h3>LOGO</h3>
              <h4>JavaScript </h4>
              <p>
                Phasellus non convallis dolor. Integer tempor hendrerit arcu at
                bibendum. Sed ac ante non metus vehicula congue quis eget eros.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-3">
              <h3>LOGO</h3>
              <h4>ReactJs </h4>
              <p>
                Phasellus non convallis dolor. Integer tempor hendrerit arcu at
                bibendum. Sed ac ante non metus vehicula congue quis eget eros.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col-4">
              <h3>LOGO</h3>
              <h4>System Adminstrations</h4>
              <p>
                Phasellus non convallis dolor. Integer tempor hendrerit arcu at
                bibendum. Sed ac ante non metus vehicula congue quis eget eros.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default GoodComp;
