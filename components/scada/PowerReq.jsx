import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

const PowerReq = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: "80%",
      },

      title: {
        text: "Speedometer",
      },

      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ["50%", "75%"],
        size: "110%",
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,
        tickPixelInterval: 72,
        tickPosition: "inside",
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
          distance: 20,
          style: {
            fontSize: "14px",
          },
        },
        lineWidth: 0,
        plotBands: [
          {
            from: 0,
            to: 120,
            color: "#55BF3B", // green
            thickness: 20,
          },
          {
            from: 120,
            to: 160,
            color: "#DDDF0D", // yellow
            thickness: 20,
          },
          {
            from: 160,
            to: 200,
            color: "#DF5353", // red
            thickness: 20,
          },
        ],
      },

      series: [
        {
          name: "Speed",
          data: [80],
          tooltip: {
            valueSuffix: " km/h",
          },
          dataLabels: {
            format: "{y} km/h",
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "#333333",
            style: {
              fontSize: "16px",
            },
          },
          dial: {
            radius: "80%",
            backgroundColor: "gray",
            baseWidth: 12,
            baseLength: "0%",
            rearLength: "0%",
          },
          pivot: {
            backgroundColor: "gray",
            radius: 6,
          },
        },
      ],
    });
  });
  return <div>PowerReq</div>;
};

export default PowerReq;
