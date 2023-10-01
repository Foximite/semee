import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { PiMoneyLight } from "react-icons/pi";

interface Compartment {
  id: number;
  reportId: number;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
  createdAt: Date;
  updatedAt: Date;
  custo: number;
}

interface Props {
  compartmentsData: Compartment[];
}

export const CardRelatorio1 = (props: Props) => {
  const { compartmentsData } = props;

  const custoTotal = compartmentsData.reduce((total, compartment) => {
    return total + compartment.custo;
  }, 0);

  const averageCost = custoTotal / compartmentsData.length;

  const horasTotal = compartmentsData.reduce((total, compartment) => {
    return total + compartment.tempoUso;
  }, 0);

  return (
    <Card className="xl:max-w-xl bg-orange-400 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5 items-center">
          <PiMoneyLight color="white" size={110} />
          <div>
            <span className="text-xl text-white font-semibold">
              {custoTotal.toFixed(2)} MZN
            </span>
          </div>
          <div className="border-r border-gray-300 h-36 ml-4"></div>
          <div className="ml-auto mt-4 text-right">
            <div>
              <h5 className="text-md font-semibold text-white">Custo médio</h5>
              <p className="text-gray-200">{averageCost.toFixed(2)} MZN</p>
            </div>

            <h4 className="text-lg font-semibold text-white">Tarifa</h4>
            <p className="text-gray-200">7.64 (MZN/kWh)</p>
            <div className="justify-between">
              <div>
                <h5 className="text-md font-semibold text-white">
                  Horas consumidas
                </h5>
                <p className="text-gray-200">{horasTotal} horas</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
