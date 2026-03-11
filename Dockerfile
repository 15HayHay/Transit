FROM nginx:1.29.6-alpine@sha256:9a4a85e7006ced27ca077d759ffed671b8a094856703b0af15e2c28902800b1d
COPY .  /usr/share/nginx/html/
