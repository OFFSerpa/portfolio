---
titulo: "Murall"
descricao: "App macOS para criar layouts em bento grid para eventos e apresentações, com componentes SwiftUI redimensionáveis empacotados como Swift Package."
stack: ["Swift", "SwiftUI", "AppKit", "SPM"]
data: 2024-08-01
destaque: true
---

## Visão Geral

Murall é um editor visual macOS que permite montar layouts em bento grid — o formato de grade modular popularizado por apresentações e sites modernos. O objetivo era criar uma ferramenta rápida para organizar conteúdo visual sem depender de apps complexos como Figma.

## Arquitetura

O projeto é dividido em dois layers principais:

- **MurallCore** — Swift Package reutilizável com os componentes SwiftUI de célula redimensionável. O package é independente do app principal, facilitando testes isolados e eventual reutilização em outros projetos.
- **MurallApp** — Camada AppKit responsável pela janela, menus e integração com o sistema macOS (drag & drop, exportação de imagem).

## Decisões Técnicas

A escolha por SwiftUI nos componentes internos com AppKit na shell foi intencional: SwiftUI oferece reatividade e composição fácil para o grid dinâmico, enquanto AppKit ainda é necessário para funcionalidades macOS de mais baixo nível — como controle granular da janela e acessar APIs de exportação de imagem via `NSImage`.

## Aprendizados

Esse projeto foi meu primeiro contato sério com **Swift Package Manager** como ferramenta de modularização real (não só para dependências externas). Separar a UI reutilizável em um package próprio tornou os testes muito mais diretos e revelou cedo problemas de acoplamento que teria descoberto tarde demais num monolito.
