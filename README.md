# Portfólio — Vinicius Serpa

Site de portfólio pessoal construído com Astro v6 e Tailwind CSS v4.

## Stack

- **Framework:** [Astro v6](https://astro.build)
- **Estilização:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Conteúdo:** Astro Content Collections com arquivos Markdown

## Estrutura do projeto

```
src/
├── content.config.ts          # Schema das coleções
├── content/projetos/          # Arquivos .md de cada projeto
├── layouts/
│   └── Layout.astro           # Layout base
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── ProjectCard.astro
├── pages/
│   ├── index.astro            # Página inicial
│   └── projetos/[slug].astro  # Página individual de projeto
└── styles/
    └── global.css             # Tema Tailwind (paleta + fontes)
```

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:4321
```

## Outros comandos

| Comando           | Ação                                      |
| :---------------- | :---------------------------------------- |
| `npm run build`   | Gera o site estático em `./dist/`         |
| `npm run preview` | Visualiza o build antes de fazer o deploy |

## Adicionando projetos

Crie um arquivo `.md` em `src/content/projetos/` seguindo o schema:

```yaml
---
titulo: "Nome do Projeto"
descricao: "Descrição curta exibida no card."
stack: ["Swift", "SwiftUI"]
repositorio: "https://github.com/OFFSerpa/repo"  # opcional
data: 2025-01-01
destaque: false
---

Conteúdo completo do projeto em Markdown...
```

O projeto aparece automaticamente no grid da página inicial e ganha uma página própria em `/projetos/nome-do-arquivo`.
