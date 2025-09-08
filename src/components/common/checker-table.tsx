/* eslint-disable react-refresh/only-export-components */

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleX, Copy, Download, Filter, Loader, RefreshCcw, Search, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { UploadSheet } from "../upload-sheet"
import { SheetInfo } from "../sheetIconsInfo"
import { TooltipPadrao } from "../tooltip"
import { useSheetController } from "@/pages/Checker/sheet-controller"
import { Label } from "../ui/label"
import { CompanyInfo } from "../company-info"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    numero: "(21) 988776-65544",
    anatel: 'Válido',
    status: 'success',
    operadora: "Claro",
    pj: "Não",
    documento: "123.456.789-00",
    dataHoraConsulta: '25/10/2398, 18:09h',
    razaoSocial: 'S/R',
    porte: 'EI',
    cnae: '1234567890',
    cidade: 'Mato Grosso, MT',
    uf: 'MT',
    cs: '1234',
    socios: '1',
  },
  {
    id: "m5gr84i10",
    numero: "(21) 988776-65544",
    anatel: 'Válido',
    status: 'success',
    operadora: "Tim",
    pj: "Sim",
    documento: "91.081.895/0001-91",
    dataHoraConsulta: '12/12/3498, 13:39h',
    razaoSocial: 'Empresa MEI',
    porte: 'MEI',
    cnae: '1234567890',
    cidade: 'Rio de Janeiro, RJ',
    uf: 'RJ',
    cs: '5678',
    socios: '3',
  },
  {
    id: "m5gr84i11",
    numero: "(21) 988776-65544",
    anatel: 'Inválido',
    status: 'error',
    operadora: "Vivo",
    pj: "Sim",
    documento: "82.332.230/0001-12",
    dataHoraConsulta: '01/07/9888, 12:18h',
    razaoSocial: 'Empresa LTDA',
    porte: 'LTDA',
    cnae: '1234567890',
    cidade: 'São Paulo, SP',
    uf: 'SP',
    cs: '9012',
    socios: '5',
  }
]

export type Payment = {
  id: string
  numero: string
  anatel: string
  status: string
  operadora: string
  pj: string
  documento: string
  dataHoraConsulta: string
  razaoSocial: string
  porte: string
  cnae: string
  cidade: string
  uf: string
  cs: string
  socios: string
}

