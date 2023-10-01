"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // Import the session hook from next-auth/react
import getReportList from "@/utils/prisma/getReportList";
import { title } from "@/components/primitives";
import TableRelatorios from "@/components/table/tableRelatorios";

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
}

interface Reports {
  compartments: Compartment[];
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function RelatorioList() {
  const { data: session } = useSession(); // Get the session data
  const [reportsData, setReportsData] = useState<Reports[]>([]);

  useEffect(() => {
    // Fetch the compartment data when the component mounts
    if (session && session.user?.email) {
      const userEmail = session.user?.email;
      const report = getReportList(userEmail)
        .then((data) => {
          if (data) setReportsData(data);
        })
        .catch((error) => {
          console.error("Error fetching compartment data:", error);
        });
    }
  }, [session]);

  // Render the compartment data in your component
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className={title({ color: "yellow" })}>Lista de Relatórios</h1>
      </div>

      <TableRelatorios />
    </div>
  );
}
