FROM nginx:1.30.0-alpine@sha256:f60d139a69209d4340f6621fc6a50c9843702214231522a3390432f8db0ed870
COPY .  /usr/share/nginx/html/
