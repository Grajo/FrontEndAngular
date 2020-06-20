#FROM node:12.18.1-alpine3.12 as node
FROM node:latest as node

ARG ENV=prod
ARG APP=Web

ENV ENV ${ENV}
ENV APP ${APP}

#set working directory
WORKDIR /app
COPY ./ /app/

# Instala y construye el Angular App
RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/


RUN npm install

# Angular app construida, la vamos a hostear un server production, este es Nginx

FROM nginx:1.13.8-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf