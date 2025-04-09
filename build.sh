#!/bin/bash

set -e

# Load .env variables
export $(grep -v '^#' .env | xargs)

# Login to GHCR
echo "$GHCR_PAT" | docker login ghcr.io -u help468 --password-stdin

# Remove old images for a clean rebuild
docker image rm -f ghcr.io/help468/help/backend_server:dev || true
docker image rm -f temporalcrow/frontend_server:dev || true

# Build up the stack
docker compose -f docker-compose.dev.yml up -d --build
