# Task Management API

A simple task management API built using Express.js and Prisma, allowing users to perform CRUD operations on tasks.

## Technologies Used

- **Node.js**: JavaScript runtime used to build the backend.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **Prisma ORM**: For database access and management.
- **MySQL**: Database for storing task data.
- **CORS**: For handling cross-origin requests.

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Validation**: Input validation for task creation and update, including title, color, and completion status.
- **Task Schema**: Tasks are stored with attributes such as title, color, and completion status.

## Endpoints

### GET /api/tasks

Retrieve all tasks in the database.

**Response**: `200 OK` with a list of tasks.

### POST /api/tasks

Add a new task. Required fields:
- `title` (string)
- `color` (optional string, default: `"blue"`)
- `completed` (optional boolean, default: `false`)

**Response**: 
- `201 Created` with the created task object on success.
- `400 Bad Request` if validation fails.

### PUT /api/tasks/:id

Update an existing task by its ID. Required fields:
- `title` (string)
- `color` (string)
- `completed` (boolean)

**Response**: 
- `200 OK` with the updated task object on success.
- `400 Bad Request` if validation fails.
- `500 Internal Server Error` if an issue occurs during the update.

### DELETE /api/tasks/:id

Delete a task by its ID.

**Response**: 
- `200 OK` with the deleted task object on success.
- `400 Bad Request` if the ID is not valid.
- `500 Internal Server Error` if an issue occurs during deletion.

## Validation

- **Task Validation**: Ensures that the `title` is a non-empty string and that `color` is a valid string (optional). It also checks that the `completed` field is a boolean.
- **Task ID Validation**: Ensures that the `id` is a valid integer in the route parameters.

## Database Schema (Prisma)

```prisma
model Task {
  id        Int      @id @default(autoincrement())
  title     String
  color     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Installation

1. Clone the repository.

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Set up your database by configuring the `DATABASE_URL` in a `.env` file.

4. Run Prisma migrations to set up the database schema.

   ```bash
   npx prisma migrate dev
   ```

5. Start the server.

   ```bash
   npm start
   ```

The server will run on `http://localhost:3003` (or the port specified in the environment variables).

## Environment Variables

- `DATABASE_URL`: URL to your MySQL database. Example: `mysql://user:password@localhost:3306/dbname`
- `PORT`: Port number for the server (optional).

## License

This project is licensed under the MIT License.
