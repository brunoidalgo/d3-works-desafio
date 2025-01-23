Esse é um projeto construído com [Next.js](https://nextjs.org) utilizando o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) Assim concluindo o desafio enviado pela h3 works.

## Iniciando projeto

Primeiro, para instalar as dependências do projeto localmente:

```bash
npm install
```

Primeiro, para rodar o server localmente:

```bash
npm run dev
```

Abra o [http://localhost:3000](http://localhost:3000) em seu navegador para visualizar o projeto.

A página principal se localiza em `app/page.js`. Recarrega toda vez que o servidor observa uma alteração ou atualização de código é novamente compilado.

Essse projeto utilizou as fontes do [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para um desenvolvimento mais rápidp e otimizado [Montserrat](https://vercel.com/font), essa fonte existe por padrão no NextJs.

## Feature extra

Como forma de mostrar um diferencial que eu tenho sendo atualmente QA  e Desenevolvedor é o desenvolvimento de testes automatizados que rodam em uma pipeline de integração contínua ou mais conhecida como CI/CD.

- [Documentação do Cypress](https://docs.cypress.io/app/get-started/why-cypress) - saiba mais sobre o Cypress.
- [Aprenda Cypress](https://docs.cypress.io/app/get-started/open-the-app) com um guia rápido.

## Iniciando os Testes localmente depois de ter o servidor ligado na porta 3000:

```bash
# Para testes em modo headless
npx cypress run

# Para testes em modo visual integrado
npx cypress open
```
Esse projeto foi configurado via github para que sempre ao enviar um novo push para a branch main do repostitório seja executado uma rodada de testes automatizados pré definidos.
