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


import { useRouter } from "next/navigation";

interface Empresa {
  id: number;
  nome: string;
  telefone: string;
  estado: string;
  email: string;
}

interface Props {
  empresasData: Empresa[];
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  100: "success",
  300: "danger",
  200: "warning",
};

export default function TableEmpresas(props: Props) {
  const columns = [
    { name: "#", uid: "id" },
    { name: "Nome", uid: "nome"},
    { name: "Telefone", uid: "telefone" },
    { name: "Estado", uid: "estado" },
    { name: "E-mail", uid: "email" },
  ];

  const { empresasData } = props;
  const router = useRouter();


  type Rows = (typeof empresasData)[0];

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages =
  empresasData.length > 0 ? Math.ceil(empresasData.length / rowsPerPage) : 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return empresasData.slice(start, end);
  }, [page, empresasData]);


  const renderCell = React.useCallback(
    (empresasData: Empresa, columnKey: React.Key, handlers: any) => {
      const cellValue = empresasData[columnKey as keyof Rows];

      switch (columnKey) {
        case "id":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{empresasData.id}</p>
            </div>
          );
        case "nome":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {empresasData.nome}
              </p>
            </div>
          );
        case "telefone":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{empresasData.telefone}</p>
            </div>
          );
        case "estado":
      
          const color =
          empresasData.estado === "activo"
              ? statusColorMap[100]
              : empresasData.estado === "inactivo"
              ? statusColorMap[300]
              : statusColorMap[200];

          return (
            <Chip className="capitalize" size="sm" variant="flat" color={color}>
              <span>{empresasData.estado}</span>
            </Chip>
          );
        case "email":
          return (
            <div className="flex flex-col">
            <p className="text-bold text-sm">{empresasData.email}</p>
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
      {empresasData && (
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
          <TableBody items={items} emptyContent={"Sem empresas!"}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey, {
                     
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
