#!/bin/bash

# Trnkts Docker Build and Test Script
# This script demonstrates how to use the Docker setup for different purposes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  dev     - Start development environment with hot reload"
    echo "  build   - Build all packages"
    echo "  test    - Run tests and linting"
    echo "  ci      - Run full CI pipeline (lint, typecheck, format check, build, test)"
    echo "  prod    - Build and start production environment"
    echo "  clean   - Clean up Docker images and containers"
    echo "  shell   - Start development container with shell access"
    echo ""
    echo "Examples:"
    echo "  $0 ci           # Run full CI pipeline"
    echo "  $0 test         # Run tests only"
    echo "  $0 dev          # Start development server"
}

# Main script logic
case "${1:-}" in
    "dev")
        print_status "Starting development environment..."
        docker compose up --build trnkts-dev
        ;;
    
    "build")
        print_status "Building all packages..."
        docker compose build trnkts-build
        print_success "Build completed!"
        ;;
    
    "test")
        print_status "Running tests and linting..."
        docker compose build trnkts-test
        docker compose run --rm trnkts-test
        print_success "Tests completed!"
        ;;
    
    "ci")
        print_status "Running full CI pipeline..."
        docker compose build trnkts-ci
        docker compose run --rm trnkts-ci
        print_success "CI pipeline completed successfully!"
        ;;
    
    "prod")
        print_status "Building and starting production environment..."
        docker compose up --build -d trnkts-prod
        print_success "Production environment started!"
        print_status "Application should be available at http://localhost:3000"
        ;;
    
    "clean")
        print_status "Cleaning up Docker images and containers..."
        docker compose down --volumes --remove-orphans
        docker system prune -f
        print_success "Cleanup completed!"
        ;;
    
    "shell")
        print_status "Starting development container with shell access..."
        docker compose run --rm trnkts-dev sh
        ;;
    
    "help"|"-h"|"--help")
        show_usage
        ;;
    
    "")
        print_error "No command specified."
        echo ""
        show_usage
        exit 1
        ;;
    
    *)
        print_error "Unknown command: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac
