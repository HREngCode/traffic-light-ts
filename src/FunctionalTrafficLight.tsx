import { useState } from "react";
interface FunctionalTrafficLightProps {
  colors: string[];
}

interface TrafficLightState {
  index: number;
}

export const FunctionalTrafficLight: React.FC<FunctionalTrafficLightProps> = ({ colors }) => {
  const [colorIndex, setColorIndex] = useState<TrafficLightState>({ index: 0 });

  const nextColor = () => {
    setColorIndex((prevState) => ({ index: (prevState.index - 1 + colors.length) % colors.length }));
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {colors.map((color, index) => (
            <div
              key={index}
              className={`circle ${colorIndex.index === index ? color : "black"}`}
            ></div>
          ))}
      </div>
      <button onClick={nextColor} className="next-state-button">Next State</button>
    </div>
  );
};



