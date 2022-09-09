import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = ({ chartData }) => {
  return (
    <Line
      data={chartData}
      width={"25px"}
      height={"5px"}
      options={{
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        elements: { line: { borderColor: "#ef4444" } },
        scales: { y: { display: false }, x: { display: false } },
      }}
    />
  );
};

export default LineChart;
