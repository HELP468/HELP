#!/bin/bash

set -e

# Load .env variables
export $(grep -v '^#' .env | xargs)

# Login to GHCR
echo "$GHCR_PAT" | docker login ghcr.io -u "$GHCR_USER" --password-stdin

# Remove old images for a clean rebuild
docker image rm -f temporalcrow/backend_server:latest || true
docker image rm -f temporalcrow/frontend_server:latest || true

# Build up the stack
docker compose -f docker-compose.dev.yml up -d --build
