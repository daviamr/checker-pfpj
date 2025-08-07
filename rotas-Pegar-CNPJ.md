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


DOCUMENTAÇÃO DAS ROTAS:

1. POST /login
   - Recebe: { email, password }
   - Retorna: { success: true, token, user: { id, name, email, tel, datanascimento, uf, cidade, genero, nickname, image, churn, actived } }

2. POST /register (protegida)
   - Recebe: { name, email, password, tel, datanascimento, uf, cidade, genero, nickname, image, churn }
   - Retorna: { success: true, message, user: { id, name, email, tel, datanascimento, uf, cidade, genero, nickname, image, churn, actived } }

3. GET /users (protegida)
   - Recebe: Nenhum parâmetro
   - Retorna: { success: true, users: [array de usuários com senhas mascaradas] }

4. GET /users/search?query=termo (protegida)
   - Recebe: query (parâmetro de busca por nome ou email)
   - Retorna: { success: true, users: [array de usuários encontrados com senhas mascaradas] }

5. PUT /users/:id (protegida)
   - Recebe: { name, email, password, newPassword, confirmPassword, tel, datanascimento, uf, cidade, genero, nickname, image, churn }
   - Retorna: { success: true, message, user: { id, name, email, tel, datanascimento, uf, cidade, genero, nickname, image, churn, actived } }

6. DELETE /users/:id (protegida)
   - Recebe: id (parâmetro da URL)
   - Retorna: { success: true, message }

Todas as rotas protegidas requerem o header: Authorization: Bearer <token>

CAMPOS DO MODELO:
- id: INTEGER (auto increment, primary key)
- name: STRING(255) - Nome do usuário
- email: STRING(255) - Email único do usuário
- password: STRING(255) - Senha do usuário
- tel: STRING(255) - Telefone do usuário
- actived: BOOLEAN - Status de ativação (default: true)
- datanascimento: DATE - Data de nascimento
- uf: STRING(45) - Estado
- cidade: STRING(45) - Cidade
- genero: STRING(45) - Gênero
- nickname: STRING(45) - Apelido
- image: STRING(100) - URL da imagem do usuário
- churn: BOOLEAN - Status de churn (default: false)