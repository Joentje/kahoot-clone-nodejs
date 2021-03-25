FROM node:12

COPY . /src/

ENV DATABASE_URL=mongodb
ENV DATABASE_PORT=27017

WORKDIR /src/

ENTRYPOINT nodejs server/server.js