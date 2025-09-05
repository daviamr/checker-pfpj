import { SheetBreadcrumb } from "@/components/breadcrumb-sheet";
import { FileTable } from "@/components/common/file-table";
import { useViewSheet } from "@/contexts/sheet-context";

export function CheckerPage() {
  const { viewSheet, changeViewSheet } = useViewSheet()
  const sheetName = viewSheet

  return (
    <>
      <main className="p-4 w-full">
        <div className="container m-auto">
          {sheetName !== 'default' && (
            <SheetBreadcrumb sheetname={viewSheet} />
          )}
          <div className="grid gap-8 pt-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-4 cursor-pointer w-max" onClick={() => changeViewSheet('default')}>
                <h1 className="text-3xl font-semibold">Checker</h1>
              </div>
            </div>

            <FileTable />
          </div>

        </div>

      </main>
    </>
  )
}