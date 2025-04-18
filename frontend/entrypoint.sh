#!/bin/sh

echo "Using SERVER_NAME=$SERVER_NAME"

# Always include HTTP config
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.http.conf > /etc/nginx/conf.d/default.conf

# Conditionally include HTTPS config if certs exist
if [ -f "$CERT_PATH" ] && [ -f "$KEY_PATH" ]; then
    echo "Found SSL certs for ${SERVER_NAME}, enabling HTTPS"
    envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.https.conf >> /etc/nginx/conf.d/default.conf
else
    echo "No certs found yet for ${SERVER_NAME}, skipping HTTPS for now"
fi

# Start Nginx
exec nginx -g 'daemon off;'
