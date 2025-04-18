#!/bin/sh

# Get the fully qualified domain name
export SERVER_NAME=$(hostname -f)

echo "Using SERVER_NAME=$SERVER_NAME"

# Substitute environment variable in the Nginx template
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.template.conf > /etc/nginx/conf.d/default.conf

# Start Nginx
exec nginx -g 'daemon off;'
