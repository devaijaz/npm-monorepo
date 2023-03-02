import { Task } from "@monorepo/typing";

const tasks:Task[] = [
  {
    id: 1,
    text: "Task 1"
  }, {
    id: 2,
    text: "Task 2"
  }
];
export function getAllTask():Task[] {
  return tasks;
}

export function findTaskById(id: number):Task | undefined {
  return tasks.find(task=> task.id ===id);
}