import "./App.css";
import React from "react";
import DoughnutChart from "./charts/Doughnut";
import SecondChart from "./charts/SecondChart";

function App() {
  return (
    <div className="App">
      <DoughnutChart />
      {/* <DoughnutChart /> */}
      <SecondChart />
    </div>
  );
}

export default App;
