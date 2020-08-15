FROM node:12

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

RUN npm run build

ENV HOST 0.0.0.0

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "run", "start"]
