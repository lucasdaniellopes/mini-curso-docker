# Define a imagem base que vamos usar
FROM nginx:alpine

# Executar comandos durante a construção da imagem
RUN echo "Bem-vindo ao minicurso de Docker!" > /usr/share/nginx/html/bemvindo.txt

# Copiar arquivos da aplicação para o diretório onde o Nginx serve os arquivos
COPY app/ /usr/share/nginx/html/

# Informar que o container vai usar a porta 80 (padrão do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado
CMD ["nginx", "-g", "daemon off;"]
