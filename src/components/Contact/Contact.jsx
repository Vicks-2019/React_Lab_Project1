import React from "react";
import "./Contact.css";

const Contact = ({ image, title }) => {
  return (
    <div className="contact">
      <div className="topcontact">
        <img src={image} />
      </div>

      <div
        className="bottomcontact"
        style={{
          marginTop: 2,
          textAlign: "center",
          background: "#339cff",
          color: "white",
          marginBottom: 2,
        }}
      >
        <h1>{title}</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="addcontact"
            style={{
              width: "80%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="fas fa-map-marker-alt"></span>
            <span className="text1">
              Lab Address : 16/17, 3rd Floor, West Extension Area, Karol Bagh,
              New Delhi 110005.
            </span>
            <br />
            <span className="fas fa-map-marker-alt"></span>
            <span className="text1">
              Branch Address : 39, 2nd Floor, Above Kirti Club,DLF Industrial
              Area, Kirti Nagar, New Delhi, Delhi 110015
            </span>
            <br />
            <span className="fas fa-phone-alt"></span>
            <span className="text1">+91-9990444903/781 / 011-43055820</span>
            <br />
            <span className="fas fa-envelope"></span>
            <span className="text1">care@indocarepathlab.com</span>
          </div>
          <div className="formcontact" style={{ width: "100%" }}>
            <form action="#" method="post">
              <input
                type="text"
                className="text-input contact-input"
                placeholder="Name"
                style={{ width: "100%" }}
              />
              <br />
              <input
                type="email"
                className="text-input contact-input"
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                className="text-input contact-input"
                placeholder="Phone No"
              />
              <br />
              <textarea
                rows="2"
                cols="25"
                className="text-input contact-input"
                placeholder="How can I help you?"
              ></textarea>
              <br />
              <button type="submit" className="btn-big">
                Send
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
