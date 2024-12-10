SBG Koliseum Database
=====================

How to setup development environment
====================================

1. Tener descargado y funcional DOCKER en tu equipo (https://docs.docker.com/desktop/windows/install/)
2. Tener descargada la imagen oficial de Mongo:  ``docker pull mongo``
3. 1. Crear/Encender el contenedor: ``docker compose up -d``
3. 2. Crear/Encender el contenedor en modo desarrollo: ``docker compose -f docker-compose.dev.yml up -d``
3. 3 Recrear el contenedor: 

```
docker compose -f docker-compose.dev.yml down --rmi all
docker compose -f docker-compose.dev.yml up -d --build --force-recreate
```

Tenemos un administrador web para gestionar la base de datos en : http://localhost:8081/