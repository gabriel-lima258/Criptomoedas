# 💰 Criptomoedas - Aplicação de Consulta de Criptomoedas

Uma aplicação web moderna desenvolvida em React + TypeScript para consultar informações sobre criptomoedas em tempo real, utilizando a API do CoinCap.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Utilizada](#api-utilizada)
- [Scripts Disponíveis](#scripts-disponíveis)

## 🎯 Sobre o Projeto

Esta aplicação permite aos usuários visualizar informações atualizadas sobre as principais criptomoedas do mercado, incluindo preços, capitalização de mercado, volume de negociação e variação percentual em 24 horas. Além disso, oferece uma página de detalhes para cada criptomoeda específica.

## ✨ Funcionalidades

- **Listagem de Criptomoedas**: Visualize as principais criptomoedas em uma tabela responsiva
- **Busca por Criptomoeda**: Busque uma criptomoeda específica pelo nome ou ID
- **Paginação**: Carregue mais criptomoedas com o botão "Carregar mais"
- **Detalhes da Criptomoeda**: Acesse informações detalhadas sobre cada criptomoeda
- **Formatação de Valores**: Valores formatados em dólar americano (USD)
- **Indicadores Visuais**: Cores diferentes para variações positivas (verde) e negativas (vermelho)
- **Loading States**: Feedback visual durante o carregamento dos dados
- **Tratamento de Erros**: Redirecionamento automático em caso de erro ou criptomoeda não encontrada

## 🛠️ Tecnologias

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9.3** - Superset do JavaScript com tipagem estática
- **Vite 7.2.4** - Build tool e dev server rápido
- **React Router 7.9.6** - Roteamento para aplicações React
- **React Icons 5.5.0** - Biblioteca de ícones
- **CSS Modules** - Estilização com escopo local
- **ESLint** - Linter para manter qualidade do código

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd criptomoedas
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Como Usar

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

### Linting

Para verificar o código com ESLint:

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
criptomoedas/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e outros assets
│   │   └── logo.svg
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── Layout.tsx
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.tsx       # Página principal com listagem
│   │   ├── Home.module.css
│   │   ├── Detail.tsx     # Página de detalhes da criptomoeda
│   │   ├── Detail.module.css
│   │   └── NotFound.tsx   # Página 404
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Ponto de entrada
│   ├── router.tsx         # Configuração de rotas
│   └── index.css          # Estilos globais
├── eslint.config.js       # Configuração do ESLint
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
└── vite.config.ts         # Configuração do Vite
```

## 🔌 API Utilizada

A aplicação utiliza a [CoinCap API](https://docs.coincap.io/) para obter dados sobre criptomoedas:

- **Endpoint de Listagem**: `https://rest.coincap.io/v3/assets?limit=10&offset={offset}`
- **Endpoint de Detalhes**: `https://rest.coincap.io/v3/assets/{id}`

### Dados Retornados

- ID da criptomoeda
- Nome e símbolo
- Preço em USD
- Capitalização de mercado
- Volume de negociação em 24h
- Variação percentual em 24h
- Rank, supply, maxSupply
- Link do explorer

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🎨 Funcionalidades Detalhadas

### Página Home

- Exibe uma tabela com as principais criptomoedas
- Campo de busca para encontrar criptomoedas específicas
- Botão para carregar mais criptomoedas (paginação)
- Cada linha da tabela é clicável e leva para a página de detalhes
- Exibe logo da criptomoeda, nome, símbolo, preço, mercado, volume e variação

### Página Detail

- Mostra informações detalhadas de uma criptomoeda específica
- Exibe logo, nome, símbolo, preço, mercado, volume e variação
- Estado de loading durante o carregamento
- Redirecionamento automático se a criptomoeda não for encontrada

## 🔒 Segurança

⚠️ **Nota**: A chave da API está exposta no código. Para produção, considere:

- Usar variáveis de ambiente (`.env`)
- Implementar um backend proxy para proteger a chave da API
- Usar serviços de gerenciamento de secrets

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
