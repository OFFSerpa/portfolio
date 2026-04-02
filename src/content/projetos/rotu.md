---
titulo: "Rotú — Rotulagem Acessível"
descricao: "App de acessibilidade que identifica rótulos nutricionais para pessoas com deficiência visual, usando CoreML integrado ao VisionKit."
stack: ["Swift", "SwiftUI", "CoreML", "VisionKit", "MVVM"]
data: 2024-05-01
destaque: true
---

## Visão Geral

Rotú foi desenvolvido durante a Apple Developer Academy com foco em acessibilidade real: pessoas com deficiência visual têm dificuldade para ler rótulos nutricionais em embalagens. O app usa a câmera do iPhone para capturar a embalagem, identificar o rótulo e narrar as informações nutricionais por voz.

## Stack e Integração

- **VisionKit** para o pipeline de captura e detecção de documento na câmera, com feedback visual em tempo real via `DataScannerViewController`
- **CoreML** com um modelo customizado treinado para reconhecer e segmentar a tabela nutricional de diferentes formatos de embalagem
- **AVSpeechSynthesizer** para a narração das informações, com suporte à velocidade de leitura ajustável

## Arquitetura

Segui MVVM com separação clara entre a camada de visão (SwiftUI views + câmera) e a lógica de reconhecimento (ViewModel + CoreML pipeline). Isso facilitou muito os testes unitários do modelo de reconhecimento sem precisar instanciar a câmera.

## Resultado

O app foi publicado na App Store como parte do portfólio da Academy e acumulou mais de 10k impressões ao longo do programa. Foi o projeto onde aprendi na prática a lidar com **acessibilidade como requisito primário**, não como ajuste posterior — o que mudou minha forma de pensar UX em todos os projetos seguintes.
