# API REST - P2 Integração e Entrega Contínua

## Descrição
API RESTful para gerenciamento de usuários, desenvolvida em Node.js com Express, Sequelize e PostgreSQL. Inclui integração com Better Stack para logs, documentação Swagger, e pronta para CI/CD e deploy em Docker.

---

## Funcionalidades
- CRUD de usuários
- Documentação Swagger
- Logs de requisições integrados ao Better Stack
- Pronta para deploy com Docker e Docker Compose

---

## Como rodar localmente

### Pré-requisitos
- [Docker](https://www.docker.com/get-started/) e [Docker Compose](https://docs.docker.com/compose/)

### 1. Configuração do Better Stack
- Crie um Source no Better Stack e copie o HTTP Ingest URL (ex: `https://in.logs.betterstack.com/ingest/SEU_TOKEN`)
- Crie um arquivo `.env` na raiz do projeto com:
  ```
  BETTERSTACK_URL=https://in.logs.betterstack.com/ingest/SEU_TOKEN
  ```

### 2. Subir a aplicação
```sh
docker-compose up --build
```

- Acesse a API: [http://localhost:3000](http://localhost:3000)
- Documentação Swagger: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Endpoints principais

- `POST   /users` — Criar usuário
- `GET    /users` — Listar todos usuários
- `GET    /users/:id` — Buscar usuário por ID
- `PUT    /users/:id` — Atualizar usuário
- `DELETE /users/:id` — Remover usuário

Consulte detalhes e exemplos no Swagger.

---

## Banco de Dados
- O banco PostgreSQL é criado automaticamente pelo Docker Compose.
- Configurações padrão (veja `docker-compose.yml`):
  - DB: `p2db`
  - USER: `p2user`
  - PASS: `p2pass`
  - HOST: `db` (interno no Docker)

---

## Logs no Better Stack
- Todos os acessos e erros são enviados automaticamente para o Better Stack.
- Consulte os logs em tempo real no painel do Better Stack.

---

## Scripts úteis
- `npm start` — Inicia a API em produção
- `npm run dev` — Inicia a API em modo desenvolvimento (nodemon)

---

## Observações
- Não esqueça de adicionar o usuário `festmedeiros` como contribuidor no repositório do GitHub.
- Utilize o Gitflow e padronização de commits.
- Todos os dados sensíveis devem ser mantidos em variáveis de ambiente/Secrets.

---

## Contato
Dúvidas ou sugestões: [Seu Nome] - [Seu Email]

