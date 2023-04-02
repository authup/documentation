# Introduction

This section will help you spin up Authup as a **docker** container.

## Requirements
The following guide is based on some shared assumptions:

- OS `debian` or `ubuntu`
- Docker `v20.x` is [installed](https://docs.docker.com/get-docker/)
- Min. `2` cores
- Min. `5G` hard disk
- Ports `3000` and `3001` are free on the host system


## Step. 1: Create a new project

Create and change into a new directory.

```bash
$ mkdir authup && cd authup
```

## Step. 2: Configuration

::: warning
It is important to mention that in the docker environment the configuration for the `PORT` option is ignored.
:::

So when authup container is run, the rules are as follows:
- If only **one service** is started, it always runs on the internal port `3000` and can be mounted on another external port ( `-p <port>:3000`)
- If **all services** are started from the same container, the internal port mapping looks like this:
    - **UI**: `3000`
    - **API**: `3001`


Follow the instructions for [configuring](./configuration.md) Authup using a configuration file or via environment variables.
In case of a configuration file, place it in the root directory.


## Step. 3: Boot up

To start all services from the same service, the following command should be executed:

```shell
docker run authup/authup:latest 
  -v authup:/usr/src/writable
  -p 3000:3000 # Mount ui port 3000 to external port 3000
  -p 3001:3001 # Mount api port 3001 to external port 3001
  cli start
```

To start each service separately, the following command should be executed depending on the service:

**`API`**
```shell
docker run authup/authup:latest 
  -v authup:/usr/src/writable
  -p 3001:3000 # Mount api port 3000 to external port 3001
  api start
```

**`UI`**
```shell
docker run authup/authup:latest 
  -p 3000:3000 # Mount ui port 3000 to external port 3000
  ui start
```

Now all should be set up, and you are ready to go :tada:

This will lunch the following application with default settings:
- UI: `http://127.0.0.1:3000/`
- API: `http://127.0.0.1:3001/`
- Docs: `http://127.0.0.1:3001/docs`
