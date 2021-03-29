FROM node:12 as builder
COPY . /src/
WORKDIR /src/
RUN npm install


FROM node:12
COPY --from=builder /src/ /src/
ENV DATABASE_URL=mongodb
ENV DATABASE_PORT=27017
ENV SERVER_PORT=3111
WORKDIR /src/
ENTRYPOINT nodejs server/server.js
