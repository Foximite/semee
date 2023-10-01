import React from "react";
import dynamic from "next/dynamic";
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardBalance4 } from "./card-balance4";

const Chart = dynamic(
  () => import("../charts/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

const BarChart = dynamic(() => import("../charts/bar").then((mod) => mod.Bar), {
  ssr: false,
});

const DonutChart = dynamic(
  () => import("../charts/donut").then((mod) => mod.Donut),
  {
    ssr: false,
  }
);

export const Content = () => (
  <div className=" h-full">
    <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className="mt-6 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-orange-500 font-semibold">
            Dados gerais
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-5  justify-center w-full">
            <CardBalance1 />
            <CardBalance2 />
            <CardBalance3 />
            <CardBalance4 />
          </div>
        </div>

        {/* Chart */}
        <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl text-orange-500 font-semibold">
            Media de custo por mês (MZN)
          </h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
            <Chart />
          </div>
        </div>

        {/* Chart Section */}
        <div className="h-full flex flex-col gap-2 xl:flex-row">
          {/* Donut Chart */}
          <div className="w-full xl:w-1/2 bg-default-50 shadow-lg rounded-2xl p-6">
            <h3 className="text-xl text-orange-500  font-semibold">
              Custo por cómodo (MZN)
            </h3>
            <DonutChart />
          </div>

          {/* Column (Bar) Chart */}
          <div className="w-full xl:w-1/2 bg-default-50 shadow-lg rounded-2xl p-6">
            <h3 className="text-xl text-orange-500 font-semibold">
              Consumo por dispositivo (kWh)
            </h3>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  </div>
);
