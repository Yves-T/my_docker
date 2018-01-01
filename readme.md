# Basic docker setup for node development

Run it with

```
docker-compose up
```

Check if the server is running with

```
curl -i http://localhost:3000/
```

## Health check

This image makes use of docker healtz.

Check the status with

```
docker ps
docker inspect --format='{{json .State.Health}}' your-container-name
```
