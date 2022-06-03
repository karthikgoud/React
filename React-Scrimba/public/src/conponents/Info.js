import React from "react";
import logo from "../images/Rectangle_90.png";

function Info() {
  return (
    <div className="info-section">
      <img src={logo} alt="Profile photo" />
      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>
      <div>
        <button className="btn1">Email</button>
        <button className="btn2">LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
