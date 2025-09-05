import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useViewSheet } from "@/contexts/sheet-context"

type SheetProp = {
  sheetname: string
}

export function SheetBreadcrumb({sheetname}: SheetProp) {
  const { changeViewSheet } = useViewSheet()
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a onClick={() => changeViewSheet('default')} className="cursor-pointer">Checker</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <span className="font-semibold">{sheetname}</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
