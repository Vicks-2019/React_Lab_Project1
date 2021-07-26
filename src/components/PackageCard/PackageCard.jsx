import React from "react";
import { Card } from "react-bootstrap";

const PackageCard = ({ image, title, subtitle, description }) => {
  return (
    <Card style={{ width: "320px", height: "330px", alignItems: "center" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          width: 100,
          height: 100,

          padding: 10,
        }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ fontSize: 15 }}>
          <strong>{title}</strong>
        </Card.Title>
        <hr />
        <Card.Subtitle>
          <h5>{subtitle}</h5>
        </Card.Subtitle>
        <Card.Text
          style={{
            overflowY: "scroll",
            whiteSpace: "nowrap",
            overflowX: "hidden",
            textAlign: "justify",
            width: 290,
            maxHeight: 130,
            fontSize: 12,
          }}
        >
          <div>
            <ul>
              <li>
                {description.map((items) => (
                  <li>
                    <p>{items}</p>
                  </li>
                ))}
              </li>
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PackageCard;
