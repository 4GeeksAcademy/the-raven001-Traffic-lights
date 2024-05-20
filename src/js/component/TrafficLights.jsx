import React, { useState } from "react";

const TrafficLights = () => {

    const [color, setColor] = useState(null)

  return (
    <div>
      <div id="lightrod"></div>
      <div id="lightCavin">
        <div className="py-3">
            <button id="trafficTop" className={color === "red" ? "glow" : ""} onClick={() => setColor("red")}></button>
            <button id="trafficMiddle" className={color ==="yellow" ? "glow" : ""}onClick={() => setColor("yellow")}></button>
            <button id="trafficBottom" className={color==="green" ? "glow": ""}onClick={() => setColor("green")}></button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;
