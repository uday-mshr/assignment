FROM node:20.11.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

EXPOSE 3000

# Run the application with nodemon
CMD ["npm", "run", "dev"]

