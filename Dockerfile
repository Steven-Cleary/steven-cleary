FROM node:12

WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app

COPY --chown=node:node package*.json /usr/src/app/

USER node

RUN npm install

COPY --chown=node:node . /usr/src/app

ENV NODE_ENV production

RUN npm run build

RUN npm prune

ENV HOST 0.0.0.0

ENV PORT 8080

EXPOSE 8080

CMD ["npm", "run", "start"]
