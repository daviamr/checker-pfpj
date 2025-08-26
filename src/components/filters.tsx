import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CircleCheck, Filter } from "lucide-react"

export function FiltersSheet() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" size={'icon'}>
            <Filter size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Selecione os filtros</DialogTitle>
            <DialogDescription className="pb-4 border-b">
              Selecione os filtros que deseja aplicar na planilha.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 grid gap-2">
            <div className="flex items-center gap-2">
              <Input type="checkbox" className="max-w-4" id="document" />
              <Label htmlFor="document">Documento</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Voltar</Button>
            </DialogClose>
            <Button type="submit"><CircleCheck size={16} /> Aplicar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
