import React from "react";
import PackageCard from "../PackageCard/PackageCard";

const PackageDetails = ({ packages, ...props }) => {
  const { id } = props.match.params;
  const chosenPackage = packages[id];
  const { title, card, image } = chosenPackage;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
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
          {title}
        </h1>

        <div
          className="well"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "cyan",
          }}
        >
          {card &&
            card.map((item) => (
              <div style={{ margin: 20 }}>
                <PackageCard {...item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
