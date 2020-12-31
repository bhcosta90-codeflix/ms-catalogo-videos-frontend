FROM node:14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY tsconfig.json /app/tsconfig.json
COPY public /app/public
COPY src /app/src

RUN npm install && \
    npm install react-scripts@3.3.1 -g && \
    apk add bash
# start app
CMD ["npm", "start"]

#FROM node:14-alpine
#
#WORKDIR /src
#
#ADD package.json /src
#
#RUN npm install
#
#ADD . /src
#
#EXPOSE 3000
#
#CMD npm start
