FROM canardconfit/puppeteer-docker:puppeteer-23.10.1-arm64

WORKDIR /home/pptruser/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

ENV NODE_ENV=production
CMD ["node", "index.js"]