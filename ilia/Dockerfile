FROM node:18-alpine3.17

WORKDIR /app
COPY . . 

RUN npm install && npm run build

CMD [ "npm","run","dev" ]