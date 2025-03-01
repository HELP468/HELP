FROM mongo:8.0.5

COPY start.sh /
COPY mongod.conf /etc/mongod.conf

RUN apt update && \
    apt upgrade -y && \
    apt install -qq -y iputils-ping

EXPOSE 27017 

CMD ["/bin/bash", "/start.sh"]