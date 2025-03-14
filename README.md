<!-- 2/28/25 23:48: Using GNU GPLv3 License for now, could switch to something else later-->

# Hypervisor Enhanced Logistics Program (HELP) [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/license/gpl-3-0)

HELP aims to provide a lightweight solution to managing a ticket system. By implementing a secure login system for admins and users, we are able to use WebSocket instances to connect the two clients in chats for hands on tickets. This live chat is managed by RabbitMQ on its own Docker Container, the Node.js servers and MongoDB also run on their own dedicated containers.

[Deliverables](Deliverables/)

## Authors

[Umer Ayub](https://github.com/uayub02)\
[Lucas Granjeon](https://github.com/JV-Works)\
[Drew Lebo](https://github.com/temporalcrow)

## Features

<!-- 3/1/25 00:53: Do this after the app is closer to done -->

TBD

## Tech Stack

**Client:** Vue

**Server:** Node, Express, WebSockets, RabbitMQ (message queue), MongoDB

**Environment Configuration:** Dotenv

## Infrastructure

- [Docker](https://docs.docker.com/get-started/introduction/) containers for isolating the backend, database, and message queue.
- [Docker Compose](https://docs.docker.com/compose/) to manage the multi-container application setup.
- [CloudLab](https://www.cloudlab.us) for running the project.

## Deployment

### Building the Docker images

- If you are on Mac/Linux, run the following to automate the build process

```console
./build.sh
```

- If you are on Windows, run the following

```console
.\build.bat
```

- Lastly, run the following to join the containers

```console
docker compose up -d
```

## API Reference

#### Create User

```http
  POST /api/users
```

| Parameter       | Type     | Description                                                                  |
| :-------------- | :------- | :--------------------------------------------------------------------------- |
| `username`      | `string` | **Required**. The username of the user.                                      |
| `email`         | `string` | **Required**. the email of the user.                                         |
| `password_hash` | `string` | **Required**. the hashed password of the user.                               |
| `role`          | `string` | **Optional**. The role of the user. Default is "user". Can be set to "admin" |

#### Get User by ID

```http
  GET /api/users/:id
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `id`      | `string` | **Required**. The ID of the user to retrieve. |

#### Update User Info

```http
  PUT /api/users/:id
```

| Parameter       | Type     | Description                                                                  |
| :-------------- | :------- | :--------------------------------------------------------------------------- |
| `id`            | `string` | **Required**. the ID of the user to update.                                  |
| `username`      | `string` | **Optional**. The username of the user.                                      |
| `email`         | `string` | **Optional**. the email of the user.                                         |
| `password_hash` | `string` | **Optional**. the hashed password of the user.                               |
| `role`          | `string` | **Optional**. The role of the user. Default is "user". Can be set to "admin" |

#### Delete User

```http
  DELETE /api/users/:id
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Required**. The ID of the user to be deleted. |
