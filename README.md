<p align="center">
 <img src="./src/assets/icons/Logo_ML@2x.png.png" alt="Logo">
 </br>
 </br>
 <img src="https://img.shields.io/badge/coverage-97%25-green" alt="Coverage" />
 <img src="https://img.shields.io/badge/build-passing-green" alt="Build" />
 <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version" />
</p>

Esse repositório contém o front-end do layout do Mercado Livre.

## Funcionalidades
- Buscar produtos
- Visualizar o produto desejado

## Dependências
- Node
- [API do Mercado Livre](https://github.com/filipemacedo/api-mercado-livre)

# Iniciando

Instale as dependências do projeto, para isso basta executar o comando

`npm install`

Após a instalação, você precisa definir as variáveis de ambientes, para isso crie um arquivo chamado `.env.development`

Você pode usar o arquivo `.env.example`, bastando apenas preencher o mesmo.

***Variáveis de ambiente***
```
REACT_APP_API_URL="<url da api>"
```

Após definir as variáveis de ambiente, você pode rodar o projeto executando o comando

```
npm start
```

## Componentes
Para que você possa visualizar os componentes contidos no projeto, basta executar o comando

```
npm run storybook
```

## Testes

Para que você possa rodar os testes automatizados, basta executar o comando

```
npm run test
```

Caso deseja visualizar o relatório de cobertura, basta executar o comando

```
npm run test -- --coverage --watchAll
```

# Estrutura de pastas
    ├── package-lock.json
    ├── package.json
    ├── public
    |  ├── favicon.ico
    |  ├── index.html
    |  ├── manifest.json
    |  └── robots.txt
    ├── README.md
    ├── src
    |  ├── App.spec.tsx
    |  ├── App.tsx
    |  ├── assets
    |  |  ├── fonts
    |  |  └── icons
    |  ├── components
    |  |  ├── BreadcrumbList
    |  |  ├── ContainerBox
    |  |  ├── DesiredProduct
    |  |  ├── DesiredProductPlaceholder
    |  |  ├── ErrorBox
    |  |  ├── Header
    |  |  ├── HelmetMetaTags
    |  |  ├── Logo
    |  |  ├── NavigationBreadcrumb
    |  |  ├── NavigationBreadcrumbPlaceholder
    |  |  ├── PlaceholderLayout
    |  |  ├── ProductDescription
    |  |  ├── ProductInformations
    |  |  ├── ProductPicture
    |  |  ├── ProductPlaceholder
    |  |  ├── ProductPrice
    |  |  ├── ProductsList
    |  |  └── ProductsSearch
    |  ├── index.tsx
    |  ├── layouts
    |  |  └── Default
    |  ├── pages
    |  |  ├── Main
    |  |  ├── Product
    |  |  └── SearchResults
    |  ├── react-app-env.d.ts
    |  ├── routes
    |  |  ├── history.ts
    |  |  ├── index.tsx
    |  |  └── __tests__
    |  ├── services
    |  |  └── api.ts
    |  ├── setupTests.js
    |  ├── store
    |  |  ├── createStore.ts
    |  |  ├── index.ts
    |  |  └── modules
    |  ├── stories
    |  |  ├── 0-BreadcrumbList.stories.tsx
    |  |  ├── 1-DesiredProduct.stories.tsx
    |  |  ├── 10-ProductInformations.stories.tsx
    |  |  ├── 11-ProductPicture.stories.tsx
    |  |  ├── 12-ProductPlaceholder.stories.tsx
    |  |  ├── 13-ProductPrice.stories.tsx
    |  |  ├── 14-ProductsList.stories.tsx
    |  |  ├── 15-ProductsSearch.stories.tsx
    |  |  ├── 2-ContainerBox.stories.tsx
    |  |  ├── 3-DesiredProductPlaceholder.stories.tsx
    |  |  ├── 4-ErrorBox.stories.tsx
    |  |  ├── 5-Header.stories.tsx
    |  |  ├── 6-Logo.stories.tsx
    |  |  ├── 7-NavigationBreadcrumb.stories.tsx
    |  |  ├── 8-NavigationBreadcrumbPlaceholder.stories.tsx
    |  |  └── 9-ProductDescription.stories.tsx
    |  ├── styles
    |  |  ├── animations.scss
    |  |  ├── fonts.scss
    |  |  ├── global.scss
    |  |  ├── resources.scss
    |  |  └── variables.scss
    |  └── utils
    |  |  ├── delay.ts
    |  |  ├── error-message.ts
    |  |  ├── number-format-currency.ts
    |  |  ├── pascal-case.ts
    |  |  └── __tests__
    ├── tasks.todo
    └── tsconfig.json
    