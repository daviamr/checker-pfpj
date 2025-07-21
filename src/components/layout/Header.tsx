import { LogOutIcon } from "lucide-react"
import { useView } from "../../contexts/use-view"
import { Button } from "../ui/button"

export function Header() {
  const { view, changeView } = useView()
  return (
    <>
      <header className="p-4 border-b">
        <div className="container m-auto flex items-center justify-between">

          <img src="/" alt="Logo" />

          <nav>
            <ul className="flex gap-4">

              <li className={`cursor-pointer ${view === 'userpage' && 'font-bold'}`} onClick={() => changeView('userpage')}>
                Usuários
              </li>

              <li className={`cursor-pointer ${view === 'checkerpage' && 'font-bold'}`} onClick={() => changeView('checkerpage')}>
                Checker
              </li>

            </ul>
          </nav>

          <div>
            <Button variant={"outline"} size={"icon"}>
              <LogOutIcon />
            </Button>
          </div>

        </div>


      </header>
    </>
  )
}