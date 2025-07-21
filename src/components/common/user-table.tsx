import { AtSign, Calendar, Edit, Eye, Trash, User } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Button } from "../ui/button"
import { CreateUser } from "../create-user"

export function UserTable() {
  const tableHeaders = [
    { label: 'Usuário', icon: <User size={16} /> },
    { label: 'E-mail', icon: <AtSign size={16} /> },
    { label: 'Criação', icon: <Calendar size={16} /> },
    { label: '', icon: null }
  ]

  return (
    <div>
      <div className="flex justify-end pb-2">
        <CreateUser/>
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
          {Array(3).fill(null).map((_, i) => (
            <TableRow key={i}>
              <TableCell>Fulano</TableCell>
              <TableCell>sicrano@beltrano.com</TableCell>
              <TableCell>24/12/20, 14:30h</TableCell>
              <TableCell className="flex justify-end gap-2">
                <Button size={"icon"} variant={"outline"}><Eye size={16} /></Button>
                <Button size={"icon"} variant={"outline"}><Edit size={16} /></Button>
                <Button size={"icon"} variant={"outline"}><Trash size={16} /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}