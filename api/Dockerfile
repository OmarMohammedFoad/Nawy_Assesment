FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./	
COPY tsconfig.json .
RUN npm install
COPY . .
CMD ["npm","run", "dev","--host","0.0.0.0"]
