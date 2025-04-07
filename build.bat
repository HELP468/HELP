echo on
docker image rm -f db:latest 
docker image rm -f mq:latest
docker image rm -f frontend:latest
docker image rm -f backend:latest 
docker compose -f .\docker-compose.yml up -d --build