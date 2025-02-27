FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache curl

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]