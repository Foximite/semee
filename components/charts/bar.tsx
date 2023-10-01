import React from "react";
import Chart, { Props } from "react-apexcharts";

const options: Props["options"] = {
  chart: {
    type: "bar",
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    categories: [
      "Televisão",
      "Forno",
      "Maquina de Lavar Roupa",
      "Consola",
      "Computador",
    ], // Top 5 consuming devices
  },
  colors: ["#FFA500"],
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

const series = [
  { name: "Despositivos", data: [30, 40, 35, 50, 49] }, // Sample data for top consuming devices
];
export const Bar = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="donut-chart">
          <Chart options={options} series={series} type="bar" height={350} />
        </div>
      </div>
    </>
  );
};
