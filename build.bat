echo on
docker image rm -f db:latest
docker image rm -f mq:latest
docker image rm -f server:latest 
docker compose -f .\docker-compose.yml up -d --build