
FROM node:lts-alpine AS builder

ARG COOKIE_KEY
ARG MK_NAME
ARG MK_ORG
ARG MK_URL
ARG UDID_CERT
ARG UDID_CHAIN
ARG UDID_KEY


ENV MK_NAME=$MK_NAME
ENV MK_ORG=$MK_ORG
ENV MK_URL=$MK_URL
ENV UDID_CERT=${UDID_CERT}
ENV UDID_CHAIN=${UDID_CHAIN}
ENV UDID_KEY=${UDID_KEY}

RUN mkdir /src
RUN mkdir /src/public
RUN apk add openssl

COPY *.json *.js /src/
COPY mkmobileconfig/ src/mkmobileconfig

WORKDIR /src

RUN npm run build

FROM node:lts-alpine

COPY *.json *.js /src/
COPY public/ /src/public 
COPY views/ /src/views
COPY routes/ /src/routes
COPY --from=builder /src/public/stage1.mobileconfig /src/public/stage1.mobileconfig

WORKDIR /src

RUN npm i

ENV PORT "8080"

CMD npm start
