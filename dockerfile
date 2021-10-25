FROM node:16.11.1					

WORKDIR /usr/src/app					

COPY package*.json ./					

RUN npm install						

COPY . .						

EXPOSE 5000						

CMD [ "node","run start" ]