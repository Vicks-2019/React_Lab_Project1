import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src="/assets/logo.jpg" />
      </div>
      <div className="rightSide">
        <Link className="lnk" to="/">
          Home
        </Link>
        <Link className="lnk" to="/about">
          About
        </Link>
        <Link className="lnk" to="/healthpackages">
          Packages
        </Link>
        <Link className="lnk" to="/contact">
          Contact
        </Link>
        <Link className="lnk" to="/faqs">
          FAQs
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
