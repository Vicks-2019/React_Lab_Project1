import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./HealthRisk.css";
import Ccard from "../Ccard/Ccard";

const HealthRisk = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        zIndex: 1,
        padding: 20,
        background: "#339cff",
      }}
    >
      <div style={{ width: "95%" }}>
        <h1 style={{ marginBottom: 40, textAlign: "center", color: "white" }}>
          Health Risk
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Here we are introducing you some health risks which affect your normal
          life. If you feel any symptoms according to disease you may go for the
          related test according to symptoms to avoid risk and cure the disease.
        </p>
        <Slider
          slidesToShow={4}
          slidesToScroll={2}
          dots
          autoplay
          autoplaySpeed={2000}
          arrows={false}
        >
          {cards.map((items, index) => (
            <div>
              <Ccard index={index} {...items} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HealthRisk;
