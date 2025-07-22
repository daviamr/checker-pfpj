POST /api/auth/login
Recebe: { 
  email: string, 
  password: string 
}
Retorna: { 
  success: boolean, 
  token: string, 
  user: { 
    id, 
    name, 
    email 
  } 
}
Erro: { error: string }
Header: Nenhum

_______________________

POST /api/auth/register
Recebe: { 
  name: string, 
  email: string, 
  password: string, 
  tel?: string, 
  datanascimento?: string, 
  uf?: string, 
  cidade?: string, 
  genero?: string, 
  nickname?: string 
}
Retorna: { 
  success: boolean, 
  message: string, 
  user: { 
    id, 
    name, 
    email 
  } 
}
Erro: { error: string }
Header: Authorization: "Bearer token"

_______________________

POST /api/telefone/create-fila
Recebe: Arquivo (xlsx/xls/csv) com coluna "numero"
Retorna: { 
  message: "Arquivo adicionado na fila de checagem" 
}
Erro: { error: string }
Header: Authorization: "Bearer token"
Tipo: Form-data upload

_______________________

POST /api/telefone/numero
Recebe: { 
  numero: string 
}
Retorna: { 
  success: boolean, 
  resultado: { 
    numero, 
    cnpj, 
    razao_social, 
    mensagem_retorno, 
    operadora, 
    verificado, 
    data_verificacao 
  } 
}
Erro: { error: string }
Header: Authorization: "Bearer token"

_______________________

GET /api/telefone/minhas-chamadas
Recebe: Nada (apenas token)
Retorna: { 
  total: number, 
  chamadas: [{ 
    id, 
    status, 
    totalNumeros, 
    numerosVerificados, 
    numerosPendentes, 
    progresso, 
    criadaEm, 
    atualizadaEm 
  }] 
}
Header: Authorization: "Bearer token"

_______________________

GET /api/telefone/chamada/:id/resultados
Recebe: id (via URL params)
Retorna: { 
  chamada: { 
    id, 
    status, 
    criadaEm, 
    atualizadaEm 
  }, 
  estatisticas: { 
    total, 
    verificados, 
    pendentes, 
    comCnpj, 
    semCnpj, 
    comErro 
  }, 
  resultados: [...], 
  total: number 
}
Erro: { error: string }
Header: Authorization: "Bearer token"

_______________________

GET /api/telefone/status-fila
Recebe: Nada (apenas token)
Retorna: { 
  total, 
  na_fila, 
  em_processo, 
  finalizado, 
  error, 
  chamadas: [...] 
}
Header: Authorization: "Bearer token"

_______________________

GET /
Recebe: Nada
Retorna: { 
  message: "API de Consulta de Operadora está funcionando!" 
}
Header: Nenhum