export function CheckerTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [maxRows, setMaxRows] = React.useState(50)
  const [isLoading, setIsLoading] = React.useState(false)
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [hasSelectedRows, setHasSelectedRows] = React.useState(false)
  const [showFilter, setShowFilter] = React.useState<string[]>(['pj'])
  const [showFilters, setShowFilters] = React.useState(false)
  const { exportDefaultSheet } = useSheetController()
  const copyFormattedData = async (rowData: Payment) => {
    const formattedText = `Número: ${rowData.numero} | Operadora: ${rowData.operadora} | PF/PJ: ${rowData.pj} | Data de Consulta: ${rowData.dataHoraConsulta}`

    try {
      await navigator.clipboard.writeText(formattedText);
      console.log('Dados copiados com sucesso!');
    } catch (err) {
      console.error('Erro ao copiar dados:', err);
      const textArea = document.createElement('textarea');
      textArea.value = formattedText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all" />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row" />
      ),
      enableSorting: false,
      enableHiding: false,
      size: 30,
    },
    {
      accessorKey: "numero",
      header: "Número",
      cell: ({ row }) => {
        const isSelected = row.getIsSelected()
        return (
          <div>
            {isSelected ? (
              <Input type="number" className="w-40" />
            ) : (
              <p>{row.getValue("numero")}</p>
            )}
          </div>
        )
      },
      size: 180,
    },
    {
      accessorKey: "anatel",
      header: "Anatel",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("anatel")}</div>),
      size: 100,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (<div className="capitalize flex items-center gap-2">
        {row.getValue("status") === 'success' && <span><TooltipPadrao message="Processado com sucesso"><CheckCircle size={16} className="text-green-500" /></TooltipPadrao></span>}
        {row.getValue("status") === 'error' &&
          <span>
            <TooltipPadrao message="Erro ao processar">
              <CircleX size={16} className="text-red-500" />
            </TooltipPadrao>
          </span>}
        {row.getValue("status") === 'pending' && <span className="flex gap-2"><TooltipPadrao message="Processando"><Loader size={16} className="animate-spin" /></TooltipPadrao><span className="text-xs animate-pulse">94%</span></span>}
      </div>),
      size: 80,
    },
    {
      accessorKey: "pj",
      header: "PJ",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("pj")}</div>),
      size: 80,
    },
    {
      accessorKey: "operadora",
      header: "Operadora",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("operadora")}</div>),
      size: 100,
    },
    {
      accessorKey: "documento",
      header: "Documento",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("documento")}</div>),
    },
    {
      accessorKey: "razaoSocial",
      header: "Razão Social",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("razaoSocial")}</div>),
    },
    {
      accessorKey: "porte",
      header: "Porte",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("porte")}</div>),
      size: 100,
    },
    {
      accessorKey: "cnae",
      header: "CNAE",
      cell: ({ row }) => (
        <>
          <TooltipPadrao message="Atividade tal tal tal">
            <div className="capitalize">{row.getValue("cnae")}</div>
          </TooltipPadrao>
        </>),
      size: 100,
    },
    {
      accessorKey: "cidade",
      header: "Cidade",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("cidade")}</div>),
      size: 120,
    },
    {
      accessorKey: "cs",
      header: "CS",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("cs")}</div>),
      size: 40,
    },
    {
      accessorKey: "socios",
      header: "Socios",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("socios")}</div>),
      size: 60,
    },
    {
      accessorKey: "dataHoraConsulta",
      header: "Data Consulta",
      cell: ({ row }) => (<div className="capitalize">{row.getValue("dataHoraConsulta")}</div>),
    },
    {
      accessorKey: "utils",
      header: "",
      cell: ({ row }) => (<div className="capitalize flex justify-end gap-2">
        { }
        <TooltipPadrao message="Reprocessar linha">
          <Button
            variant={"outline"}
            size={"icon"}>
            <RefreshCcw />
            {row.getValue("select")}</Button>
        </TooltipPadrao>
        <CompanyInfo
          numero={row.getValue("numero")}
          anatel={row.getValue("anatel")}
          status={row.getValue("status")}
          pj={row.getValue("pj")}
          operadora={row.getValue("operadora")}
          documento={row.getValue("documento")}
          razaoSocial={row.getValue("razaoSocial")}
          porte={row.getValue("porte")}
          cnae={row.getValue("cnae")}
          cidade={row.getValue("cidade")}
          cs={row.getValue("cs")}
          socios={row.getValue("socios")}
          data={row.getValue("dataHoraConsulta")}/>
        <TooltipPadrao message="Copiar dados">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => copyFormattedData(row.original)}>
            <Copy />
            {row.getValue("select")}</Button>
        </TooltipPadrao>

        {/* {row.getIsSelected() && (
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => row.toggleSelected()}>
            <Check color="green" />
          </Button>
        )}
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => row.toggleSelected()}>
          <Edit />
          {row.getValue("select")}</Button>
        <Button variant={"outline"} size={"icon"}><Trash />{row.getValue("select")}</Button> */}
      </div>
      ),
      size: 180,
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection, },
  })

  React.useEffect(() => {
    const selectedRows = table.getSelectedRowModel().rows
    const ids = selectedRows.map(row => row.original.id)

    setSelectedIds(ids)
    setHasSelectedRows(ids.length > 0)
  }, [rowSelection, table])

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      table.setPageSize(maxRows);
      setIsLoading(false)
    }, 1000)
  }, [maxRows, table]);

  console.log(showFilter)

  return (
    <div className="relative w-full max-w-[1536px]">
      <div className="relative flex items-center py-4">
        <Search size={16} className="absolute left-2" />
        <div className="flex items-center gap-4 w-full">
          <Input
            placeholder="Filtrar por PF/PJ"
            value={(table.getColumn("pfpj")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("pfpj")?.setFilterValue(event.target.value)}
            className="pl-8" />

          {showFilter.includes('documento') && (
            <Input
              placeholder="Filtrar por Documento"
              value={(table.getColumn("documento")?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn("documento")?.setFilterValue(event.target.value)}
            />
          )}

          <Button variant={"outline"} size={"icon"} onClick={() => setShowFilters(prev => !prev)}>
            <Filter size={16} />
          </Button>

          <SheetInfo total={102} success={92} error={10} pf={10} pj={22} unkpfpj={13} />
        </div>

        <div className="flex w-full justify-end">
          <div className='flex items-center gap-4'>
            {/* <Button variant={"outline"} className={`hidden ${hasSelectedRows && 'flex'}`} size={"icon"}><SquarePen size={16} /></Button> */}
            <TooltipPadrao message="Excluir Selecionados">
              <Button variant={"outline"} className={`hidden ${hasSelectedRows && 'flex'}`} size={"icon"}><Trash size={16} /></Button>
            </TooltipPadrao>
            <TooltipPadrao message="Download Selecionados">
              <Button variant={"outline"} className={`hidden ${hasSelectedRows && 'flex'}`}
                onClick={() => { console.log(selectedIds) }}><Download size={16} /> Seleção</Button>
            </TooltipPadrao>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-sm pl-2">
              Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}>
                <ChevronsLeft />
              </Button>
              <Button
                variant="outline"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}>
                <ChevronLeft />
              </Button>

              <Button
                variant="outline"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}>
                <ChevronRight />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}>
                <ChevronsRight />
              </Button>
            </div>
          </div>
          <UploadSheet />
          <TooltipPadrao message="Download Total">
            <Button variant={"secondary"} className="ml-4" onClick={exportDefaultSheet}><Download size={16} /> Download</Button>
          </TooltipPadrao>
        </div>
      </div>
      <div className="rounded-md border relative">
        <div className="absolute right-2 top-[2px] z-10">
          <Select value={maxRows.toString()} onValueChange={(value) => setMaxRows(Number(value))}>
            <SelectTrigger className="font-bold border-none">{maxRows}</SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='50'>50</SelectItem>
                <SelectItem value='100'>100</SelectItem>
                <SelectItem value='200'>200</SelectItem>
                <SelectItem value='500'>500</SelectItem>
                <SelectItem value='1000'>1000</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Table className="table-fixed w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="py-2" style={{ width: `${header.getSize()}px` }}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="relative h-32">
                  <Loader size={32} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center">
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <span className="text-sm text-gray-600 pl-2">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            <ChevronLeft />
          </Button>

          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}>
            <ChevronsRight />
          </Button>
        </div>
      </div>
      {
        showFilters && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
            onClick={() => setShowFilters(false)}
          >
            <div
              className="bg-background p-6 rounded-lg shadow-lg w-100"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-2xl pb-4 border-b">Selecione os filtros</p>
              <div className="flex items-center gap-2 text-white py-4">
                <Input
                  type="checkbox"
                  className="max-w-4 h-4 w-4"
                  id="documento"
                  checked={showFilter.includes('documento')}
                  onChange={(e) => {
                    const value = 'documento';
                    if (e.target.checked) {
                      setShowFilter(prev => [...prev, value]);
                    } else {
                      setShowFilter(prev => prev.filter(item => item !== value));
                    }
                  }}
                />
                <Label htmlFor="documento" className="text-white cursor-pointer">
                  Documento
                </Label>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
