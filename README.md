# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Instalação

# npm

npm install

# ou pnpm

pnpm install

# ou yarn

yarn install

# ou bun

bun install

## Rodando o Servidor de Desenvolvimento

# npm

npm run dev

# ou pnpm

pnpm run dev

# ou yarn

yarn dev

# ou bun

bun run dev

### Build de Produção

## Gere a versão de produção do projeto:

# npm

npm run build

# ou pnpm

pnpm run build

# ou yarn

yarn build

# ou bun

bun run build

## E para fazer o preview local da build:

# npm

npm run preview

# ou pnpm

pnpm run preview

# ou yarn

yarn preview

# ou bun

bun run preview

### Decisões Técnicas

Divisão de componentes:

    Nav: Barra de navegação e busca.

    ManwhaCard: Listagem dos manhwas.

Gerenciamento de estado:

    Home é o "pai" que gerencia o searchTerm e o repassa para Nav e ManwhaCard.

    Capitulo: Visualização detalhada de um manhwa selecionado.

Busca em tempo real:

    Conforme o usuário digita, os resultados são filtrados imediatamente no front-end.

Comunicação com API:

    Inicialmente é feito o carregamento de todos os manhwas, mas há possibilidade de refinar pela API usando o parâmetro search no futuro

### Dependências Principais

    react

    react-dom

    react-router-dom

    sass

### Possíveis Melhorias Futuras

    Implementar busca diretamente pela API (otimizar o carregamento dos dados).

    Criar uma aba lateral de "Populares" para destacar os manhwas mais acessados ou recomendados.

    Paginar resultados caso o número de manhwas cresça muito.

    Adicionar proteção de rotas para futuras funcionalidades restritas.

    Melhorar responsividade mobile.

    Adicionar notas de satisfação para os Manwhas(1 a 5 estelas)
