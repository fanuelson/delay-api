FROM node:20.18-alpine
WORKDIR /usr/app
COPY package*.json .
RUN npm install --quiet
COPY app.js .
EXPOSE 3000
CMD ["npm", "run", "start"]