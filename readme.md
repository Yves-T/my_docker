# Basic docker setup for node development

Run it with

```
docker-compose up
```

Check if the server is running with

```
curl -i http://localhost:3000/hello
```

## test the mongo container

Add a couple of products to the database

```
curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"XBox One","prod_desc":"New Microsoft XBox One, the latest games console","prod_price": 520 }' localhost:3000/products

curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"Sony PS 4","prod_desc":"Sony playstation 4","prod_price": 580 }' localhost:3000/products
```

Get the products back with

```
curl -i -H "Accept: application/json" localhost:3000/products
```

## Health check

This image makes use of docker healtz.

Check the status with

```
docker ps
docker inspect --format='{{json .State.Health}}' your-container-name
```
