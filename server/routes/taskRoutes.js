import express from "express";
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskControllers.js";

const router = express.Router();

router.post("/tasks", addTask);
router.get("/tasks", getTasks);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
