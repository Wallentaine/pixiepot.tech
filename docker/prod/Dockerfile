FROM node:18.14.0-alpine

RUN npm install -g pnpm

WORKDIR /web

COPY ./web .

RUN pnpm install

RUN pnpm run build

CMD pnpm start