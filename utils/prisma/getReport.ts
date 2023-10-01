"use server";

import { Session } from 'next-auth/core/types';
import { prisma } from '../../lib/prisma';

type CompartmentData = {
    id: string;
    comodo: string;
    dispositivo: string;
    quantidade: number;
    tempoUso: number;
    potencia: number;
  };

export default async function getReport(userEmail: string, relatorioId: string){

if (userEmail) {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    
    if (user) {
      const report = await prisma.report.findUnique({
        where: {
          id: parseInt(relatorioId),
        },
        include: {
          compartments: true, // Include compartments related to the report
        },
      });

      if (report) {
        return report.compartments; // Return the compartments associated with the report
      } else {
        console.log("No report found with the given ID");
      }
    } else {
      console.log("No user found with the given email");
    }
    }
  }