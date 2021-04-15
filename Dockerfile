 FROM node:14
 ENV NODE_ENV=production
 WORKDIR /app
 COPY ["package.json", "package-lock.json*", "./"]
 RUN npm install 
 COPY . .
 CMD ["npm", "start"]