import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { BiBath } from "react-icons/bi";
export const CardBalance4 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <BiBath size={50} />
          <div className="flex flex-col">
            <span className="">Casa de Banho</span>
            <span className=" text-xs">5 estimativas</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className=" text-xl font-semibold">589 MZN</span>
          <span className="text-danger text-md">+ 8.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-md ">90</span>
            </div>
            <span className=" text-md">kWh</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-md">{"↑"}</span>
              <span className="text-md ">7</span>
            </div>
            <span className=" text-md">horas</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-sm">{"⚡"}</span>
              <span className="text-md ">950</span>
            </div>
            <span className=" text-md">potência</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
