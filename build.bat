echo on
docker image rm -f db:latest
docker image rm -f server:latest
docker image rm -f mq:latest
docker build -t db:latest ./docker/db
docker build -t mq:latest ./docker/mq
docker build -t server:latest ./docker/server