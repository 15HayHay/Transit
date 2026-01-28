FROM nginx:1.29.4-alpine@sha256:7d7a15b8a280c661051955f14c2b91fed3e23724ddba18d2f53e8b44e74ab37a
COPY .  /usr/share/nginx/html/
