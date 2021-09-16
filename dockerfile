FROM node:12

WORKDIR /hastebin

COPY package*.json ./

RUN npm install

COPY . ./

ENV PORT=3000

CMD [ "npm", "run", "start" ]