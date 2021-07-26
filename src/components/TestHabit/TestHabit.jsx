import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestHabit.css";

import Ccard from "../Ccard/Ccard";

const TestHabit = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        padding: 20,
        background: "#339cff",
      }}
    >
      <div style={{ width: "95%" }}>
        <h1 style={{ marginBottom: 40, textAlign: "center", color: "white" }}>
          Tests by Habits
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          If you have below mentioned habits you should go for related tests to
          avoid major risks and cure the problems.If you have below mentioned
          habits you should go for related tests to avoid major risks and cure
          the problems.
        </p>
        <Slider
          slidesToShow={4}
          slidesToScroll={2}
          dots
          autoplay
          autoplaySpeed={2000}
          arrows={false}
        >
          {cards.map((items) => (
            <Ccard {...items} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestHabit;
