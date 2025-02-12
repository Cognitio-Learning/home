# Stage 1: Build the app
FROM oven/bun:latest AS builder
WORKDIR /app

# Copy dependency definitions for caching.
COPY package.json ./
# If you have a Bun lock file (bun.lockb), uncomment the following line:
# COPY bun.lockb ./

# Install dependencies with Bun.
RUN bun install

# Copy the rest of the source code.
COPY . .

# Build the Next.js project.
RUN bun run build

# Stage 2: Run the app
FROM oven/bun:latest
WORKDIR /app

# Copy the built files from the builder stage.
COPY --from=builder /app ./

# Set the environment to production.
ENV NODE_ENV=production

# Expose the Next.js default port.
EXPOSE 3000

# Start the production server using Bun to run the defined start script.
CMD ["bun", "run", "start"]