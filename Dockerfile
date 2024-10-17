# Stage 1: Build the application
FROM node:20.15.1-alpine AS build

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile && \
    yarn cache clean

# Bundle app source
COPY . .

# Build the application
RUN yarn build

# Stage 2: Create the final image
FROM node:20.15.1-alpine

# Create app directory
WORKDIR /app

# Copy built application from the build stage
COPY --from=build /app ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start:prod"]
