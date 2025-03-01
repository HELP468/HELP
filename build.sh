#!/bin/bash

set -e

docker image rm -f db:latest || true
docker image rm -f mq:latest || true
docker image rm -f server:latest || true

docker build -t db:latest ./docker/db
docker build -t mq:latest ./docker/mq
docker build -t server:latest ./docker/server