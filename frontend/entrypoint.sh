#!/bin/sh

echo "Using SERVER_NAME=$SERVER_NAME"

# Always include HTTP config (this will serve HTTP requests initially)
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.http.conf > /etc/nginx/conf.d/default.conf

# Debugging: Check if substitution worked for HTTP config
cat /etc/nginx/conf.d/default.conf

# Conditionally include HTTPS config if certs exist
CERT_PATH="/etc/letsencrypt/live/${SERVER_NAME}/fullchain.pem"
KEY_PATH="/etc/letsencrypt/live/${SERVER_NAME}/privkey.pem"

if [ -f "$CERT_PATH" ] && [ -f "$KEY_PATH" ]; then
    echo "Found SSL certs for ${SERVER_NAME}, enabling HTTPS"
    envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/nginx.https.conf >> /etc/nginx/conf.d/default.conf

    # Debugging: Check if substitution worked for HTTPS config
    cat /etc/nginx/conf.d/default.conf
else
    echo "No certs found yet for ${SERVER_NAME}, skipping HTTPS for now"
fi

# Start Nginx with environment variables loaded
exec env SERVER_NAME=$SERVER_NAME nginx -g 'daemon off;'
