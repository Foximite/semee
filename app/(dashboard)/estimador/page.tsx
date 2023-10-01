"use client";
import { title } from "@/components/primitives";

import React, { useEffect } from "react";
import ImageCard from "@/components/imageCards/imageCard";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { TbReport } from "react-icons/tb";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { clearAllData } from "@/app/redux/slices/compartmentSlice";
import { useSession } from "next-auth/react";
import createdReport from "@/utils/prisma/createReport";

export default function Estimador() {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const compartmentData = useAppSelector((state) => state.compartmentData.data);

  const handleFinalReportClick = async () => {
    try {
      const report = await createdReport({ session, compartmentData });

      // After saving, clear the data from the Redux store
      dispatch(clearAllData());

      // Navigate to the "/relatorio" page
      if (report) router.push("/relatorio/" + report.id);
    } catch (error) {
      console.error("Error saving data to DB:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="text-center">
        <h1 className={title({ color: "yellow" })}>Estimador</h1>
      </div>
      <ImageCard />
      <div className="text-center mt-16">
        <Button
          color="warning"
          variant="bordered"
          size="lg"
          startContent={<TbReport />}
          disabled={compartmentData.length === 0}
          onPress={() => {
            // Logic to save to DB
            handleFinalReportClick();
          }}
        >
          Relatório final
        </Button>
      </div>
    </React.Fragment>
  );
}
