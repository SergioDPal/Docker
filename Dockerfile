FROM node:14.19.1-alpine3.14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["node", "index.js"]

EXPOSE 5000