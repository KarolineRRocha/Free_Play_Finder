# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **FreePlayFinder**! Este documento fornece diretrizes para contribuições.

## 📋 Como Contribuir

### 1. Configuração do Ambiente

1. **Fork** o repositório
2. **Clone** seu fork localmente:
   ```bash
   git clone https://github.com/seu-usuario/FreePlayFinder.git
   cd FreePlayFinder
   ```
3. **Instale** as dependências:
   ```bash
   npm install
   ```
4. **Configure** o upstream:
   ```bash
   git remote add upstream https://github.com/original/FreePlayFinder.git
   ```

### 2. Criando uma Branch

Sempre crie uma nova branch para suas mudanças:

```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
# ou
git checkout -b docs/atualizacao-documentacao
```

### 3. Desenvolvimento

1. **Faça** suas mudanças
2. **Teste** localmente:
   ```bash
   npm start          # Servidor de desenvolvimento
   npm test           # Testes unitários
   npm run build      # Build de produção
   ```
3. **Siga** os padrões de código (veja seção abaixo)

### 4. Commit e Push

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade de busca avançada"
git push origin feature/nova-funcionalidade
```

### 5. Pull Request

1. Vá para o repositório original no GitHub
2. Clique em "New Pull Request"
3. Selecione sua branch
4. Preencha o template do PR
5. Aguarde a revisão

## 📝 Padrões de Código

### TypeScript/Angular

- Use **TypeScript** strict mode
- Siga o **Angular Style Guide**
- Use **interfaces** para tipos
- Documente **métodos públicos**
- Use **async/await** quando possível

### CSS/SCSS

- Use **BEM** ou **SMACSS** para nomenclatura
- Mantenha **especificidade baixa**
- Use **variáveis CSS** para cores
- Organize imports no topo

### Git

- Use **conventional commits**:
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `docs:` documentação
  - `style:` formatação
  - `refactor:` refatoração
  - `test:` testes
  - `chore:` tarefas

### Exemplos de Commits

```bash
feat: adiciona filtro por gênero na lista de jogos
fix: corrige erro de validação no formulário de perfil
docs: atualiza README com novas instruções
style: melhora responsividade do componente navbar
refactor: simplifica lógica de busca de jogos
test: adiciona testes para o serviço de jogos
chore: atualiza dependências do projeto
```

## 🧪 Testes

### Executando Testes

```bash
# Todos os testes
npm test

# Testes em modo watch
npm run test:watch

# Testes com coverage
npm run test:coverage

# Testes específicos
npm test -- --include="**/game.service.spec.ts"
```

### Escrevendo Testes

- Teste **componentes** isoladamente
- Mock **serviços** externos
- Teste **casos de erro**
- Mantenha **cobertura alta**

## 📚 Documentação

### Atualizando Documentação

- Mantenha o **README** atualizado
- Documente **APIs públicas**
- Adicione **exemplos de uso**
- Inclua **screenshots** quando relevante

### Estrutura de Documentação

```
docs/
├── api/              # Documentação da API
├── components/       # Documentação de componentes
├── getting-started/  # Guias de início
└── examples/         # Exemplos de uso
```

## 🐛 Reportando Bugs

### Template de Bug Report

```markdown
## Descrição do Bug
Descrição clara e concisa do bug.

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## Comportamento Esperado
O que deveria acontecer.

## Comportamento Atual
O que está acontecendo.

## Screenshots
Se aplicável, adicione screenshots.

## Ambiente
- OS: [ex: macOS, Windows, Linux]
- Browser: [ex: Chrome, Firefox, Safari]
- Versão: [ex: 22]

## Informações Adicionais
Qualquer outra informação relevante.
```

## 💡 Sugerindo Funcionalidades

### Template de Feature Request

```markdown
## Descrição da Funcionalidade
Descrição clara da funcionalidade desejada.

## Problema que Resolve
Qual problema esta funcionalidade resolveria?

## Solução Proposta
Como você gostaria que funcionasse?

## Alternativas Consideradas
Outras soluções que você considerou.

## Informações Adicionais
Screenshots, mockups, etc.
```

## 🔍 Revisão de Código

### Checklist para Revisores

- [ ] Código segue padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Funcionalidade foi testada
- [ ] Não há regressões

### Checklist para Autores

- [ ] Código está limpo e bem documentado
- [ ] Testes passam
- [ ] Build de produção funciona
- [ ] Funcionalidade foi testada manualmente
- [ ] PR description está completa

## 🏷️ Labels

Usamos as seguintes labels:

- `bug` - Problemas e bugs
- `enhancement` - Melhorias
- `feature` - Novas funcionalidades
- `documentation` - Documentação
- `good first issue` - Boas para iniciantes
- `help wanted` - Precisa de ajuda
- `priority: high` - Alta prioridade
- `priority: low` - Baixa prioridade

## 📞 Comunicação

- **Issues**: Para bugs e sugestões
- **Discussions**: Para discussões gerais
- **Pull Requests**: Para contribuições de código

## 🎉 Reconhecimento

Contribuidores serão listados no README e receberão crédito por suas contribuições.

---

Obrigado por contribuir com o FreePlayFinder! 🎮 