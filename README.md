# 🏠 Beco dos Códigos - Website

Website profissional para Beco dos Códigos hospedado em GitHub Pages.

📍 **Live:** [www.becodoscodigos.com.br](https://www.becodoscodigos.com.br)

---

## 📁 Estrutura do Projeto

```
beco-dos-codigos/
├── src/                          # ⭐ SITE PÚBLICO (raiz do site)
│   ├── index.html               # Página inicial
│   ├── CNAME                    # Domínio customizado
│   ├── pages/                   # Páginas adicionais
│   │   ├── portfolio.html
│   │   ├── servicos.html
│   │   ├── projetos.html
│   │   ├── contato.html
│   │   └── newsletter.html
│   ├── css/                     # Estilos centralizados
│   │   └── index.css
│   ├── js/                      # Scripts organizados
│   │   ├── index.js
│   │   ├── animations.js
│   │   └── utils.js
│   └── assets/                  # Recursos estáticos
│       └── img/
│
├── projects/                     # Projetos de desenvolvimento
│   ├── my-app/                  # React App
│   ├── my-react-app/            # React + Vite
│   └── nlw/                     # Projeto NLW
│
├── archive/                      # Arquivos antigos (histórico)
├── docs/                         # Documentação do projeto
├── CNAME                         # Domínio (cópia para raiz)
├── README.md                     # Este arquivo
└── .gitignore
```

---

## 🚀 Começando

### Desenvolvimento Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/beco-dos-codigos.git
cd beco-dos-codigos
```

2. Abra `src/index.html` em seu navegador
   - Ou use um servidor local (recomendado):
```bash
# Python 3
python -m http.server 8000 --directory src

# Node.js (com http-server)
npx http-server src -p 8000
```

3. Acesse http://localhost:8000

---

## 📝 Editar Conteúdo

### Adicionar Página
1. Crie arquivo em `src/pages/`
2. Atualize navegação em `src/js/index.js`
3. Adicione estilos em `src/css/`

### Adicionar Imagem
1. Coloque em `src/assets/img/`
2. Referencie como: `./assets/img/seu-arquivo.png`

### Editar Estilos
- Estilos globais: `src/css/index.css`
- Estilos por página: `src/css/pages.css` (quando criado)

---

## 🔧 Configuração GitHub Pages

### Opção 1: Servir da pasta `src/`
1. Vá para **Settings → Pages**
2. Source: Deploy from a branch
3. Branch: `main`, folder: `/(root)` 
4. **Note:** Será necessário mover src/* para raiz OU configurar workflow

### Opção 2: GitHub Actions (Recomendado)
Deploy automático da pasta `src/` quando você fizer push:

1. Crie arquivo `.github/workflows/deploy.yml`
2. Configure workflow para copiar `src/` para `gh-pages`

---

## 📚 Projetos de Desenvolvimento

Código de desenvolvimento (React, NLW, etc.) está isolado em `/projects`:

```bash
# React App
cd projects/my-app

# React + Vite
cd projects/my-react-app

# NLW
cd projects/nlw/fullstackIntermediario
```

---

## 🔄 Fluxo Git

```bash
# Editar arquivos em src/
git add .
git commit -m "feat: sua mensagem aqui"
git push origin main

# Site é atualizado automaticamente via GitHub Pages
```

---

## 🎨 Customizando

### Cores Principais
- Fundo: `#000000`
- Primária: `#f057f8` (magenta)
- Secundária: `#d7f9ff` (azul claro)

### Fontes
- Principal: "Franklin Gothic", "Arial Narrow", Arial

---

## 📞 Contato

- Email: contato@becodocodigos.com.br
- LinkedIn: [Seu Perfil]

---

**Última atualização:** Maio 2026  
**Status:** ✅ Estrutura Profissional Implementada
