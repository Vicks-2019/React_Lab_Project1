import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ cards }) => {
  return (
    <div style={{ margin: "5px" }}>
      <Slider
        className="banner"
        autoplay={true}
        autoplaySpeed={2000}
        dots={true}
        arrows={false}
      >
        {cards.map((item) => (
          <div>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
