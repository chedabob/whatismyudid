FROM node:10.7.0-alpine

ENV PORT=8001

RUN mkdir /src

COPY *.json *.js /src/
COPY public/ /src/public 
COPY views/ /src/views
COPY routes/ /src/routes

WORKDIR /src
RUN npm i

EXPOSE 8000

CMD npm start
