import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
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

import { EditIcon } from "./editIcon";
import { DeleteIcon } from "./deleteIcon";
import { PlusIcon } from "./plusIcon";
import ModalComodos from "../modal/modalComodos";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import { deleteDataFromCompartment } from "@/app/redux/slices/compartmentSlice";

// Define the type
type CompartmentData = {
  id: string;
  comodo: string;
  dispositivo: string;
  quantidade: number;
  tempoUso: number;
  potencia: number;
};

const statusColorMap: Record<string, ChipProps["color"]> = {
  100: "success",
  300: "danger",
  200: "warning",
};

export default function TableComodos(props: { compartment: string }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Rows | null>(null); // Track the selected row for editing

  const dispatch = useAppDispatch();
  const columns = [
    { name: "Disposito", uid: "dispositivo" },
    { name: "Quantidade", uid: "quantidade" },
    { name: "Tempo de Uso", uid: "tempoUso" },
    { name: "Potência", uid: "potencia" },
    { name: "Acções", uid: "accoes" },
  ];

  // Use useAppSelector to get compartmentData from the Redux state
  const compartmentData = useAppSelector((state) => state.compartmentData.data);

  // Filter the compartmentData based on the props.compartment
  const filteredCompartmentData = compartmentData.filter(
    (entry) => entry.comodo === props.compartment
  );

  // Map over the compartmentData array to create rows for the table
  const rows: CompartmentData[] = filteredCompartmentData.map(
    (entry, index) => ({
      id: entry.id, // You can generate your id here
      comodo: entry.comodo,
      dispositivo: entry.dispositivo,
      quantidade: entry.quantidade,
      tempoUso: entry.tempoUso,
      potencia: entry.potencia,
    })
  );

  useEffect(() => {
    if (selectedRow) {
    }
  }, [selectedRow]);

  const tableAddHandler = () => {
    setSelectedRow(null);
    setModalIsOpen(true);
  };
  const tableEditHandler = (row: Rows) => {
    setSelectedRow(row); // Set the selected row for editing
    setModalIsOpen(true);
  };
  const tableDeleteHandler = (row: Rows) => {
    setModalIsOpen(false);
    dispatch(deleteDataFromCompartment(row.id)); // Assuming you have a delete action in your Redux slice
  };

  type Rows = (typeof rows)[0];

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = rows.length > 0 ? Math.ceil(rows.length / rowsPerPage) : 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return rows.slice(start, end);
  }, [page, rows]);

  const renderCell = React.useCallback(
    (rows: Rows, columnKey: React.Key, handlers: any) => {
      const cellValue = rows[columnKey as keyof Rows];

      switch (columnKey) {
        case "dispositivo":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "quantidade":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "tempoUso":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue} Horas</p>
            </div>
          );
        case "potencia":
          const calculatedValue = rows.potencia;
          const color =
            calculatedValue < 500
              ? statusColorMap[100]
              : calculatedValue < 1000
              ? statusColorMap[200]
              : statusColorMap[300];

          return (
            <Chip className="capitalize" color={color} size="sm" variant="flat">
              {cellValue} Watts
            </Chip>
          );
        case "accoes":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Editar">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon onClick={() => handlers.tableEditHandler(rows)} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Apagar">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon
                    onClick={() => handlers.tableDeleteHandler(rows)}
                  />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            color="warning"
            className="text-white"
            onClick={tableAddHandler}
            endContent={<PlusIcon />}
          >
            Adicionar dispositivo
          </Button>
        </div>
      </div>
    );
  }, []);

  return (
    <Fragment>
      {compartmentData && (
        <Table
          aria-label="Example table with custom cells pagination"
          topContent={topContent}
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
          <TableBody items={items} emptyContent={"Sem dispositivos!"}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey, {
                      tableEditHandler,
                      tableDeleteHandler,
                    })}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
      <ModalComodos
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        compartment={props.compartment}
        initialData={selectedRow as Rows | null}
      />
    </Fragment>
  );
}
