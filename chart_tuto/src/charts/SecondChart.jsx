import React, { useEffect } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#d90429",
        "#f2e9e4",
        "#00afb9",
        "#0f4c5c",
        "#9d4edd",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "#d90429",
        "#f2e9e4",
        "#00afb9",
        "#0f4c5c",
        "#9d4edd",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const SecondChart = () => {
  const [chartData, setcharData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#d90429",
          "#f2e9e4",
          "#00afb9",
          "#0f4c5c",
          "#9d4edd",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#d90429",
          "#f2e9e4",
          "#00afb9",
          "#0f4c5c",
          "#9d4edd",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const [inputState, setInputState] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${inputState}`
    );
    console.log(data);
    const nameArray = [];
    const scoreArray = [];
    for (let movie of data) {
      nameArray.push(movie.show.name);
      scoreArray.push(movie.score);
    }
    console.log(nameArray);
    console.log(scoreArray);
    setcharData({
      labels: [...nameArray],
      datasets: [
        {
          label: "score",
          data: [...scoreArray],
          backgroundColor: [
            "#d90429",
            "#f2e9e4",
            "#00afb9",
            "#0f4c5c",
            "#9d4edd",
            "rgba(255, 159, 64, 0.2)",
          ],
        },
      ],
    });
  };
  const handleSecondChange = (e) => {
    e.preventDefault();
    setInputState(e.target.value);
  };
  return (
    <div style={{ width: "600px", height: "600px", marginLeft: "400px" }}>
      <Bar data={chartData} />
      Browse Show <input type="text" onChange={handleSecondChange} />
      <button onClick={fetchData}>find it</button>
      <h1>Chelot still on steroid</h1>
    </div>
  );
};

export default SecondChart;
