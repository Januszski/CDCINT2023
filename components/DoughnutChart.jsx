import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Wind", "Coal", "Natural Gas", "Solar", "Nuclear/Other Sources"],
  datasets: [
    {
      label: "% ",
      data: [61, 23, 11, 1, 4],
      backgroundColor: [
        "rgba(213,237,255, 0.8)",
        "rgba(0, 0, 0, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(255, 255, 0, 0.8)",
        "rgba(153, 102, 255, 0.8)",
      ],
      borderColor: [
        "rgba(255, 255, 255, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 255, 0, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
  updateMode: "resize",
  redraw: true,
  maintainAspectRatio: true,
  // options: {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: "Energy Generation",
  //     },
  //   },
  // },
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Energy Generation",
      position: "top",
      font: {
        size: 16,
        weight: "bold",
      },
    },
  },
};

export default function DoughnutChart() {
  return (
    <div className=' max-h-100'>
      <Doughnut data={data} options={options} />
    </div>
  );
}
