import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
  HighchartsSolidGauge(Highcharts);
}

const PowerReq = () => {
  const container = React.useRef(null);

  useEffect(() => {
    Highcharts.chart(container.current, {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: "60%",
        backgroundColor: "transparent",
      },

      title: {
        text: "&#x26A1; REQUESTED",
      },

      pane: {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "75%"],
        size: "110%",
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 750,
        tickPixelInterval: 30,
        tickPosition: "inside",
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: 16,
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
            to: 475,
            color: "#55BF3B", // green
            thickness: 20,
          },
          {
            from: 475,
            to: 650,
            color: "#DDDF0D", // yellow
            thickness: 20,
          },
          {
            from: 650,
            to: 750,
            color: "#DF5353", // red
            thickness: 20,
          },
        ],
      },

      series: [
        {
          name: "Electricity",
          data: [80],
          tooltip: {
            valueSuffix: " kW",
          },
          dataLabels: {
            format: "{y} kW",
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
  return <div ref={container}></div>;
};

export default PowerReq;
