import React, { useState } from "react";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";
const Data = {
  labels: ["magneto", "fantastic beast", "mars"],
  datasets: [
    {
      data: [6, 9, 8],
      label: "score",
      backgroundColor: [
        `#ff006e`,
        `purple`,
        `green`,
        `#aacc00`,
        `yellow`,
        `orange`,
      ],
    },
  ],
};
const DoughnutChart = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [inputState, setInputState] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInputState(e.target.value);
  };
  const getMovieInfo = async () => {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${inputState}`
    );
    console.log(res.data);
    console.log(score);
    console.log(name);
    setMovieInfo(res.data);
    // updateDatachart();
  };
  const score = movieInfo.map((movie) => movie.score);
  const name = movieInfo.map((movie) => movie.show.name);
  // const updateDatachart = () => {
  //   Data.labels = name;
  //   Data.datasets[0].data = score;
  //   console.log("inside update");
  //   console.log(Data.labels);
  // };

  return (
    <div>
      <div style={{ width: "600px", height: "600px" }}>
        <Bar
          data={{
            labels: [...name],
            datasets: [
              {
                data: [...score],
                label: "score",
                backgroundColor: [
                  `#ff006e`,
                  `purple`,
                  `green`,
                  `#aacc00`,
                  `yellow`,
                  `orange`,
                ],
              },
            ],
          }}
        />

        <label> enter the name ofthe show you're looking for </label>
        <input type="text" onChange={handleChange} />
        <button onClick={getMovieInfo}>search</button>
        <h1> Chelot On Steroide </h1>
        {console.log({ score }, { name })}
      </div>
    </div>
  );
};

export default DoughnutChart;
