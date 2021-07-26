import React from "react";
// import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryCard from "../GalleryCard/GalleryCard";

const Gallery = ({ cards }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        padding: 20,
        textAlign: "center",
        background: "#339cff",
      }}
    >
      <div style={{ width: "95%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20, color: "white" }}>Gallery</h1>
        <Slider
          slidesToShow={4}
          slidesToScroll={4}
          dots
          autoplay
          arrows={false}
        >
          {cards.map((item) => (
            <GalleryCard {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
