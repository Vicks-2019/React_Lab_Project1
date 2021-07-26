import React from "react";
import "./MediumCard.css";

const MediumCard = ({ image, name, description }) => {
  return (
    <div className="mediumcard">
      <div
        className="card-container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="image-container">
          <img
            src={image}
            alt=""
            style={{
              width: 150,
              height: 150,
              borderRadius: "50%",
              border: "1px solid lightgray",
              padding: 7,
            }}
          />
        </div>
        <div className="card-title">
          <h3 style={{ marginTop: 20, color: "white" }}>{name}</h3>
        </div>
        <div className="card-body">
          <p style={{ color: "white" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
