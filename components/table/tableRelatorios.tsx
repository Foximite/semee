import React, { Fragment, useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
  Pagination,
} from "@nextui-org/react";

import { DeleteIcon } from "./deleteIcon";
import { useSession } from "next-auth/react"; // Import the session hook from next-auth/react
import getReportList from "@/utils/prisma/getReportList";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Compartment {
  id: number;
  reportId: number;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
  createdAt: string;
  updatedAt: string;
}

interface OnlyReport {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  totalPotencia: number;
  totalTempoUso: number;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  100: "success",
  300: "danger",
  200: "warning",
};

export default function TableRelatorios() {
  const columns = [
    { name: "#", uid: "id" },
    { name: "Data de Criação", uid: "dataCriacao" },
    { name: "Consumo total", uid: "potenciaTotal" },
    { name: "Custo total", uid: "custoTotal" },
    { name: "Acções", uid: "accoes" },
  ];

  // Map over the compartmentData array to create rows for the table
  const { data: session } = useSession(); // Get the session data
  const [reportsData, setReportsData] = useState<OnlyReport[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch the compartment data when the component mounts
    if (session && session.user?.email) {
      const userEmail = session.user?.email;
      getReportList(userEmail)
        .then((data) => {
          if (data) {
            const onlyReportData = data.map((report) => {
              const totalPotencia = report.compartments.reduce(
                (total, compartment) =>
                  total + compartment.potencia * compartment.tempoUso,
                0
              );
              const totalHoras = report.compartments.reduce(
                (total, compartment) => total + compartment.tempoUso,
                0
              );

              return {
                id: report.id,
                userId: report.userId,
                createdAt: new Date(report.createdAt).toLocaleString("pt-PT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                updatedAt: new Date(report.updatedAt).toLocaleString("pt-PT", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                totalPotencia: totalPotencia, // Add the calculated total potencia
                totalTempoUso: totalHoras,
              };
            });

            setReportsData(onlyReportData);
          }
        })
        .catch((error) => {
          console.error("Error fetching compartment data:", error);
        });
    }
  }, [session]);

  const tableViewHandler = (reportsDatas: OnlyReport) => {
    router.push("/relatorio/" + reportsDatas.id);
  };

  const tableDeleteHandler = (reportsDatas: OnlyReport) => {
    // dispatch(deleteDataFromCompartment(row.id)); // Assuming you have a delete action in your Redux slice
  };

  type Rows = (typeof reportsData)[0];

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages =
    reportsData.length > 0 ? Math.ceil(reportsData.length / rowsPerPage) : 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return reportsData.slice(start, end);
  }, [page, reportsData]);

  const renderCell = React.useCallback(
    (reportsDatas: OnlyReport, columnKey: React.Key, handlers: any) => {
      const cellValue = reportsDatas[columnKey as keyof Rows];

      switch (columnKey) {
        case "id":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{reportsDatas.id}</p>
            </div>
          );
        case "dataCriacao":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {reportsDatas.createdAt}
              </p>
            </div>
          );
        case "potenciaTotal":
          const calculatedValue = reportsDatas.totalPotencia / 1000;
          const valueInKwh = calculatedValue.toFixed(2);
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{valueInKwh} ⚡</p>
            </div>
          );
        case "custoTotal":
          const custoTotalValue = (reportsDatas.totalPotencia / 1000) * 7.64;
          const valueInMZN = custoTotalValue.toFixed(2);
          const color =
            custoTotalValue < 500
              ? statusColorMap[100]
              : custoTotalValue < 1000
              ? statusColorMap[200]
              : statusColorMap[300];

          return (
            <Chip className="capitalize" size="sm" variant="flat" color={color}>
              <span>{valueInMZN} MZN</span>
            </Chip>
          );
        case "accoes":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Visualizar">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <AiOutlineEye
                    onClick={() => handlers.tableViewHandler(reportsDatas)}
                  />
                </span>
              </Tooltip>

              {/* <Tooltip color="danger" content="Apagar">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon
                    onClick={() => handlers.tableDeleteHandler(reportsDatas)}
                  />
                </span>
              </Tooltip> */}
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <Fragment>
      {reportsData && (
        <Table
          aria-label="Example table with custom cells pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="warning"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
                classNames={{
                  cursor: "text-white", // Add this class to change button text color to white
                }}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={items} emptyContent={"Sem relatórios!"}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey, {
                      tableViewHandler,
                    })}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </Fragment>
  );
}
