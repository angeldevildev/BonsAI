import React from "react";
import "./Sketch.css";
import Inbox from "./assets/Inbox.png";
import Dashboard from "./assets/Dashboard.png";
import Dashboard2 from "./assets/Dashboard2.png";
import OrderList from "./assets/OrderList.png";

function Sketch() {
  return (
    <div className="sketch">
      <div className="text-sketch">
        <div className="text-container-sketch">
          <h1 className="title-sketch">From simple sketch to Stunning</h1>
        </div>
        <div className="box-sketch">
          <div className="text-container-box-sketch">
            <h3 className="title1-box-sketch">Build full projects</h3>
            <p className="desc-box-sketch">
              Go beyond interfaces and graphics! Use your creations as building
              blocks to design and launch complete websites and mobile apps
            </p> 
          </div>
        </div>
        <div className="additional-sections">
          <div className="inspire-section">
            <h3>Get inspired</h3>
            <p>
              Create iterations and get ideas on the spot with just one click.
            </p>
            <button>Surprise me</button>
            <button>Generate with AI</button>
            <button>Share artwork</button>
          </div>
          <div className="web-mobile-section">
            <h3>Web & mobile</h3>
            <p>Instantly switch your web application to a mobile app.</p>
            <img src={Dashboard2} alt="Mobile App Screenshot" />
          </div>
          <div className="templates-section">
            <h3>10K+ Templates</h3>
            <p>
              Never start from scratch with a huge library of pro resources.
            </p>
            <img
              src={OrderList}
              alt="Templates Screenshot"
              style={{ width: "60vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sketch;
