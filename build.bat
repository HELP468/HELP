@echo off

REM Load .env variables
for /f "delims=" %%a in (.env) do set %%a

REM Login to GHCR
echo %GHCR_PAT% | docker login ghcr.io -u help468 --password-stdin

REM Remove old image
docker image rm -f ghcr.io/help468/help/backend_server:latest
docker image rm -f temporalcrow/frontend_server:latest

REM Start up the stack
docker compose -f docker-compose.prod.yml up -d --build
