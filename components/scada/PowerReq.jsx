import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
  HighchartsSolidGauge(Highcharts);
}

const PowerReq = () => {
  const container = React.useRef(null);
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from /logs/all
        const response = await fetch(
          `http://localhost:8080/substations/values`
        );
        const dataJSON = await response.json();

        // Handle the fetched data as needed

        setData(
          dataJSON.substationOneValue +
            dataJSON.substationTwoValue +
            dataJSON.substationThreeValue
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchData, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

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
          name: "Electricity needed",
          data: [data],
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
