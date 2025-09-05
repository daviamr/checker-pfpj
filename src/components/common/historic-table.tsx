import { AtSign, Calendar, Coins, Sheet } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

export function HistoricTable() {
  const tableHeaders = [
    { label: 'Planilha', icon: <Sheet size={16} /> },
    { label: 'Usuário', icon: <AtSign size={16} /> },
    { label: 'Criação', icon: <Calendar size={16} /> },
    { label: 'Crédito', icon: <Coins size={16} /> },
  ]

  return (
    <div>
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
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>planilha-tal.xlsx</TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>15/02/2025 12:00</TableCell>
              <TableCell>R$ 1,20</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {isLoading && (<div className="w-full flex justify-center items-center py-32"><span className="animate-spin"><Loader size={32} /></span></div>)} */}
    </div>
  )
}