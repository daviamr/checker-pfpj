import { Download, Edit, Eye, Trash, User, VenusAndMars } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Button } from "../ui/button"
import { PaginationDemo } from "../pagination"
import { UploadSheet } from "../upload-sheet"

export function CheckerTable() {
  const tableHeaders = [
    { label: 'Nome', icon: <User size={16} /> },
    { label: 'Documento', icon: <VenusAndMars size={16} /> },
    { label: 'Número', icon: null }
  ]

  return (
    <div>
      <div className="flex justify-end pb-2">
        <UploadSheet/>
        <Button variant={"secondary"} className="ml-4"><Download size={16} /> Download Planilha</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((h, i) => (
              <TableHead className="w-[140px]" key={i}>
                <span className="flex items-center gap-2">
                  {h.icon} {h.label}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10).fill(null).map((_, i) => (
            <TableRow key={i}>
              <TableCell>Fulano</TableCell>
              <TableCell>Masculino</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Button size={"icon"} variant={"outline"}><Eye size={16} /></Button>
                <Button size={"icon"} variant={"outline"}><Edit size={16} /></Button>
                <Button size={"icon"} variant={"outline"}><Trash size={16} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="py-4">
        <PaginationDemo />
      </div>
    </div>
  )
}