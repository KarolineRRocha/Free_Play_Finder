# FreePlayFinder

> **Descubra seus próximos jogos favoritos gratuitos!**

[![Angular](https://img.shields.io/badge/Angular-18.2.0-red.svg)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-purple.svg)](https://getbootstrap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Sobre o Projeto

O **FreePlayFinder** é uma aplicação web moderna desenvolvida em Angular que ajuda os usuários a descobrir, organizar e gerenciar jogos gratuitos. Com uma interface intuitiva e design responsivo, a aplicação oferece uma experiência completa para entusiastas de jogos.

### Principais Características

- **Descoberta de Jogos**: Explore uma vasta coleção de jogos gratuitos
- **Listas Personalizadas**: Organize seus jogos em listas temáticas
- **Perfil Personalizado**: Avatar customizável e informações do usuário
- **Busca Avançada**: Filtros por plataforma, gênero e pesquisa por nome
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Performance Otimizada**: Carregamento rápido e navegação fluida

## Funcionalidades

### Gerenciamento de Jogos
- **Lista Completa**: Visualize todos os jogos disponíveis
- **Detalhes Ricos**: Informações completas, screenshots e requisitos do sistema
- **Busca Inteligente**: Pesquisa em tempo real por título
- **Filtros Avançados**: Por plataforma, gênero e data de lançamento
- **Ordenação Flexível**: Por nome (A-Z/Z-A) e data

### Listas Personalizadas
- **4 Listas Predefinidas**:
  - **Jogar Mais Tarde** - Para jogos que você quer experimentar
  - **Jogando Atualmente** - Jogos em andamento
  - **Jogado** - Jogos que você já experimentou
  - **Concluído** - Jogos finalizados
- **Gerenciamento Intuitivo**: Adicione, remova e mova jogos entre listas
- **Interface em Tabs**: Navegação organizada com contadores

### Perfil do Usuário
- **Avatar Customizável**: URL personalizada ou placeholder colorido
- **Edição de Dados**: Nome, email e alteração de senha
- **Geração Automática**: Avatar aleatório com cores baseadas no nome
- **Resumo Visual**: Estatísticas das listas e progresso

### Interface Moderna
- **Design Responsivo**: Bootstrap 5 com componentes customizados
- **Animações Suaves**: Transições e efeitos hover
- **Feedback Visual**: Notificações de sucesso e erro
- **Navegação Intuitiva**: Breadcrumbs e botões de ação claros

## Tecnologias Utilizadas

### Frontend
- **[Angular 18](https://angular.io/)** - Framework principal
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação
- **[Bootstrap 5](https://getbootstrap.com/)** - Framework CSS
- **[Font Awesome](https://fontawesome.com/)** - Ícones
- **[SCSS](https://sass-lang.com/)** - Pré-processador CSS

### Backend & Ferramentas
- **[JSON Server](https://github.com/typicode/json-server)** - API de desenvolvimento
- **[RxJS](https://rxjs.dev/)** - Programação reativa
- **[Angular Router](https://angular.io/guide/router)** - Navegação

## Estrutura do Projeto

```
FreePlayFinder/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/              # Navegação principal
│   │   │   ├── games-list/          # Lista de jogos
│   │   │   ├── game-details/        # Detalhes do jogo
│   │   │   ├── game-lists/          # Gerenciamento de listas
│   │   │   ├── profile/             # Perfil do usuário
│   │   │   ├── home/                # Página inicial
│   │   │   └── footer/              # Rodapé
│   │   ├── models/                  # Interfaces TypeScript
│   │   │   ├── game.ts
│   │   │   ├── gameDetails.ts
│   │   │   ├── profile.ts
│   │   │   └── lists.ts
│   │   ├── services/                # Serviços de API
│   │   │   ├── game.service.ts
│   │   │   └── title.service.ts
│   │   └── pipes/                   # Pipes personalizados
│   │       └── nl2br.pipe.ts
│   ├── assets/                      # Recursos estáticos
│   └── styles.scss                  # Estilos globais
├── api.json                         # Dados da API
├── package.json                     # Dependências
└── README.md                        # Documentação
```

## Como Executar

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/FreePlayFinder.git
   cd FreePlayFinder
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor JSON (API)**
   ```bash
   npx json-server --watch api.json --port 3000
   ```

4. **Em outro terminal, inicie o servidor Angular**
   ```bash
   ng serve
   ```

5. **Acesse a aplicação**
   - **Frontend**: http://localhost:4200
   - **API**: http://localhost:3000

### Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia o servidor de desenvolvimento
npm run build          # Compila para produção
npm run watch          # Compila em modo watch

# Testes
npm test               # Executa os testes unitários

# API
npx json-server --watch api.json --port 3000  # Inicia o servidor JSON
```

## Estrutura da API

A aplicação utiliza um arquivo `api.json` que contém os seguintes endpoints:

### Endpoints Principais

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/profile` | Dados do perfil do usuário |
| `PUT` | `/profile` | Atualizar perfil |
| `GET` | `/gamesList` | Lista de todos os jogos |
| `GET` | `/gameDetails/:id` | Detalhes de um jogo específico |
| `GET` | `/platforms` | Lista de plataformas |
| `GET` | `/genres` | Lista de gêneros |

### Estrutura dos Dados

```json
{
  "profile": {
    "id": 1,
    "name": "Nome do Usuário",
    "email": "usuario@email.com",
    "avatar": "https://exemplo.com/avatar.jpg",
    "lists": [...]
  },
  "gamesList": [
    {
      "id": 1,
      "title": "Nome do Jogo",
      "thumbnail": "url-da-imagem",
      "short_description": "Descrição curta"
    }
  ]
}
```

## Funcionalidades Detalhadas

### Pesquisa e Filtros
- **Pesquisa em Tempo Real**: Digite para filtrar jogos instantaneamente
- **Filtros Múltiplos**: Combine plataforma, gênero e outros critérios
- **Ordenação Inteligente**: Por nome, data ou popularidade
- **Interface Responsiva**: Funciona em todos os dispositivos

### Gerenciamento de Listas
- **Adicionar Jogos**: Clique no botão "+" para adicionar à lista
- **Remover Jogos**: Remova jogos com um clique
- **Mover Entre Listas**: Arraste ou use o menu de contexto
- **Visualização Organizada**: Tabs com contadores e progresso

### Perfil Personalizado
- **Avatar Dinâmico**: URL personalizada ou placeholder colorido
- **Geração Automática**: Avatar baseado no nome do usuário
- **Edição Segura**: Validação de formulários e confirmação de senha
- **Estatísticas Visuais**: Resumo das listas e progresso

## Design System

### Cores Principais
- **Primária**: `#667eea` → `#764ba2` (Gradiente)
- **Secundária**: `#6c757d`
- **Sucesso**: `#28a745`
- **Aviso**: `#ffc107`
- **Erro**: `#dc3545`

### Tipografia
- **Fonte Principal**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Tamanhos**: Hierarquia clara com pesos variados
- **Responsiva**: Escala automaticamente em diferentes dispositivos

### Componentes
- **Cards**: Sombras sutis e bordas arredondadas
- **Botões**: Gradientes e efeitos hover
- **Formulários**: Validação visual e feedback
- **Navegação**: Breadcrumbs e menus intuitivos

## Testes

```bash
# Executar testes unitários
npm test

# Executar testes com coverage
npm run test:coverage

# Executar testes em modo watch
npm run test:watch
```

## Build e Deploy

### Build de Produção
```bash
# Build otimizado
npm run build

# Build com análise de bundle
npm run build:analyze
```

### Deploy
A aplicação pode ser facilmente deployada em:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes de Contribuição
- Mantenha o código limpo e bem documentado
- Siga os padrões de estilo do projeto
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário

## Changelog

### v1.0.0 (2024)
- Interface inicial com lista de jogos
- Sistema de perfil de usuário
- Gerenciamento de listas personalizadas
- Design responsivo com Bootstrap 5
- Sistema de busca e filtros
- Otimização para dispositivos móveis

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Autores

- **Seu Nome** - *Desenvolvimento inicial* - [SeuGitHub](https://github.com/seu-usuario)

## Agradecimentos

- [Angular Team](https://angular.io/) pelo framework incrível
- [Bootstrap](https://getbootstrap.com/) pelos componentes CSS
- [Font Awesome](https://fontawesome.com/) pelos ícones
- [JSON Server](https://github.com/typicode/json-server) pela API de desenvolvimento

## Suporte

- **Email**: seu-email@exemplo.com
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/FreePlayFinder/issues)
- **Documentação**: [Wiki do Projeto](https://github.com/seu-usuario/FreePlayFinder/wiki)

---

<div align="center">

**FreePlayFinder** - Encontre seu próximo jogo favorito!

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/FreePlayFinder?style=social)](https://github.com/seu-usuario/FreePlayFinder)
[![GitHub forks](https://img.shields.io/github/forks/seu-usuario/FreePlayFinder?style=social)](https://github.com/seu-usuario/FreePlayFinder)

</div>
