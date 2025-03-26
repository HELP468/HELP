FROM rabbitmq

RUN apt update && \
    apt upgrade -y && \ 
    apt install -qq -y iputils-ping

EXPOSE 5672 15672