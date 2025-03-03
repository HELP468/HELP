FROM node:23.9.0

COPY start-server.sh /

RUN apt update && \
    apt upgrade -y && \
    apt install -qq -y iputils-ping

EXPOSE 3000 3033

CMD ["/bin/bash", "/start-server.sh"]