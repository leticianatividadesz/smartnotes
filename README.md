# SmartNotes API

API de gerenciamento de notas pessoais, desenvolvida como trabalho prático da disciplina de Gerência de Configuração (UFAM/IComp).

## Tecnologias

- Node.js
- Express.js
- TypeScript

## Como executar

1. Entre na pasta `backend/`
2. Copie `.env.example` para `.env`
3. Instale as dependências com `npm install`
4. Inicie com `npm run dev`

## Descrição

SmartNotes é uma API REST para gerenciar notas pessoais, desenvolvida com Node.js, Express e TypeScript e organizada em rotas separadas.

## Itens de configuração

| Item | Arquivo / pasta |
| --- | --- |
| Código-fonte | `backend/src/` |
| Dependências e scripts | `backend/package.json` |
| Versões exatas das dependências | `backend/package-lock.json` |
| Configuração do TypeScript | `backend/tsconfig.json` |
| Modelo de dados | `backend/prisma/schema.prisma` |
| Configuração do Prisma | `backend/prisma.config.ts` |
| Migrations do banco | `backend/prisma/migrations/` |
| Variáveis de ambiente (modelos) | `backend/.env.example` e `.env.example` |
| Docker Compose (MySQL) | `docker-compose.yml` |
| Linter (ESLint) | `backend/eslint.config.mjs` |
| Formatador (Prettier) | `backend/.prettierrc` e `backend/.prettierignore` |
| Arquivos ignorados pelo Git | `.gitignore` e `backend/.gitignore` |
| Documentação | `README.md` |
| Scripts de build e execução | `dev`, `build`, `start`, `lint` e `format` em `backend/package.json` |
