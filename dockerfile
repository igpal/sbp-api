FROM node:16.11.1					

WORKDIR /usr/src/app					

COPY package*.json ./					

RUN npm ci					

COPY . .						

RUN npm run build

EXPOSE 4000						

CMD [ "node","dist/main.js" ]