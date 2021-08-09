## BUILD ##

FROM node:16-alpine as builder

WORKDIR /app

COPY . .

# Install node-gyp dependencies
RUN apk add python3 gcc make g++

# Install packages and run build
RUN yarn install --development && yarn run build

## HOST ##

FROM nginx:1.21.1-alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files to nginx default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Apply custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Start nginx without daemon
CMD "nginx" "-g" "daemon off;"

EXPOSE 80/tcp