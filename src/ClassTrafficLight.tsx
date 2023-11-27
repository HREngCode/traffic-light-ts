import { Component } from "react";

interface TrafficLightState {
  currentColorIndex: number;
}

export class ClassTrafficLight extends Component<{}, TrafficLightState> {

colors = ["red", "yellow", "green"]

  state = {
    currentColorIndex: 0,
  };

  nextColor = () => {
    this.setState((prevState) => ({
      currentColorIndex: (prevState.currentColorIndex + 1) % this.colors.length,
    }));
  };

  render() {
    const { currentColorIndex } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {this.colors.map((color, index) => (
            <div
              key={index}
              className={`circle ${currentColorIndex === index ? color : "black"}`}
            ></div>
          ))}
        </div>
        <button onClick={this.nextColor} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
