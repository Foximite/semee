import React from "react";
import Chart from "react-apexcharts";

const options: ApexCharts.ApexOptions = {
  chart: {
    id: "mixed-chart",
  },
  xaxis: {
    categories: [
      "Sala",
      "Quarto",
      "Cozinha",
      "Casa de Banho",
      "Dependência",
      "Escritório",
      "Área Externa",
      "Garagem",
    ],
  },
  stroke: {
    width: [0, 2, 4],
  },
  markers: {
    size: 6,
  },
  legend: {
    labels: {
      colors: "#333",
    },
  },
  yaxis: [
    {
      title: {
        text: "Custo (MZN)",
      },
    },
    {
      title: {
        text: "Consumo (kWh)",
      },
      opposite: true,
    },
  ],
  colors: ["#006FEE", "#17C964", "#fb923c"],
};

const series = [
  {
    name: "Custo (MZN)",
    type: "column",
    data: [2500, 2800, 2200, 2900, 2100, 3100, 2700, 3000],
  },
  {
    name: "Consumo (kWh)",
    type: "line",
    data: [110, 130, 90, 140, 120, 150, 100, 130],
    yAxisIndex: 1,
  },
  {
    name: "Horas de Uso",
    type: "area",
    data: [5, 6, 4, 6, 4, 7, 5, 6],
    yAxisIndex: 2,
  },
];

export const Area = () => {
  return (
    <>
      <div className="w-full z-20">
        <div id="chart">
          <Chart options={options} series={series} type="line" height={400} />
        </div>
      </div>
    </>
  );
};
