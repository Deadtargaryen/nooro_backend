import { Router } from "express";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../controller/task.controller";
import { validateTask, validateTaskId } from "../middleware/task.validation";

const router = Router();

// GET /tasks: Retrieve all tasks
router.get("/tasks", getTasks);

// POST /tasks: Add a new task
router.post("/tasks", validateTask, addTask);

// PUT /tasks/:id: Update a task
router.put("/tasks/:id", validateTaskId, validateTask, updateTask);

// DELETE /tasks/:id: Delete a task
router.delete("/tasks/:id", validateTaskId, deleteTask);

export default router;
