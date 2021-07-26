import React from "react";
import "./WhatsApp.css";

const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=9205083231&amp;text=Hi... Indo Care Pathlab"
        target="_blank"
        className="social-icon whatsapp"
      >
        <img
          border="0"
          alt="whatsapp"
          src="https://www.traveltourister.com/assets/images/ttourister.png"
          width="80px;"
          height="80px;"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
