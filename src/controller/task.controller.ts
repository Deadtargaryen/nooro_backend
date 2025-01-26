import { Request, Response } from "express";
import prisma from "../prismaClient";

// GET /tasks: Retrieve all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while retrieving tasks." });
  }
};

// POST /tasks: Add a new task
export const addTask = async (req: Request, res: Response): Promise<void> => {
  const { title, color } = req.body;

  // Validate the required fields
  if (!title || typeof title !== 'string' || title.trim() === '') {
    res.status(400).json({ error: "Title is required and must be a non-empty string." });
  }

  const validColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown"];
  if (color && !validColors.includes(color)) {
    res.status(400).json({ error: `Invalid color. Valid colors are: ${validColors.join(', ')}` });
  }

  try {
  
    const newTask = await prisma.task.create({
      data: {
        title: title.trim(),
        color: color || "blue",
      },
    });
    
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the task." });
  }
};


// PUT /tasks/:id: Update a task
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        color,
        completed,
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the task." });
  }
};

// DELETE /tasks/:id: Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTask = await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the task." });
  }
};
