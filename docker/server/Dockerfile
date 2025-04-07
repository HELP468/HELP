FROM node

RUN apt update && \
    apt upgrade -y

WORKDIR /apps

COPY backend .

EXPOSE 3033

CMD ["/bin/bash", "/apps/start-server.sh"]