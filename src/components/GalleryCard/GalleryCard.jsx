import React from "react";
import "./GalleryCard.css";

const GalleryCard = ({ image, name, description }) => {
  return (
    <div className="gallerycard">
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
              width: 290,
              height: 200,

              border: "2px solid white",
            }}
          />
        </div>
        <div className="card-title">
          <h3 style={{ marginTop: 20 }}>{name}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
