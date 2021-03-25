FROM node:15.12.0

COPY . /src/

ENV DATABASE_URL=mongodb
ENV DATABASE_PORT=27017

WORKDIR /src/

ENTRYPOINT nodejs server/server.js