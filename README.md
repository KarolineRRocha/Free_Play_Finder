# FreePlayFinder

## Sobre o Projeto

FreePlayFinder é uma aplicação Angular para descobrir e organizar jogos gratuitos. A aplicação permite aos usuários:

- Explorar uma lista de jogos gratuitos populares
- Criar listas personalizadas (Play Later, Currently Playing, Played, Completed)
- Visualizar detalhes dos jogos
- Filtrar por gênero e plataforma

## Como Executar

1. **Clone o repositório**
2. **Abra o arquivo `index.html`** em um navegador web
3. **Ou use um servidor local:**
   ```bash
   npx http-server
   ```

## Dados dos Jogos

A aplicação agora usa **dados locais** de jogos gratuitos reais e populares, incluindo:

### Jogos Incluídos:
- **Fortnite** - Battle Royale da Epic Games
- **Genshin Impact** - RPG de mundo aberto
- **League of Legends** - MOBA competitivo
- **Valorant** - FPS tático
- **Apex Legends** - Battle Royale com heróis
- **Hearthstone** - Jogo de cartas
- **Warframe** - Action RPG cooperativo
- **Path of Exile** - ARPG dark fantasy
- **Dota 2** - MOBA estratégico
- **Team Fortress 2** - FPS class-based

### Gêneros Disponíveis:
- Battle Royale
- FPS
- MOBA
- Action RPG
- Card Game
- ARPG

### Plataformas:
- PC (Windows)
- Mobile
- PlayStation

## Arquitetura

### Arquivos Principais:
- `index.html` - Página principal
- `games-data.js` - Dados dos jogos (local)
- `api-mock.js` - Simulação da API
- `main.a50a3df05d9e17b7.js` - Aplicação Angular compilada

### Como Funciona:
1. **Dados Locais**: Todos os dados dos jogos estão armazenados localmente em `games-data.js`
2. **API Mock**: O arquivo `api-mock.js` simula endpoints da API usando os dados locais
3. **Sem Dependências Externas**: A aplicação funciona completamente offline

## Funcionalidades

- Lista de jogos gratuitos reais
- Detalhes completos dos jogos
- Sistema de listas personalizadas
- Filtros por gênero e plataforma
- Interface responsiva
- Funciona offline

## Tecnologias

- **Angular** - Framework principal
- **Bootstrap** - Estilização
- **Font Awesome** - Ícones
- **JavaScript** - Lógica de dados

## Notas

- A aplicação não depende mais de APIs externas
- Todos os dados são carregados localmente
- Funciona completamente offline
- Dados atualizados com jogos gratuitos populares e reais

---

**Desenvolvido com amor para entusiastas de jogos gratuitos!** 