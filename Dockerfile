FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

RUN pnpm exec husky install

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]