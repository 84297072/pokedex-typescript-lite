# Pokédex TypeScript Lite

## Sobre o projeto
O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo
Praticar os principais conceitos do Módulo 01:
- Node.js; - JavaScript no back-end; - TypeScript; - interfaces;
- funções tipadas; - arrays; - objetos; - JSON; - métodos de array;
- classes; - async/await; - fetch; - tratamento de erros;
- GitHub; - GitFlow; - Kanban.

## Tecnologias utilizadas
- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos
- Node.js
- npm
- Git

## Como instalar
git clone [LINK_DO_REPOSITORIO](https://github.com/84297072/pokedex-typescript-lite.git)
cd pokedex-typescript-lite
npm install

## Como executar
npm run dev

## Estrutura do projeto
src/
├── main.ts
├── models/
│   ├── Pokemon.ts
│   └── CatalogoPokemon.ts
├── services/
│   └── PokeApiService.ts
└── utils/
    └── textFormatters.ts

## Funcionalidades
- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal

## Exemplos de execução
### Busca válida
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

### Busca inválida
[ERRO] Pokémon não encontrado.

### Duplicidade
[AVISO] pikachu já está no catálogo.

### Remoção
[OK] Pokémon removido do catálogo.

## Conceitos aplicados
- TypeScript: tipos, interfaces, parâmetros e retornos tipados.
- Interface PokemonResumo: representa o Pokémon simplificado.
- Fetch e async/await: consulta a PokeAPI.
- Tratamento de erros: try/catch e status 404.
- Métodos de array: map, some, filter, forEach.
- Classe CatalogoPokemon: atributos e métodos adicionar, listar, remover.

## Organização do Kanban
Link do Kanban: COLE_AQUI_O_LINK

## Branches utilizadas
- main
- develop
- feat/pokedex

## Melhorias futuras
- Criar menu interativo no terminal
- Salvar catálogo em arquivo JSON
- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express