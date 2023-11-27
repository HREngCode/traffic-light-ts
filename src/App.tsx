import "./App.css";
import { ClassTrafficLight } from "./ClassTrafficLight";
import { FunctionalTrafficLight } from "./FunctionalTrafficLight";

function App() {

  const colors = ["red", "yellow", "green"];

  return (
    <>
      <main>
        <h1>Traffic light App</h1>
        <div className="container">
          <div className="left">
            <FunctionalTrafficLight colors={colors} />
          </div>
          <div className="right">
            <ClassTrafficLight colors={colors}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
