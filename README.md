# Docker: Do Básico ao Deploy com GitHub Actions

Material prático para o minicurso sobre Docker e GitHub Actions.

## Estrutura do Projeto

```
minicurso-docker/
├── app/                    # Aplicação web simples
│   ├── index.html          # Página principal
│   ├── styles.css          # Estilos CSS
│   └── app.js              # JavaScript da aplicação
├── Dockerfile              # Dockerfile para a aplicação
├── docker-compose.yml      # Configuração do Docker Compose
└── .github/workflows/      # Workflows do GitHub Actions
    └── docker-ci-cd.yml    # Workflow de CI/CD
```

## Requisitos

- Docker instalado (https://docs.docker.com/get-docker/)
- Docker Compose instalado (incluído no Docker Desktop)
- Conta no GitHub
- Git instalado

## Como Usar

1. Clone este repositório
2. Navegue até o diretório do projeto
3. Execute os exemplos conforme as instruções da aula

## Exemplos Incluídos

1. **Aplicação Web Simples**: Uma aplicação web básica com HTML, CSS e JavaScript
2. **Docker Compose**: Configuração para executar a aplicação com banco de dados
3. **CI/CD com GitHub Actions**: Workflow para build e deploy automático

## Licença

Este projeto está licenciado sob a licença MIT.
