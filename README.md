# Free Play Finder

Uma aplicação Angular para descobrir e gerenciar jogos gratuitos. O projeto permite visualizar uma lista de jogos, filtrar por plataforma e gênero, e gerenciar listas pessoais de jogos.

## Funcionalidades

- **Lista de Jogos**: Visualize todos os jogos disponíveis
- **Filtros**: Filtre jogos por plataforma e gênero
- **Busca**: Pesquise jogos por título
- **Detalhes**: Visualize informações detalhadas de cada jogo
- **Perfil**: Gerencie suas listas pessoais de jogos
- **Responsivo**: Interface adaptada para diferentes dispositivos

## Tecnologias Utilizadas

- **Angular 18**: Framework principal
- **Bootstrap 5**: Framework CSS para estilização
- **RxJS**: Para programação reativa
- **JSON Server**: Para desenvolvimento local (API simulada)

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes da aplicação
│   │   ├── footer/         # Rodapé
│   │   ├── game-details/   # Detalhes do jogo
│   │   ├── game-lists/     # Listas de jogos
│   │   ├── games-list/     # Lista principal de jogos
│   │   ├── home/           # Página inicial
│   │   ├── navbar/         # Barra de navegação
│   │   └── profile/        # Perfil do usuário
│   ├── models/             # Interfaces TypeScript
│   ├── pipes/              # Pipes customizados
│   └── services/           # Serviços da aplicação
├── assets/                 # Recursos estáticos
│   └── api.json           # Dados da aplicação
└── environments/          # Configurações de ambiente
```

## Como Executar

### Desenvolvimento Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/KarolineRRocha/Free_Play_Finder.git
   cd Free_Play_Finder/Free_Play_Finder
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   # Opção 1: Usando o script personalizado (recomendado)
   ./start-dev.sh
   
   # Opção 2: Manualmente
   npm run api        # Inicia o JSON Server
   npm start          # Inicia o Angular (em outro terminal)
   ```

### Produção (GitHub Pages)

O projeto está configurado para funcionar tanto localmente quanto no GitHub Pages:

- **Local**: Usa JSON Server na porta 3000
- **Produção**: Usa dados locais do arquivo `api.json`

Para fazer deploy:
```bash
npm run deploy:gh-pages
```

## Dados da Aplicação

A aplicação utiliza dados do arquivo `api.json` que contém:
- Lista de jogos com informações detalhadas
- Plataformas disponíveis
- Gêneros de jogos
- Perfil do usuário com listas personalizadas

## Configuração

### Ambiente de Desenvolvimento
- Angular CLI
- Node.js (versão LTS recomendada)
- JSON Server (para simular API)

### Ambiente de Produção
- GitHub Pages
- Dados estáticos via `api.json`

## Acesso

- **Desenvolvimento**: http://localhost:4200
- **Produção**: https://karolinerrocha.github.io/FreePlayFinder/

## Notas Importantes

- O projeto funciona completamente offline quando deployado no GitHub Pages
- Todos os dados são carregados do arquivo `api.json` local
- As operações de escrita (adicionar/remover jogos das listas) são simuladas em produção

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
