import React from "react";
// import "./LargeCard.css";
import { Card, Button, CardTitle, CardText, Row, Col } from "react-bootstrap";

const LargeCard = ({
  title,
  price,
  description,
  logo,
  image,
  subtitle,
  index,
}) => {
  return (
    <div className="Largecard-container">
      {/* <Container> */}
      <Card
        style={{
          width: 370,
          height: 410,
          backgroundColor: "#e4ddf4",
          border: "2px solid white",
        }}
      >
        <Card.Img
          variant="top"
          src={logo}
          style={{
            width: 170,
            height: 100,

            padding: 10,
          }}
        />

        <Card.Body>
          <Card.Title>
            <strong style={{ fontSize: 16, fontWeight: 600 }}>{title}</strong>
          </Card.Title>
          <b>
            <hr />
          </b>
          <Card.Subtitle>
            <h5 style={{ fontSize: 15, fontWeight: 600 }}>{subtitle}</h5>
          </Card.Subtitle>

          <Card.Text
            style={{
              overflowY: "auto",
              whiteSpace: "nowrap",
              overflowX: "hidden",
              textAlign: "justify",
              width: 330,
              maxHeight: 130,
              fontSize: 12,
            }}
          >
            <div>
              <ul>
                <li>
                  {description.map((item) => (
                    <li>
                      {" "}
                      <p style={{ fontSize: 12, fontWeight: 600 }}>{item}</p>
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          </Card.Text>

          <Button variant="success">
            <a
              href={`/packagedetails/${index}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Know More
            </a>
          </Button>
        </Card.Body>
      </Card>
      {/* </Container> */}
    </div>
  );
};

export default LargeCard;
