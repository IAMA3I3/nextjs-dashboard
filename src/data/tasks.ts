import { Task } from "@/types/task";

export const tasks: Task[] = [
  { id: "1", title: "Design homepage", projectId: "1", status: "done", createdAt: new Date().toISOString() },
  { id: "2", title: "Build dashboard UI", projectId: "3", status: "in-progress", createdAt: new Date().toISOString() },
  { id: "3", title: "Fix bugs", projectId: "2", status: "todo", createdAt: new Date().toISOString() },
  { id: "4", title: "Write documentation", projectId: "3", status: "done", createdAt: new Date().toISOString() },
];
