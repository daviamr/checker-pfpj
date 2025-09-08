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
import { ExternalLink } from "lucide-react"
import { TooltipPadrao } from "./tooltip"

export function ShareWorkSheet() {
  return (
    <Dialog>
      <form>
      <TooltipPadrao message="Ações">
        <DialogTrigger asChild>
          <Button variant="outline" size={'icon'}>
            <ExternalLink size={16} />
          </Button>
        </DialogTrigger>
      </TooltipPadrao>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Compartilhe a planilha</DialogTitle>
            <DialogDescription className="pb-4 border-b">
              Compartilhe a planilha com outros projetos.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 grid gap-2">
            <div className="flex items-center gap-2">
              <Input type="checkbox" className="max-w-4" id="zap-checker" />
              <Label htmlFor="zap-checker">Zap Checker</Label>
            </div>

            <div className="flex items-center gap-2">
              <Input type="checkbox" className="max-w-4" id="super-sender" />
              <Label htmlFor="super-sender">Super Sender</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Compartilhar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
