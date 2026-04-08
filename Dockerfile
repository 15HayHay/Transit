FROM nginx:1.29.8-alpine@sha256:2c4de29ca0588f9b56ced6691e0c605c2fd00501478e2e12949ba062304bc1ca
COPY .  /usr/share/nginx/html/
