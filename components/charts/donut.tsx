import React from "react";
import Chart, { Props } from "react-apexcharts";

const series = [200, 300, 250, 150, 180, 120, 90, 220]; // Cost values for each compartment

const options: Props["options"] = {
  chart: {
    type: "donut",
    toolbar: {
      show: true,
    },
  },
  labels: [
    "Sala",
    "Quarto",
    "Cozinha",
    "Casa de Banho",
    "Dependencia",
    "Escritorio",
    "Área Externa",
    "Garagem",
  ],
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

export const Donut = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="donut-chart">
          <Chart options={options} series={series} type="donut" height={425} />
        </div>
      </div>
    </>
  );
};
