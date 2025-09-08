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
import { ArrowLeft, Eye } from "lucide-react"
import { TooltipPadrao } from "./tooltip"

type CompanyProps = {
  numero: string,
  anatel: string,
  status: string,
  pj: string,
  operadora: string,
  documento: string,
  razaoSocial: string,
  porte: string,
  cnae: string,
  cidade: string,
  cs: string,
  socios: string,
  data: string
}

export function CompanyInfo({...props}: CompanyProps) {
  return (
    <Dialog>
      <form>
        <TooltipPadrao message="Ver informações">
          <DialogTrigger asChild>
            <Button variant="outline" size={'icon'}>
              <Eye size={16} />
            </Button>
          </DialogTrigger>
        </TooltipPadrao>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Informações Detalhadas
            </DialogTitle>
            <DialogDescription className="leading-relaxed pb-4 border-b border-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, tempora commodi quae explicabo sapiente iste odit distinctio.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {/* Seção Principal */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Informações Principais
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="numero" className="text-sm font-medium">
                    Número *
                  </Label>
                  <Input
                    type="text"
                    id="numero"
                    value={props.numero}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Digite o número"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="anatel" className="text-sm font-medium">
                    Anatel
                  </Label>
                  <Input
                    type="text"
                    id="anatel"
                    value={props.anatel}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Código Anatel"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="status" className="text-sm font-medium">
                    Status
                  </Label>
                  <Input
                    type="text"
                    id="status"
                    value={props.status}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Status atual"
                  />
                </div>
              </div>
            </div>

            {/* Seção Empresa */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Dados da Empresa
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 space-y-2">
                  <Label htmlFor="pj" className="text-sm font-medium">
                    PJ
                  </Label>
                  <Input
                    type="text"
                    id="pj"
                    value={props.pj}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Pessoa Jurídica"
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="operadora" className="text-sm font-medium">
                    Operadora
                  </Label>
                  <Input
                    type="text"
                    id="operadora"
                    value={props.operadora}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nome da operadora"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="documento" className="text-sm font-medium">
                    Documento
                  </Label>
                  <Input
                    type="text"
                    id="documento"
                    value={props.documento}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="CPF/CNPJ"
                  />
                </div>

                <div className="col-span-3 space-y-2">
                  <Label htmlFor="razao-social" className="text-sm font-medium">
                    Razão Social
                  </Label>
                  <Input
                    type="text"
                    id="razao-social"
                    value={props.razaoSocial}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nome completo da empresa"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="porte" className="text-sm font-medium">
                    Porte
                  </Label>
                  <Input
                    type="text"
                    id="porte"
                    value={props.porte}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Porte empresa"
                  />
                </div>
              </div>
            </div>

            {/* Seção Detalhes */}
            <div>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Detalhes Adicionais
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="cnae" className="text-sm font-medium">
                    CNAE
                  </Label>
                  <Input
                    type="text"
                    id="cnae"
                    value={props.cnae}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Código CNAE"
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="cidade" className="text-sm font-medium">
                    Cidade
                  </Label>
                  <Input
                    type="text"
                    id="cidade"
                    value={props.cidade}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Cidade de origem"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="cs" className="text-sm font-medium">
                    CS
                  </Label>
                  <Input
                    type="text"
                    id="cs"
                    value={props.cs}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Código CS"
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="socios" className="text-sm font-medium">
                    Sócios
                  </Label>
                  <Input
                    type="text"
                    id="socios"
                    value={props.socios}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Lista de sócios"
                  />
                </div>

                <div className="col-span-1 space-y-2">
                  <Label htmlFor="data-consulta" className="text-sm font-medium">
                    Data Consulta
                  </Label>
                  <Input
                    type="date"
                    id="data-consulta"
                    value={props.data}
                    disabled
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex items-center justify-between pt-6 border-t border-gray-200">
            {/* <div className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div> */}
            <div className="flex gap-3">
              <DialogClose asChild>
                <Button variant="outline" className="flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </Button>
              </DialogClose>
              {/* <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Salvar Alterações
              </Button> */}
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
