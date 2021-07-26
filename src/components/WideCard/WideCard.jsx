import React from "react";
import "./WideCard.css";

const WideCard = ({ question, answer }) => {
  return (
    <div className="widecard">
      <div
        className="card-container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="card-title">
          <h3 style={{ marginTop: 20 }}>{question}</h3>
        </div>
        <div className="card-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
