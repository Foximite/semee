import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { PiTelevisionSimpleLight } from "react-icons/pi";

export const CardBalance1 = () => {
  return (
    <Card className="xl:max-w-sm bg-orange-400 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <PiTelevisionSimpleLight color="white" size={50} />
          <div className="flex flex-col">
            <span className="text-white">Sala</span>
            <span className="text-white text-xs">15 estimativas</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">2582 MZN</span>
          <span className="text-danger text-md">- 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-md text-white">582</span>
            </div>
            <span className="text-white text-md">kWh</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-md">{"↑"}</span>
              <span className="text-md text-white">8</span>
            </div>
            <span className="text-white text-md">horas</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-sm">{"⚡"}</span>
              <span className="text-md text-white">5900</span>
            </div>
            <span className="text-white text-md">potência</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
