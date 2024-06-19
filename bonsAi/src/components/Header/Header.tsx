import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="text-header">
        <div className="text-container-header">
          <h3 className="text-ai-start-header">AI powered for designers</h3>
          <h1 className="title-header-text">Create stellar AI interfaces</h1>
          <p>
            Meet Clonify - Simply describe your vision, and our AI will
            instantly generate beatiful, user-friendly UI interfaces and
            eye-catching graphics.
          </p>
        </div>
        <div className="btn-container">
          {/**  <button className="head-btn">
                Launch App
            </button>
            **/}
        </div>
      </div>
    </div>
  );
}

export default Header;
