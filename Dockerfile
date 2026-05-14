FROM nginx:1.31.0-alpine@sha256:f105e3f12187c58ddc3acd09bbe4b9e4a9ab1df855d3d0e511b641077b5e988e
COPY .  /usr/share/nginx/html/
