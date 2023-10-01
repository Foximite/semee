"use client";
import { title } from "@/components/primitives";
import { useState, useEffect } from "react";
import TableEmpresas from "@/components/table/tableEmpresas";

interface Empresa {
  id: number;
  nome: string;
  telefone: string;
  estado: string;
  email: string;
}

export default function Empresas() {
  const [data, setData] = useState<Empresa[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/empresas/api", {
        next: { revalidate: 10 },
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const requestedData = await res.json();
      setData(requestedData);
      console.log("running");
    }
    fetchData();

    // Set up an interval to fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 2000); // 10,000 milliseconds = 10 seconds

    // Return a cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section>
      <div className="text-center">
        <h1 className={title({ color: "yellow" })}>Empresas</h1>
      </div>
      <div className="mt-6">
        <TableEmpresas empresasData={data} />

        {/* {data.map((empresa) => (
                    <div key={empresa.id}>
                        <p>ID: {empresa.id}</p>
                        <p>Nome: {empresa.nome}</p>
                        <p>Telefone: {empresa.telefone}</p>
                        <p>Estado: {empresa.estado}</p>
                        <p>Email: {empresa.email}</p>
                    </div>
                ))} */}
      </div>
    </section>
  );
}
