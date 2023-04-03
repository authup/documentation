# Introduction

This section will help you set up Authup in a **docker-compose** environment.

## Requirements
The following guide is based on some shared assumptions:

- Min. `2` cores
- Min. `5G` hard disk
- Docker `v20.x` is [installed](https://docs.docker.com/get-docker/)
- Up to two available ports on the host system if you want to map the services to your local machine (default: `3000` and `3001`)
- This guide assumes [Compose v2](https://docs.docker.com/compose/compose-file/)



## Quick Start

This section contains multiple examples for how to deploy and configure authup using docker-compose. The different 
examples show how to configure authup using the options described in the [configuration](./configuration) section. Simply
paste and modify the example you want to use into a `docker-compose.yml` file.

The following example shows a sensible default configuration for getting started with Authup. This will start the REST API as well as the UI from
the same container and forward them to the ports `3000` and `3001` respectively on the local machine.

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
    command: cli start

```

Then start the service using the following command:

```bash
docker compose up -d
```

and check the logs using:

```bash
docker compose logs -f
```

## Configuration

The following example show different ways to configure and use the Authup service using docker-compose. For more general
information about how to configure Authup, see the [configuration](./configuration) section.

::: warning **Warning**
When starting more than one service from the same container (such as in the quick start example) you can not use
environment variable to configure the services. This is because of potential conflicts between the different services.

Instead, you should use a mounted configuration file to configure the services. See the [configuration file](#configuration-file) 
section for more information.
:::


### Environment variables

The following example shows how to configure the Authup service using environment variables. This will start only the
REST API and forward it to the port `3000` on the local machine.

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
    environment:
        - ADMIN_USERNAME=test
        - ADMIN_PASSWORD=test-password
```


### Configuration file

This example shows how to start both services from the same container with the API being configured with non-default
values via a mounted configuration file.

Create a directory `writable` in the same directory as the `docker-compose.yml` file.
```bash
mkdir writable
cd writable
```
Then create a file called `authup.api.conf` and store it in the `writable` directory. Paste the following content into 
the file which will configure the admin user for the API service:

```dotenv
adminUsername=test
adminPassword=test-password
```

In the following compose file example you can see that the `writable` directory containing the `authup.api.conf` 
configuration file is mounted into the container under `/usr/src/writable` which is the default location for 
configuration files.

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
      - ./writable:/usr/src/writable
    ports:
      - "3000:3000"
      - "3001:3001"
    command: cli start

```


### Multiple services

This shows an example of how to run authup alongside other services (postgres & redis) and connect to them. It also shows how to split 
Authup into multiple services running the UI and API in separate containers.

Configuration via environment variables is possible in this configuration since both service are running in separate containers.

```yaml
version: '3.8'

volumes:
    authup_data:
    postgres_data:
    redis_data:

services:
    authup-api:
        image: ghcr.io/authup/authup:latest
        container_name: authup-api
        restart: unless-stopped
        volumes:
            - authup_data:/usr/src/writable
        ports:
            - "3000:3000"
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
    
    authup-ui:
        image: ghcr.io/authup/authup:latest
        container_name: authup-ui
        restart: unless-stopped
        depends_on:
          - authup-api
        ports:
            - "3001:3001"
        command: ui start
    
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

## Troubleshooting
### Authup not reachable for redirect in other services
If you would like to access the Authup instance and your operations require a redirect to the Authup instance, you need to
set the `PUBLIC_URL` environment variable to the service name and port of the Authup service (i.e. `authup:3000`). This will
allow the compose network to resolve the service name to the correct IP address.


