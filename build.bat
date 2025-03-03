echo on
docker image rm -f db:latest
docker image rm -f server:latest
docker image rm -f mq:latest
docker build --no-cache -t db:latest ./docker/db
docker build --no-cache -t mq:latest ./docker/mq
docker build --no-cache -t server:latest ./docker/server