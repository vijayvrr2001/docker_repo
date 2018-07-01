FROM node:8.9-alpine
#ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD node index.js