import React, { useState } from "react";
import "./Footer.css";
import WhatsApp from "../WhatsApp/WhatsApp";
import TawkBubble from "../TawkBubble/TawkBubble";

const Footer = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  const SubmitForm = (e) => {
    e.preventDefault();
    var user = {
      Name: Name,
      email: email,
      num: num,
      text: text,
    };
    console.log(user);
  };

  return (
    <div className="footer">
      {/* <TawkBubble /> */}
      <WhatsApp className="wht" />
      <div className="footer-content">
        <div className="footer-section about" style={{ fontSize: 15 }}>
          <h2>About Us</h2>
          <p>
            Indocare Pathology Labs are India’s complete health Management
            company and provides highest quality preventive health care packages
            to you at the comfort of your home. We provides health home with our
            door to door health care service concept where samples are collected
            from your home at your designated time and tested at our own ABAS
            certified lab. The reports are mailed to you on the same day
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>

          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/contact">
              <li>Contact Us</li>
            </a>
          </ul>
          <div className="social">
            <a href="https://www.facebook.com/IndocarePathologyLabs">
              <span className="fab fa-facebook-f"></span>
            </a>
            <a href="#">
              <span className="fab fa-twitter"></span>
            </a>
            <a href="#">
              <span className="fab fa-instagram"></span>
            </a>
          </div>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <span className="fas fa-map-marker-alt"></span>
          <span className="txt">
            Lab Address : 16/17, 3rd Floor, West Extension Area, Karol Bagh, New
            Delhi 110005.
          </span>
          <br />
          <span className="fas fa-map-marker-alt"></span>
          <span className="txt">
            Branch Address : 39, 2nd Floor, Above Kirti Club,DLF Industrial
            Area, Kirti Nagar, New Delhi, Delhi 110015
          </span>
          <br />
          <span className="fas fa-phone-alt"></span>
          <span className="txt">+91-9990444903/781 / 011-43055820</span>
          <br />
          <span className="fas fa-envelope"></span>
          <span className="txt">care@indocarepathlab.com</span>
        </div>
        <div className="footer-section contact-form" style={{ fontSize: 15 }}>
          <h2>Enquire Us</h2>
          <br />
          <form>
            <input
              type="text"
              className="text-input contact-input"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              className="text-input contact-input"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="text-input contact-input"
              placeholder="Phone No"
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
            <textarea
              rows="2"
              cols="25"
              className="text-input contact-input"
              placeholder="How can I help you?"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
            <button
              type="submit"
              className="btn-big"
              onClick={(e) => SubmitForm(e)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        © INDOCARE PATHOLOGY LAB. All Rights Reserved 2021.
        <p>Visitor Counter</p>
        <a>
          <img
            src="https://www.webfreecounter.com/hit.php?id=grvxaoka&nd=6&style=80"
            style={{ marginBottom: 10 }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
