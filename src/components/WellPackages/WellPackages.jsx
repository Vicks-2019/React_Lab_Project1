import React from "react";

import "./WellPackages.css";
import LargeCard from "../LargeCard/LargeCard";

const WellPackages = ({ card, image }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={image} />
        <h1
          style={{
            marginTop: 30,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Health Checkup Packages
        </h1>

        <div
          className="well"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "#339cff",
          }}
        >
          {card.map((item, index) => (
            <div style={{ margin: 20 }}>
              <LargeCard {...item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellPackages;
