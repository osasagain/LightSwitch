import React, { useState } from "react";
import "./App.css";
import image1 from "./components/Images/lightOff.jpeg";
import image2 from "./components/Images/lightOn.jpeg";

export const App = () => {
  const [Bulb, setBulb] = useState(false);

  return (
    <div className="App">
      <img src={Bulb ?image2 : image1} alt="bulb-off" />
      <div className="bulb">
        <button onClick={() => setBulb(Bulb === false ? true : true)}>
          Switch On
        </button>
        <button id="buttonOff"  onClick={() => setBulb(Bulb === true ? false : false)}>
          Switch Off
        </button>
      </div>
    </div>
  );
};