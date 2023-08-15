# Rubiko Basic Docker

Este repositorio contiene un proyecto Docker que expone un endpoint HTTP en el puerto `5050`. El endpoint puede ser accedido haciendo una petición `GET` a `http://localhost:5050/health`.

## Cómo construir la imagen

Para construir la imagen, puedes usar el siguiente comando:

```
docker build -t rubiko-basic-docker .
```

## Cómo lanzar el contenedor

Para lanzar el contenedor, puedes usar el siguiente comando:

```
docker run -p 5050:5000 rubiko-basic-docker
```

Una vez que el contenedor se haya lanzado, puedes hacer una petición `GET` al endpoint `http://localhost:5050/health` para comprobar que está funcionando correctamente.

## Soporte para variables de entorno

El contenedor `web` puede aceptar una variable de entorno llamada `GREETINGS`. El valor de la variable de entorno se mostrará como respuesta a la llamada `GET http://localhost:5050/health`.

Por ejemplo, para lanzar el contenedor con una variable de entorno `GREETINGS` con el valor `"Hola Rubiko Tech!"`, puedes usar el siguiente comando:

```
docker run -p 5050:5000 -e GREETINGS="Hola Rubiko Tech!" rubiko-basic-docker
```

En este caso, la respuesta a la llamada `GET http://localhost:5050/health` será `"Hola Rubiko Tech!"`.

# Docker Compose

## Cómo lanzar el `docker-compose`

Para lanzar el `docker-compose`, puedes usar el siguiente comando:

```
docker-compose up
```

Esto lanzará los dos contenedores, `web` y `curl`. El contenedor `curl` hará una petición al contenedor `web` y mostrará el resultado de la respuesta en caso de que éste ya disponga de servicio. En caso contrario, repetirá la petición cada dos segundos hasta que consiga respuesta.
