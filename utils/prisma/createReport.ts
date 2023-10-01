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


interface CreateReportArgs {
    session: Session | null
    compartmentData: CompartmentData[]
}


export default async function createdReport({session, compartmentData} : CreateReportArgs){

if (session && session.user) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email?.toString() },
    });
    if (user) {
      const createdReport = await prisma.report.create({
        data: {
          userId: user.id, // You need to provide the user's ID here
        },
      });


      // Loop through the compartmentData and save each entry to the database
      for (const entry of compartmentData) {
        await prisma.compartment.create({
          data: {
            reportId: createdReport.id,
            comodo: entry.comodo,
            dispositivo: entry.dispositivo,
            quantidade: entry.quantidade,
            tempoUso: entry.tempoUso,
            potencia: entry.potencia,
          },
        });
      }
      return createdReport
    }
  }
}