export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: string;
  title: string;
  projectId: string;
  status: TaskStatus;
};
