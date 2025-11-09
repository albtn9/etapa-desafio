# Nexdom Test Automation - Resumo

Este projeto contém testes automatizados para o site [NEXDOM](https://nexdom.tec.br/) e para a API do GitHub, utilizando **Cypress**.

## Testes incluídos
- **Front-end (UI)**: testes da página inicial, formulário de contato e página de carreiras.
- **Back-end (API GitHub)**: criação, consulta, criação de issue, exclusão e verificação de repositório.

## Pré-requisitos
- Node.js Usei v22.19.0
- NPM Usei 10.9.3
- Cypress Usei >= 13.5.1
- Conta GitHub com **Personal Access Token** (`repo` + `delete_repo`)

## Instalação

```bash
git clone https://github.com/albtn9/etapa-desafio.git
```
```bash
cd etapa-desafio
```
```bash
npm install
```
OU
```bash
npm i
```
Configure cypress.env.js com:

```bash
{
  "github_user": "<USUARIO_GITHUB>",
  "github_token": "<PERSONAL_ACCESS_TOKEN>"
}
```

## Execução

**Front-end (UI)**
```bash
npm run test:nexdom       # executar testes front headless
npx cypress open          # abrir a interface Cypress
npx cypress run           # executar todos os testes headless
```

**Back-end (API GitHub)**
```bash
npm run test:api          # executar testes back headless
```

## Observações
Testes de UI incluem validação de menu, formulário, vídeo principal e link de vagas.
Testes de API realizam criação e exclusão de repositório de forma segura com token GitHub.
Comandos customizados no Cypress simplificam ações repetitivas.
