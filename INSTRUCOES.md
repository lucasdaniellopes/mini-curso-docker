# Instruções para o Minicurso Docker

Este documento contém instruções passo a passo para executar os exemplos práticos do minicurso "Docker: Do Básico ao Deploy com GitHub Actions".

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Docker** - [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. **Git** - [Download Git](https://git-scm.com/downloads)
3. **Conta no GitHub** - [Criar conta](https://github.com/join)

## Exemplos Práticos

### 1. Executando seu primeiro container

```bash
# Baixar e executar o Nginx
docker run -d -p 8080:80 --name meu-site nginx

# Verificar o container em execução
docker ps

# Acessar localhost:8080 no navegador

# Parar e remover o container
docker stop meu-site
docker rm meu-site
```

### 2. Construindo e executando nossa própria imagem

```bash
# Navegar até o diretório raiz do projeto
cd minicurso-docker

# Construir a imagem
docker build -t docker-demo:1.0 .

# Executar o container
docker run -d -p 8080:80 --name docker-demo docker-demo:1.0

# Verificar o container em execução
docker ps

# Acessar localhost:8080 no navegador

# Parar e remover o container quando terminar
docker stop docker-demo
docker rm docker-demo
```

### 3. Usando Docker Compose

```bash
# Navegar até o diretório raiz do projeto
cd minicurso-docker

# Iniciar os serviços definidos no docker-compose.yml
docker compose up -d

# Verificar os containers em execução
docker compose ps

# Acessar a aplicação em localhost:8080
# Acessar o pgAdmin em localhost:8081 (login: admin@example.com, senha: admin)

# Parar os serviços quando terminar
docker compose down
```

> **Nota**: Em versões mais recentes do Docker, o comando `docker-compose` foi substituído por `docker compose` (sem hífen). Ambos funcionam, mas recomenda-se usar a nova sintaxe.



## GitHub Actions

Para configurar o GitHub Actions para CI/CD:

1. Crie um repositório no GitHub

2. Faça push do código para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

3. Crie a estrutura de diretórios para o workflow:
   ```bash
   mkdir -p .github/workflows
   ```

4. Crie o arquivo de workflow `.github/workflows/docker-ci-cd.yml` com o seguinte conteúdo:
   ```yaml
   name: Docker CI/CD

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-push:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout código
           uses: actions/checkout@v2
         
         - name: Login no Docker Hub
           uses: docker/login-action@v1
           with:
             username: ${{ secrets.DOCKER_HUB_USERNAME }}
             password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}
         
         - name: Build e Push
           uses: docker/build-push-action@v2
           with:
             context: .
             push: ${{ github.event_name != 'pull_request' }}
             tags: ${{ secrets.DOCKER_HUB_USERNAME }}/docker-demo:latest
   ```

5. No GitHub, vá para Settings > Secrets > Actions e adicione os seguintes secrets:
   - `DOCKER_HUB_USERNAME`: seu nome de usuário no Docker Hub
   - `DOCKER_HUB_ACCESS_TOKEN`: seu token de acesso do Docker Hub (gere em https://hub.docker.com/settings/security)

6. Faça um push para o branch main para acionar o workflow:
   ```bash
   git add .
   git commit -m "Adiciona workflow de CI/CD"
   git push
   ```

7. Verifique a execução do workflow na aba "Actions" do seu repositório no GitHub

## Comandos Docker Úteis

### Comandos Básicos

```bash
# Listar imagens
docker images

# Listar containers em execução
docker ps

# Listar todos os containers (incluindo parados)
docker ps -a

# Verificar logs de um container
docker logs nome-do-container

# Entrar em um container em execução
docker exec -it nome-do-container sh
```

### Limpeza e Manutenção

```bash
# Remover um container
docker rm nome-do-container

# Remover uma imagem
docker rmi nome-da-imagem

# Remover todos os containers parados
docker container prune

# Remover todas as imagens não utilizadas
docker image prune

# Remover todos os volumes não utilizados
docker volume prune

# Limpar tudo (containers parados, redes não utilizadas, imagens e volumes)
docker system prune -a --volumes
```

### Informações e Monitoramento

```bash
# Inspecionar um container
docker inspect nome-do-container

# Verificar uso de recursos
docker stats

# Verificar informações do sistema Docker
docker info

# Verificar a versão do Docker
docker version
```

## Conclusão

Este material prático fornece uma introdução ao Docker, desde os conceitos básicos até a implementação de CI/CD com GitHub Actions. Siga as instruções passo a passo para demonstrar cada conceito durante o minicurso.

Bom trabalho e boa sorte com o minicurso!

