#FROM node:9-slim
#FROM node:14
FROM node:16-bullseye-slim
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install pm2 -g
COPY . /app
EXPOSE 8080
RUN chown -R node:node /app
USER node
CMD [ "pm2-runtime", "server.js" ]