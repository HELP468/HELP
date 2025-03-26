#!/bin/bash

set -e

docker image rm -f db:latest || true
docker image rm -f mq:latest || true
docker image rm -f server:latest || true

docker compose -f .\docker-compose.yml up -d --build