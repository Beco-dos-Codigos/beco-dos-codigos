# Configuração GitHub Pages

## Status Atual
- ✅ Domínio customizado: www.becodoscodigos.com.br
- ✅ Estrutura profissional criada em `/src`
- ⏳ Configuração GitHub Pages (próximo passo)

---

## Como Configurar (Escolha Uma Opção)

### Opção 1: Servir da Pasta `src/` (Recomendado)

**Passos:**

1. Vá para seu repositório no GitHub
2. Clique em **Settings**
3. Navegue até **Pages** (lado esquerdo)
4. Em "Build and deployment":
   - **Source:** "Deploy from a branch"
   - **Branch:** main
   - **Folder:** `/src`
5. Clique em Save
6. Aguarde alguns minutos para o site ser atualizado

**Vantagens:**
- ✅ Simples
- ✅ Nenhuma configuração extra necessária
- ✅ Atualização automática ao fazer push

---

### Opção 2: GitHub Actions (Para Deploy Automático de Lógica Complexa)

Se você quiser adicionar um build process no futuro, crie um workflow.

**Arquivo:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'src'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

---

## Verificar se Está Funcionando

1. Após configurar, acesse https://seu-usuario.github.io/beco-dos-codigos
2. Ou direto no domínio customizado: https://www.becodoscodigos.com.br

---

## Solução de Problemas

### Site não aparece
- Aguarde 5-10 minutos após a configuração
- Verifique se o branch é `main` e a pasta é `/src`

### CNAME não funciona
- Verifique se o arquivo `CNAME` está em `src/CNAME`
- Verifique as configurações DNS do domínio

### Mudanças não aparecem
- Faça um git push
- Verifique a aba "Actions" no GitHub para ver o deploy

---

## Próximos Passos

1. ✅ Configure GitHub Pages
2. Teste o site
3. Comece a fazer edições em `src/`
4. Cada push será deployado automaticamente
