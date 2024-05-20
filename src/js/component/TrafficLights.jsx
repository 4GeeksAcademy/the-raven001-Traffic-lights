import React, { useState } from "react";

const TrafficLights = () => {

    const [color, setColor] = useState(null)

    const light = document.getElementById('#trafficTop')

    if (color === "red"){
        return light.style.boxShadow ="0 0 100px white";
    }

  return (
    <div>
      <div id="lightrod"></div>
      <div id="lightCavin">
        <div className="py-3">
            <button id="trafficTop" onClick={() => setColor("red")}></button>
            <button id="trafficMiddle" onClick={() => setColor("yellow")}></button>
            <button id="trafficBottom" onClick={() => setColor("green")}></button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;
