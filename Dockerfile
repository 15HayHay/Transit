FROM nginx:1.29.4-alpine@sha256:ce611bb6e76a1da3576e3875f78acb1064a4624dbf45abcbf14fd152cfb7a943
COPY .  /usr/share/nginx/html/
