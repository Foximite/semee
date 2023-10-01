import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { SlEnergy } from "react-icons/sl";

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

export const CardRelatorio2 = (props: Props) => {
  const { compartmentsData } = props;

  const potenciaTotal = compartmentsData.reduce((total, compartment) => {
    return total + compartment.potencia * compartment.tempoUso;
  }, 0);

  const averageWattage = potenciaTotal / compartmentsData.length / 1000;

  // Sort compartments by custo in descending order
  const sortedCompartments = compartmentsData.sort((a, b) => b.custo - a.custo);

  // Get the top 3 compartments with the highest cost
  const top3Compartments = sortedCompartments.slice(0, 3);

  return (
    <Card className="xl:max-w-xl bg-orange-400 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5 items-center">
          <SlEnergy color="white" size={110} />
          <div>
            <span className="text-xl text-white font-semibold">
              {(potenciaTotal / 1000).toFixed(2)} kWh
            </span>
          </div>
          <div className="border-r border-gray-300 h-36 ml-4"></div>
          <div className="ml-auto mt-4 text-right">
            <div className="justify-between">
              <div>
                <h5 className="text-md font-semibold text-white">
                  Consumo Médio
                </h5>
                <p className="text-gray-200">{averageWattage.toFixed(2)} KWH</p>
              </div>
              <div>
                <h5 className="text-md font-semibold text-white">
                  Maior Consumo
                </h5>
                <ul className="text-gray-200">
                  {top3Compartments.map((compartment, index) => (
                    <li key={index}>{compartment.dispositivo}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
