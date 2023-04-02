# Introduction

This section will help you set up Authup in a **docker-compose** environment.

## Requirements
The following guide is based on some shared assumptions:

- NodeJs `v16` (minimum)
- Min. `2` cores
- Min. `5G` hard disk
- Docker `v20.x` is [installed](https://docs.docker.com/get-docker/)
- Up to two available ports on the host system if you want to map the services to your local machine (default: `3000` and `3001`)
- This guide assumes [Compose v2](https://docs.docker.com/compose/compose-file/)



## Compose file configuration

This section contains multiple examples for how to deploy and configure authup using docker-compose. The different 
examples show how to configure authup using the options described in the [configuration](./configuration) section. Simply
paste and modify the example you want to use into a `docker-compose.yml` file.

The following example shows the most basic configuration for authup. It shows two options for configuring where
authup stores its data. The first option is to use a docker managed volume. The second option is to mount a local directory.

```yaml
version: '3.8'

volumes:
    authup:

services:
  authup:
    image: ghcr.io/authup/authup:latest
    container_name: authup
    restart: unless-stopped
    volumes:
      # Docker managed volume
      - authup:/usr/src/writable
      # storage in mounted volume
      #- ./writable:/usr/src/writable
    ports:
      - "3000:3000"
      - "3001:3001"

```

Then start the service using the following command:

```bash
docker compose up -d
```

and check the logs using:

```bash
docker compose logs -f
```


### Configuration via environment variables

The following example shows how to configure the Authup service using environment variables.

```yaml
version: '3.8'

volumes:
    authup:

services:
  authup:
    image: ghcr.io/authup/authup:latest
    container_name: authup
    restart: unless-stopped
    volumes:
      - authup:/usr/src/writable
    ports:
      - "3000:3000"
      - "3001:3001"
    environment:
        - ADMIN_USERNAME=test
        - ADMIN_PASSWORD=test-password
```


### Mounting a configuration file

The following example shows how to mount a configuration file into the Authup service achieving the same results as in 
the previous example with environment variables.

```dotenv [authup.conf]
adminUsername=test
adminPassword=test-password
```

```yaml
version: '3.8'

volumes:
  authup:

services:
  authup:
    image: ghcr.io/authup/authup:latest
    container_name: authup
    restart: unless-stopped
    volumes:
      - authup:/usr/src/writable
      - ./authup.conf/:/usr/src/authup.api.conf
    ports:
      - "3000:3000"
      - "3001:3001"

```


### Running alongside other services
This shows an example of how to run authup alongside other services. In this example, the authup service is configured to
run alongside a postgres database and a redis instance.


```yaml
version: '3.8'

volumes:
    authup_data:
    postgres_data:
    redis_data:

services:
    authup:
        image: ghcr.io/authup/authup:latest
        container_name: authup
        restart: unless-stopped
        volumes:
            - authup_data:/usr/src/writable
        ports:
            - "3000:3000"
            - "3001:3001"
        depends_on:
            - postgres
            - redis
        environment:
            - DB_TYPE=postgres
            - DB_HOST=postgres
            - DB_PORT=5432
            - DB_USERNAME=postgres
            - DB_PASSWORD=postgres
            - DB_DATABASE=postgres
            - REDIS_URL=redis://redis:6379
    postgres:
        image: postgres:14
        container_name: postgres
        restart: unless-stopped
        volumes:
            - postgres_data:/var/lib/postgresql/data
        environment:
            - POSTGRES_PASSWORD=postgres
            - POSTGRES_USER=postgres
            - POSTGRES_DB=postgres

    redis:
        image: redis:latest
        container_name: redis
        restart: unless-stopped
        volumes:
            - redis_data:/data

```

# Troubleshooting

## Container not reachable
If you would like to access the Authup instance and your operations require a redirect to the Authup instance, you need to
set the `PUBLIC_URL` environment variable to the service name and port of the Authup service (i.e. `authup:3000`). This will
allow the compose network to resolve the service name to the correct IP address.


