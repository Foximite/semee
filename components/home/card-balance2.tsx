import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { LiaBedSolid } from "react-icons/lia";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <LiaBedSolid size={50} />
          <div className="flex flex-col">
            <span className="">Quarto</span>
            <span className=" text-xs">20 estimativas</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className=" text-xl font-semibold">1562 MZN</span>
          <span className="text-success text-md">- 5.3%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-md ">358</span>
            </div>
            <span className=" text-md">kWh</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-md">{"↑"}</span>
              <span className="text-md ">12</span>
            </div>
            <span className=" text-md">horas</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-sm">{"⚡"}</span>
              <span className="text-md ">3200</span>
            </div>
            <span className=" text-md">potência</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
