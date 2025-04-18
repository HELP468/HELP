# Hypervisor Enhanced Logistics Program (HELP) [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/license/gpl-3-0)

HELP aims to provide a lightweight solution to managing a ticket system. By implementing a secure login system for admins and users, we are able to use WebSocket instances to connect the two clients in chats for hands on tickets. This live chat is managed by RabbitMQ on its own Docker Container, the Node.js servers and MongoDB also run on their own dedicated containers.

[Class Deliverables](deliverables/)

## Authors

[Umer Ayub](https://github.com/uayub02)\
[Lucas Granjeon](https://github.com/JV-Works)\
[Drew Lebo](https://github.com/temporalcrow)

## Features

- Secure user/admin login with bcrypt hashing
- MongoDB data storage for user and ticket data
- WIP Admin dashboard with user management tools
- Dockerized environment for consistent deployment

## Tech Stack

**Frontend:** Vue 3, Vite, Nginx
**Backend:** Node.js, Express, WebSockets
**Database:** MongoDB
**Message Queue:** RabbitMQ
**Environment Configuration**:

- Secrets are not pushed to Github
- Images are built using Github Actions and used in docker-compose
- Utilizing `.env` and `.dockerignore`
- Baked-in environment variables in the developer backend image stored in Github Container Registry
- Utilize Watchtower in production for CI/CD

## Infrastructure

- [Docker](https://docs.docker.com/get-started/introduction/) containers for isolating the frontend, backend, database, and message queue.
- [Docker Compose](https://docs.docker.com/compose/) to manage the multi-container application setup.
- [CloudLab](https://www.cloudlab.us) for running the project.

## Deployment

### Building the Docker images

- Create a `.env` file for secrets/config:

For **production** you will need to define `MONGODB` as your MongoDB URI, `RESTPORT` as the port you use for the backend container, `SALTROUND` as the number you want bcrypt to use. Below is an example of how that would look on the host machine.

```env
  MONGODB=mongodb://DatabaseContainerName:27017/DatabaseName
  RESTPORT=3000-49151
  SALTROUND=10-12
```

For **development** you will need to only create a classic personal access token on github with repo, `write:packages`, `read:packages`, and `delete:packages` permissions to an env variable called `GHCR_PAT`

```env
  GHCR_PAT=ghp_YourTokenHere
```

- If you are on Mac/Linux, run the following to automate the build process

```console
./build.sh
```

- If you are on Windows, run the following

```console
.\build.bat
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
