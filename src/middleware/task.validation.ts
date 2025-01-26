import { Request, Response, NextFunction } from "express";

// Middleware to validate task data for POST and PUT requests
export const validateTask = (req: Request, res: Response, next: NextFunction): void => {
  const errors: { field: string; message: string }[] = [];

  // Validate "title"
  if (req.body.title !== undefined && typeof req.body.title !== "string") {
    errors.push({ field: "title", message: "Title must be a string." });
  }

  // Validate "color"
  if (req.body.color !== undefined && typeof req.body.color !== "string") {
    errors.push({ field: "color", message: "Color must be a string." });
  }

  // Validate "completed"
  if (
    req.body.completed !== undefined &&
    typeof req.body.completed !== "boolean"
  ) {
    errors.push({ field: "completed", message: "Completed must be a boolean." });
  }

  // If there are validation errors, return them
  if (errors.length > 0) {
    res.status(400).json({ errors });
  }

  // Proceed to the next middleware if validation passed
  next();
};

// Middleware to validate task ID for routes with an ID parameter
export const validateTaskId = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  // Validate "id"
  if (!/^\d+$/.test(id)) {
    res
      .status(400)
      .json({ errors: [{ field: "id", message: "Task ID must be an integer." }] });
  }

  // Proceed to the next middleware if validation passed
  next();
};
