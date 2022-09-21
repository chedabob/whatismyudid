FROM node:lts-alpine

ENV PORT=8001

RUN mkdir /src

COPY *.json *.js /src/
COPY public/ /src/public 
COPY views/ /src/views
COPY routes/ /src/routes

WORKDIR /src
RUN npm i
RUN npm build

EXPOSE 8001

CMD npm start
