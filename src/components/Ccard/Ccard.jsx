import React from "react";
import "./Ccard.css";
import { Card, Button } from "react-bootstrap";

const Ccard = ({ title, image, index }) => {
  return (
    <Card
      style={{
        width: "280px",
        height: "210px",
        alignItems: "center",
        backgroundColor: "#e4ddf4",
        border: "2px solid white",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: 100,
          height: 100,

          padding: 10,
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Button
          variant="success"
          style={{
            width: 100,
            height: 30,
            justifyItems: "centre",
            fontWeight: 5,
            fontSize: 10,
            padding: 8,
            paddingLeft: 17,
            display: "flex",
            textAlign: "center",
          }}
        >
          <a
            href={`/packagetemplate/${index}`}
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            VIEW MORE
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Ccard;
