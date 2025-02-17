FROM node:20.18-alpine
WORKDIR /usr/app
COPY package*.json .
RUN npm install --quiet
COPY app.js .
ARG PORT
EXPOSE ${PORT}
CMD ["npm", "run", "start"]