FROM nginx:1.29.8-alpine@sha256:8aa63af009a39ecd6c28d61da578a5447378c10bb097a069e3a3e0fb42bb6b19
COPY .  /usr/share/nginx/html/
