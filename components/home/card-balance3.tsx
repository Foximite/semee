import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { MdOutlineKitchen } from "react-icons/md";
export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-orange-400 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <MdOutlineKitchen color="white" size={50} />
          <div className="flex flex-col">
            <span className="text-white">Cozinha</span>
            <span className="text-white text-xs">12 estimativas</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">1475 MZN</span>
          <span className="text-danger text-md">+ 7.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-md text-white">340</span>
            </div>
            <span className="text-white text-md">kWh</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-md">{"↑"}</span>
              <span className="text-md text-white">9</span>
            </div>
            <span className="text-white text-md">horas</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-sm">{"⚡"}</span>
              <span className="text-md text-white">2800</span>
            </div>
            <span className="text-white text-md">potência</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
