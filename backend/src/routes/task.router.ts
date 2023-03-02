import express from "express";
import { allTask, taskById } from "../features/task-manager/task.controller";

const taskRouter = express.Router();


taskRouter.get("/", allTask);
taskRouter.get("/:id", taskById);

export {
  taskRouter
}