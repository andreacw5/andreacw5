FROM node:23.11.1-alpine3.22 AS build

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (faster, smaller)
RUN pnpm install --frozen-lockfile && pnpm store prune

# Copy rest of the app
COPY . .

# Build Nuxt 4 app
RUN pnpm run build

# Production image
FROM node:23.11.1-alpine3.22 AS production

ENV NODE_ENV=production
WORKDIR /app

# Install pnpm (for running app)
RUN npm install -g pnpm

# Copy only built output and minimal files
COPY --from=build /app/.output ./.output
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile && pnpm store prune

EXPOSE 3000

CMD ["pnpm", "start"]
