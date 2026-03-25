FROM nginx:1.29.7-alpine@sha256:eb37f58646a901dc7727cf448cae36daaefaba79de33b5058dab79aa4c04aefb
COPY .  /usr/share/nginx/html/
