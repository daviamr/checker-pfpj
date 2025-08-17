import { HistoricTable } from "@/components/common/historic-table";

export function HistoricPage() {
  return (
    <main className="p-4">
        <div className="container m-auto">

          <div className="grid gap-8 py-8">

            <h1 className="text-3xl font-semibold">Histórico</h1>

            <HistoricTable />
          </div>

        </div>

      </main>
  )
}