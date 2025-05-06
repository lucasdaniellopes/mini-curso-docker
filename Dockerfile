
FROM nginx:alpine


RUN echo "Bem-vindo ao minicurso de Docker!" > /usr/share/nginx/html/bemvindo.txt

COPY app/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
