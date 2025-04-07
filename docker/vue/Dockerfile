FROM node

RUN apt update && \
    apt upgrade -y

WORKDIR /apps

COPY frontend .

EXPOSE 3000

CMD ["/bin/bash", "start-server.sh"]