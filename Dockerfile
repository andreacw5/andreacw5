FROM node:20.15.1-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile && \
    yarn cache clean

# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]
