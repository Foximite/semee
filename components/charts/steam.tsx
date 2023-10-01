import React from "react";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [
  {
    name: "2022",
    data: [
      2100, 2200, 2400, 2300, 2500, 2600, 2800, 2900, 3000, 3100, 3300, 3400,
    ],
  },
  {
    name: "2023",
    data: [
      3500, 3300, 3200, 3100, 3300, 3400, 3600, 3700, 3800, 3900, 4000, 3900,
    ],
  },
];

const options: Props["options"] = {
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  dataLabels: { enabled: false },
  colors: ["#FFA500", "#FFD700"], // Orange shades
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const Steam = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="chart">
          <Chart options={options} series={state} type="area" height={425} />
        </div>
      </div>
    </>
  );
};
