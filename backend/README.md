# StaffMessenger backend

Spring Boot REST API for **StaffMessenger**: employee CRUD stored in MySQL, and messages sent between employees through RabbitMQ.

Part of the [StaffMessenger](../README.md) monorepo. The web app is in [`frontend/`](../frontend/).

## Tech stack

- Java 17, Spring Boot 2.7
- Spring Data JPA (Hibernate) with MySQL
- Spring AMQP with RabbitMQ
- Maven (wrapper included), Docker

## API

Base path: `/api/v1/employees`

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/v1/employees` | List employees |
| `POST` | `/api/v1/employees` | Create an employee |
| `GET` | `/api/v1/employees/{id}` | Get an employee |
| `PUT` | `/api/v1/employees/{id}` | Update an employee |
| `DELETE` | `/api/v1/employees/{id}` | Delete an employee |
| `POST` | `/api/v1/employees/message` | Send a message (`senderId`, `receiverId`, `messageBody`) |
| `GET` | `/api/v1/employees/message` | List received messages |
| `DELETE` | `/api/v1/employees/message` | Clear received messages |

## Messaging

- `Runner` publishes each message to the topic exchange `spring-boot-exchange` with the routing key `foo.bar.baz`.
- `RabbitMQConfig` declares that exchange, the queue `spring-boot` and a binding on `foo.bar.#`, so RabbitMQ creates them on startup.
- `Receiver` listens on the queue and keeps received messages in memory.

## Project structure

```
src/main/java/com/stage/employee/
├── config/       RabbitMQ exchange, queue and binding
├── controller/   REST controllers
├── model/        Employee entity, Message
├── repository/   Spring Data repository
├── service/      RabbitMQ sender (Runner) and listener (Receiver)
└── exception/    Not-found exception
```

## Getting started

### Requirements

- JDK 17
- MySQL and RabbitMQ (or the Docker setup at the repository root)

### Configuration

Defaults are in `src/main/resources/application.properties`:

| Property | Default |
|---|---|
| `server.port` | `8080` |
| `spring.datasource.url` | `jdbc:mysql://localhost:3306/employee_management_db` |
| `spring.datasource.username` / `password` | `root` / empty |
| RabbitMQ | `localhost:5672`, user `guest` / `guest` (Spring Boot defaults) |

Every setting can be overridden with environment variables such as `SPRING_DATASOURCE_URL` or `SPRING_RABBITMQ_HOST`, which is what Docker Compose does. Hibernate runs with `ddl-auto=update`, so the schema is created on first start.

### Run locally

```bash
./mvnw spring-boot:run
```

### Run with Docker

From the repository root:

```bash
docker compose up --build
```

The `Dockerfile` builds the jar with Maven, then runs it on a small Alpine JRE image as a non-root user.
