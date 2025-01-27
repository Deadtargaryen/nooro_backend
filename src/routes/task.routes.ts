import { Router } from "express";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  getTaskById
} from "../controller/task.controller";
import { validateTask, validateTaskId } from "../middleware/task.validation";

const router = Router();

// GET /tasks: Retrieve all tasks
router.get("/tasks", getTasks);

//GET /tasks/:id Retrieve a single task by ID
router.get("/tasks/:id", getTaskById);

// POST /tasks: Add a new task
router.post("/tasks", validateTask, addTask);

// PUT /tasks/:id: Update a task
router.put("/tasks/:id", validateTaskId, validateTask, updateTask);

// DELETE /tasks/:id: Delete a task
router.delete("/tasks/:id", validateTaskId, deleteTask);

export default router;
