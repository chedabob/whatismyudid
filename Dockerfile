FROM node:10.18.1-alpine

ENV PORT=8001

RUN mkdir /src

COPY *.json *.js /src/
COPY public/ /src/public 
COPY views/ /src/views
COPY routes/ /src/routes

WORKDIR /src
RUN npm i

EXPOSE 8001

CMD npm start
