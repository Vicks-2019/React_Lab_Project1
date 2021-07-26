import React from "react";
// import "./Testimonial.css";
import MediumCard from "../MediumCard/MediumCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        textAlign: "center",
        background: "#339cff",
        marginBottom: 2,
      }}
    >
      <div style={{ width: "80%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20, color: "white" }}>
          Our Client's Saying
        </h1>
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          dots
          autoplay
          arrows={false}
        >
          {cards.map((item) => (
            <MediumCard {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
