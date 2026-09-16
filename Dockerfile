FROM nginx:1.31.6-alpine@sha256:d0a6faaed2491faecdb9021f449e8edd7b1bbba246fe2ddf7eba63cccd5b9803
COPY .  /usr/share/nginx/html/
