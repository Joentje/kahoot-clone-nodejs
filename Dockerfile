FROM node:12

COPY . /src/

WORKDIR /src/

ENTRYPOINT nodejs server/server.js