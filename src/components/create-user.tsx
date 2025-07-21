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
import { AtSign, CircleCheck, CircleX, Plus, RectangleEllipsis } from "lucide-react"

export function CreateUser() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline"><Plus size={16} />Cadastrar Usuário</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastrar novo usuário</DialogTitle>
            <DialogDescription className="pb-4 border-b">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-3">
              <Label htmlFor="email"><AtSign size={16} />E-mail</Label>
              <Input id="email" name="email" placeholder="email@exemplo.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pass"><RectangleEllipsis size={16} />Senha</Label>
              <Input id="pass" name="pass" type="password" placeholder="******" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline"><CircleX size={16}/>Cancel</Button>
            </DialogClose>
            <Button type="submit"><CircleCheck size={16}/>Cadastrar Usuário</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
