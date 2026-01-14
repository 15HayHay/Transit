FROM nginx:1.29.4-alpine@sha256:66d420cc54ef85bcc1d72220e83d7aaa6c4850bd2904794e3a56f09fd4ccb66e
COPY .  /usr/share/nginx/html/
