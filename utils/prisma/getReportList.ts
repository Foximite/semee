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

export default async function getReportList(userEmail: string){

if (userEmail) {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (user) {
      const createdReports = await prisma.report.findMany({
         where: {
                user: {
                    id: user.id,
                },
                },
                include: { compartments: true },
      });

      return createdReports
    }else {
        console.log("No reports found for the user");
      }
    }
  }