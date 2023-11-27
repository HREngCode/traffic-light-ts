import { useState } from "react";


export const FunctionalTrafficLight = () => {

  const colors = ["red", "yellow", "green"];

  const [colorIndex, setColorIndex] = useState(0);

  const nextColor = () => {
    setColorIndex ((
      colorIndex + 1) % colors.length);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {colors.map((color, index) => (
            <div
              key={index}
              className={`circle ${colorIndex === index ? color : "black"}`}
            ></div>
          ))}
      </div>
      <button onClick={nextColor} className="next-state-button">Next State</button>
    </div>
  );
};



