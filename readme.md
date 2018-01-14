# Basic docker setup for node development

## setup

Build the base image

```
./build.sh
```

Run dev environment with

```
docker-compose up
```

Check if the server is running with

```
curl -i http://localhost:3000/
```

## access container command line

Run this on your local machine

```
docker exec -it app /bin/sh
```

## Health check

This image makes use of docker healtz.

Check the status with

```
docker ps
docker inspect --format='{{json .State.Health}}' your-container-name
```
