# Change from 18 to 20
FROM node:20

WORKDIR /app

COPY package*.json ./
# Use --omit=dev instead of --only=production (modern npm syntax)
RUN npm install --omit=dev

COPY . .

# Ensure this matches your server port
EXPOSE 3000

CMD ["node", "server.js"]