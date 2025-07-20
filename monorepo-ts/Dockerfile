# Multi-stage Dockerfile for trnkts monorepo
# Supports building, testing, and linting

# Base stage with Node.js and dependencies
FROM node:24-alpine AS base

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache git

# Copy package files for dependency installation
COPY package*.json ./
COPY packages/core/package.json ./packages/core/
COPY packages/identifier/package.json ./packages/identifier/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies (use install instead of ci for workspace setup)
RUN npm install

# Development stage - includes all dev dependencies and source code
FROM base AS development

# Copy all source code
COPY . .

# Build stage - compile TypeScript
FROM development AS build

# Build packages in dependency order for TypeScript composite projects
RUN cd packages/utils && npm run build
RUN cd packages/core && npm run build  
RUN cd packages/identifier && npm run build

# Test stage - run all tests
FROM development AS test

# Run linting
RUN npm run lint

# Run type checking (packages should be built first)
RUN cd packages/utils && npm run typecheck
RUN cd packages/core && npm run typecheck  
RUN cd packages/identifier && npm run typecheck

# Run tests with coverage
RUN npm run test

# Production stage - only built artifacts and production dependencies
FROM node:24-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY packages/*/package.json ./packages/*/

# Install only production dependencies
RUN npm ci --omit=dev && npm cache clean --force

# Copy built artifacts from build stage
COPY --from=build /app/packages/*/dist ./packages/*/dist/

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S trnkts -u 1001

# Change ownership of the app directory
RUN chown -R trnkts:nodejs /app
USER trnkts

# Expose port (if needed for future API/CLI)
EXPOSE 3000

# Default command
CMD ["npm", "start"]

# CI stage - optimized for continuous integration
FROM development AS ci

# Set environment variables for CI
ENV NODE_ENV=test
ENV CI=true

# Run all quality checks
RUN npm run lint && \
    npm run typecheck && \
    npm run format:check && \
    npm run build && \
    npm run test

# Create a final verification step
RUN echo "✅ All checks passed successfully!"
