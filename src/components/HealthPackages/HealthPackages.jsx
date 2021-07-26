import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HealthPackages.css";
import LargeCard from "../LargeCard/LargeCard";

const HealthPackages = ({ card }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 0,
        padding: 20,
        textAlign: "center",
        background: "#339cff",
      }}
    >
      <div style={{ width: "95%" }}>
        <h1 style={{ marginBottom: 40, textAlign: "center", color: "white" }}>
          Health Checkup Packages
        </h1>
        <Slider
          slidesToShow={3}
          slidesToScroll={3}
          dots
          autoplay
          autoplaySpeed={2000}
          arrows={false}
        >
          {card.map((item, index) => (
            <div>
              <LargeCard {...item} index={index} />
            </div>
          ))}
        </Slider>
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <button
            className="vbtn"
            style={{
              color: "white",
              background: "#087d86",
            }}
          >
            <a
              href="/healthpackages"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              VIEW ALL PACKAGES
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
