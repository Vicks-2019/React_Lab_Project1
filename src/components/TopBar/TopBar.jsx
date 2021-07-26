import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";

const TopBar = () => {
  return (
    <div className="topbar">
      <div>
        <i className="fa fa-phone"></i>
        <a style={{ marginLeft: 10 }}>+91-9990444903/781</a>
      </div>
      <div>
        <i className="fa fa-volume-control-phone"></i>
        <a>011-43055820</a>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <a style={{ marginLeft: 10 }}>care@indocarepathlab.com</a>
      </div>

      <div style={{ padding: "10px" }}>
        <GoogleTranslate />
      </div>
    </div>
  );
};

export default TopBar;
