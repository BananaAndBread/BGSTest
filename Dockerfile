FROM node:13.13.0-alpine
WORKDIR /usr/app
COPY package.json .
RUN apk update && apk add python make g++
RUN npm install --quiet
COPY . .
