#!/bin/sh

# Get the fully qualified domain name
export SERVER_NAME=$(hostname -f)

echo "Using SERVER_NAME=$SERVER_NAME"

# Wait for the SSL certificates to be available
echo "Waiting for certificates to be generated..."
until [ -f "/etc/letsencrypt/live/$SERVER_NAME/fullchain.pem" ] && [ -f "/etc/letsencrypt/live/$SERVER_NAME/privkey.pem" ]; do
  echo "Waiting for certificates..."
  sleep 5
done

echo "Certificates are now available."

# Substitute environment variable in the Nginx template
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.template.conf > /etc/nginx/conf.d/default.conf

# Start Nginx
exec nginx -g 'daemon off;'
