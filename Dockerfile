

FROM node:18

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV PORT=3001

EXPOSE 3001

RUN npm run build

CMD [ "node", "dist/main.js" ]