import React, { Fragment, useCallback } from "react";
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
  Input,
  Selection,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  SortDescriptor,
} from "@nextui-org/react";
import { BiChevronDown } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
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

const statusColorMap: Record<string, ChipProps["color"]> = {
  100: "success",
  300: "danger",
  200: "warning",
};

interface Props {
  compartmentsData: Compartment[];
}

export default function TableRelatorios(props: Props) {
  const [filterValue, setFilterValue] = React.useState<string>("");
  const [comodoFilter, setComodoFilter] = React.useState<Selection>("all");
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "dispositivo",
    direction: "descending",
  });
  const hasSearchFilter = Boolean(filterValue);

  const columns = [
    { name: "Disposito", uid: "dispositivo", sortable: true },
    { name: "Quantidade", uid: "quantidade", sortable: true },
    { name: "Tempo de Uso", uid: "tempoUso", sortable: true },
    { name: "Potência", uid: "potencia", sortable: true },
    { name: "Cômodo", uid: "comodo", sortable: true },
    { name: "Custo", uid: "custo", sortable: true },
  ];

  const comodoOptions = [
    { name: "Sala", uid: "sala" },
    { name: "Quarto", uid: "quarto" },
    { name: "Cozinha", uid: "cozinha" },
    { name: "Casa de Banho", uid: "casaDeBanho" },
    { name: "Dependência", uid: "dependencia" },
    { name: "Escritório", uid: "escritorio" },
    { name: "Área Externa", uid: "areaExterna" },
    { name: "Garagem", uid: "garagem" },
  ];

  const { compartmentsData } = props;

  const router = useRouter();

  // Search and Filter configuration
  const filteredItems = React.useMemo(() => {
    let filteredDispositivo = [...compartmentsData];

    if (hasSearchFilter) {
      filteredDispositivo = filteredDispositivo.filter((compartment) =>
        compartment.dispositivo
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }

    if (
      comodoFilter !== "all" &&
      Array.from(comodoFilter).length !== comodoOptions.length
    ) {
      filteredDispositivo = filteredDispositivo.filter((compartment) =>
        Array.from(comodoFilter).includes(compartment.comodo)
      );
    }

    return filteredDispositivo;
  }, [compartmentsData, filterValue, comodoFilter]);

  // Pagination logic
  const [page, setPage] = React.useState(1);

  const rowsPerPage = 10;

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  // Sort configuration
  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Compartment, b: Compartment) => {
      const first = a[sortDescriptor.column as keyof Compartment] as number;
      const second = b[sortDescriptor.column as keyof Compartment] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  //Search logic
  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const getComodoName = (uid: string) => {
    const comodoOption = comodoOptions.find((option) => option.uid === uid);
    return comodoOption ? comodoOption.name : "";
  };

  const renderCell = (compartment: Compartment, columnKey: React.Key) => {
    const keyString = columnKey as string; // Convert columnKey to a string

    switch (keyString) {
      case "comodo":
        const comodoName = getComodoName(compartment.comodo);
        return <div className="flex flex-col">{comodoName}</div>;
      case "dispositivo":
        return <div className="flex flex-col">{compartment.dispositivo}</div>;
      case "quantidade":
        return <div className="flex flex-col">{compartment.quantidade}</div>;
      case "tempoUso":
        return (
          <div className="flex flex-col">{compartment.tempoUso} Horas</div>
        );
      case "potencia":
        return <div className="flex flex-col">{compartment.potencia} ⚡</div>;
      case "custo":
        const custoValue = compartment.custo;
        const color =
          custoValue < 500
            ? statusColorMap[100]
            : custoValue < 1000
            ? statusColorMap[200]
            : statusColorMap[300];
        return (
          <Chip className="" color={color} size="sm" variant="flat">
            {/* You may need to calculate the consumption here */}
            {custoValue.toFixed(2)} MZN
          </Chip>
        );
      default:
        return null;
    }
  };

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Procurar por dispositivo..."
            startContent={<BiSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<BiChevronDown className="text-small" />}
                  variant="flat"
                >
                  Cômodos
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={comodoFilter}
                selectionMode="multiple"
                onSelectionChange={setComodoFilter}
              >
                {comodoOptions.map((comodo) => (
                  <DropdownItem key={comodo.uid} className="capitalize">
                    {comodo.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, comodoFilter, hasSearchFilter]);

  return (
    <Fragment>
      <Table
        aria-label="Table with compartments data"
        topContent={topContent}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        topContentPlacement="outside"
        bottomContent={
          <div className="flex w-full justify-center">
            {pages && (
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
            )}
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
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={sortedItems} emptyContent={"Sem dispositivos!"}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Fragment>
  );
}
