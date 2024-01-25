import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import Image from "next/image";

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
};

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "text",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const imageCenter = {
  id: "imageCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    const image = document.createElement("img");
    image.src = "/frontpage/sphere-power.gif"; 
    image.width = 40; 
    image.height = 40; 

    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

    ctx.drawImage(
      image,
      centerX - image.width / 2,
      centerY - image.height / 2,
      image.width,
      image.height
    );
  },
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
      {/* <Image
        src='/frontpage/sphere-power.gif'
        alt='logo'
        width={40}
        height={40}
        className='object-contain ml-1.5 border-blue-500 '
      /> */}
    </div>
  );
}
