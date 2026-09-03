FROM nginx:1.31.5-alpine@sha256:34f40471dea485273c5e2a04dd5e97a682332ceb4a9adecd67de450dcb2fb390
COPY .  /usr/share/nginx/html/
