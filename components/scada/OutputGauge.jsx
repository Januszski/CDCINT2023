import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
  HighchartsSolidGauge(Highcharts);
}
const OutputGauge = () => {
  const containerOutput = useRef(null);
  const containerPercentage = useRef(null);
  const [outputVal, setOutputVal] = useState(0);
  const [outputPercentage, setOutputPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/generator/status");
        const dataJSON = await response.json();

        console.log("OUTPUT DATA", dataJSON);

        setOutputVal(dataJSON.output);
        setOutputPercentage(dataJSON.percentage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const gaugeOptions = {
      chart: {
        type: "solidgauge",
        backgroundColor: "transparent", // Set the chart background to transparent
        marginTop: 0,
        height: "60%",
      },

      title: null,

      pane: {
        center: ["50%", "85%"],
        size: "85%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: "rgba(255, 255, 255, 0)", // Transparent background

          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },

      exporting: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },

      // the value axis
      yAxis: {
        stops: [
          [0.1, "#55BF3B"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#DF5353"], // red
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
        },
        labels: {
          y: 16,
        },
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },
    };

    // The output gauge
    const chartSpeed = Highcharts.chart(
      containerOutput.current,
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 750,
          title: {
            text: "&#x26A1; OUTPUT",
            style: {
              color: "black", // Set the color to black
            },
          },
        },

        credits: {
          enabled: false,
        },

        series: [
          {
            name: "Output",
            data: [outputVal],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">kW</span>' +
                "</div>",
            },
            tooltip: {
              valueSuffix: " kW",
            },
          },
        ],
      })
    );

    // The percentage gauge
    const chartRpm = Highcharts.chart(
      containerPercentage.current,
      Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: {
            text: "&#x26A1; %",
            style: {
              color: "black", // Set the color to black
            },
          },
        },

        series: [
          {
            name: "POWER %",
            data: [outputPercentage],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                "%" +
                "</span>" +
                "</div>",
            },
            tooltip: {
              valueSuffix: " revolutions/min",
            },
          },
        ],
      })
    );
  });

  return (
    <>
      <div ref={containerOutput}> </div>
      <div ref={containerPercentage}></div>
    </>
  );
};

export default OutputGauge;
