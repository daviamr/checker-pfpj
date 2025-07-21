import { TesteTable } from "@/components/common/test-table";

export function CheckerPage() {

  return (
    <>
      <main className="p-4">
        <div className="container m-auto">

          <div className="grid gap-8 pt-8">

            <div className="flex gap-4">
              <h1 className="text-3xl font-semibold">Checker</h1>
              {/* <div className="flex flex-col gap-2 rounded-sm bg-background border p-4">
                {!isLoading && (<span className="text-xs opacity-75">Aguardando o uplaod da planilha...</span>)}
                {isLoading && (
                  <div className="flex gap-4">
                    <div>
                      <span className="flex items-center gap-2"><CircleCheck size={16} color="green" /><strong>239</strong>Linhas processadas</span>
                      <span className="flex items-center gap-2"><CircleX size={16} color="red" /><strong>103</strong>Linhas com erro</span>
                      <span className="flex items-center gap-2"><Mars size={16} /><strong>12</strong>Nomes masculinos</span>
                    </div>
                    <div>
                      <span className="flex items-center gap-2"><Venus size={16} /><strong>43</strong>Nomes femininos</span>
                      <span className="flex items-center gap-2"><CircleSmall size={16} /><strong>98</strong>Nomes sem gênero identificado</span>
                    </div>
                  </div>
                )}
              </div> */}
            </div>

            <TesteTable/>
          </div>

        </div>

      </main>
    </>
  )
}