FROM nginx:1.29.4-alpine@sha256:fd9f8ce722ab13edb2e47ebdd16b843939280457bf1567a6cd155203f9ce98d8
COPY .  /usr/share/nginx/html/
