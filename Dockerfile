FROM node:23.11.1-alpine3.22 AS build

# Install pnpm and create app directory
RUN npm install -g pnpm && mkdir /app

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile && pnpm store prune

# Bundle app source
COPY . .

# Build the application
RUN pnpm build

# Stage 2: Create the final image
FROM node:23.11.0-alpine3.21

# Install pnpm and create app directory
RUN npm install -g pnpm && mkdir /app

# Set working directory
WORKDIR /app

# Copy built application from the build stage
COPY --from=build /app ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start:prod"]
