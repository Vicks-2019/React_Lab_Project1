import React, { useState } from "react";
import "./Input.css";

const Input = ({ test }) => {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div
      className="input"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        padding: 60,
        textAlign: "center",
        background: "#339cff",
      }}
    >
      <div
        className="input-content"
        style={{ width: "95%", textAlign: "center", height: "auto" }}
      >
        <div className="input-section">
          {/* <input type="select" className="inp1" placeholder="Select Test" /> */}

          <select value={state} onChange={handleChange} className="inp1">
            {test.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>

          <input type="text" className="inp2" placeholder="Price" />
          <button className="inp-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
