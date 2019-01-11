FROM node:8.12 as build-deps
WORKDIR /usr/src/app
COPY ui/package.json ui/yarn.lock ./
RUN yarn
COPY ui/. ./
RUN yarn build

FROM abiosoft/caddy:0.11.0-no-stats
COPY --from=build-deps /usr/src/app/dist /srv
