import {  Request, Response } from "express"
import { findTaskById, getAllTask } from "./task.service"

export const allTask = (request: Request, response:Response)=> {
  const tasks = getAllTask();
  response.json(tasks);
}

export const taskById = (request: Request, response:Response)=> {
  const id:number = parseInt(request.params["id"]);
  const task = findTaskById(id);
  if(task) {
    response.json(task);
    return;
  }
  response.status(404);
}