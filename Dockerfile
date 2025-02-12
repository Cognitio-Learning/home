# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies without frozen lockfile first time
RUN bun install

# Copy all files
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1-slim AS runner

WORKDIR /app

# Set to production environment
ENV NODE_ENV production

# Create non-root user for security
RUN addgroup --system --gid 1001 bunjs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json

# Set correct permissions
RUN chown -R nextjs:bunjs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set hostname
ENV HOSTNAME "0.0.0.0"
ENV PORT 3000

# Start the application
CMD ["bun", "server.js"]