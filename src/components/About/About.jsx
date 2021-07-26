import React from "react";
import "./About.css";

const About = ({ image, title, description }) => {
  return (
    <div className="about">
      <div className="aboutTop">
        <img src={image} style={{ marginTop: 5 }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          background: "#339cff",
          marginBottom: 2,
          marginTop: 2,
        }}
      >
        <div
          className="aboutBottom"
          style={{ width: "80%", textAlign: "center" }}
        >
          <h2> {title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
