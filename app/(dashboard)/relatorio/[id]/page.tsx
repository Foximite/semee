"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Import the session hook from next-auth/react
import getReport from "@/utils/prisma/getReport";
import { title } from "@/components/primitives";
import { Suspense } from "react";

import dynamic from "next/dynamic";
import { CardRelatorio1 } from "../../../../components/relatorioCards/cardRelatorio1";
import { CardRelatorio2 } from "../../../../components/relatorioCards/cardRelatorio2";
import TableRelatorio from "@/components/table/tableRelatorio";
import Loading from "./loading";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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

const Chart = dynamic(
  () => import("../../../../components/charts/area").then((mod) => mod.Area),
  {
    ssr: false,
  }
);

export default function Relatorio({ params }: { params: { id: string } }) {
  const { data: session } = useSession(); // Get the session data
  const [compartmentsData, setCompartmentData] = useState<Compartment[]>([]);
  const router = useRouter();

  let report;
  let finalData;
  useEffect(() => {
    // Fetch the compartment data when the component mounts
    if (session && session.user?.email) {
      const userEmail = session.user?.email;
      getReport(userEmail, params.id)
        .then((data) => {
          if (data) {
            const finalData = data.map((item) => ({
              ...item,
              custo: (item.potencia / 1000) * item.tempoUso * 7.64,
            }));
            setCompartmentData(finalData);
          }
        })
        .catch((error) => {
          console.error("Error fetching compartment data:", error);
        });
    }
  }, [session, params.id]);

  // Render the compartment data in your component
  return (
    <Suspense fallback={<Loading />}>
      <section>
        <div className=" h-full">
          <div className="flex">
            {/* <Button
              color="warning"
              variant="bordered"
              size="lg"
              startContent={<BsArrowReturnLeft />}
              onPress={() => {
                router.push("/relatorios");
              }}
            >
              Voltar
            </Button> */}
          </div>
          <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
            <div className="mt-6 gap-6 flex flex-col w-full">
              {/* {data} */}
              {/* Card Section Top */}
              {/* <h3 className="text-xl text-orange-500 font-semibold">Totais</h3> */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl text-orange-500 font-semibold">
                  Totais
                </h3>
                <div className="flex justify-between">
                  <CardRelatorio1 compartmentsData={compartmentsData} />
                  <CardRelatorio2 compartmentsData={compartmentsData} />
                </div>
              </div>

              {/* Chart */}
              <div className="h-full flex flex-col gap-2">
                <h3 className="text-xl text-orange-500 font-semibold">
                  Consumo Geral
                </h3>
                <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
                  <Chart />
                </div>
              </div>

              {/* Consumo por comodo */}
              <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
                <div className="flex  flex-wrap justify-between">
                  <h3 className="text-center text-orange-500 text-xl font-semibold">
                    Consumos
                  </h3>
                </div>
                <TableRelatorio compartmentsData={compartmentsData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}
