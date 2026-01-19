import { create } from "zustand";
import { projects } from "@/data/projects";
import { tasks } from "@/data/tasks";
import { Project } from "@/types/project";
import { Task } from "@/types/task";

type DashboardState = {
  projects: Project[];
  tasks: Task[];
};

export const useDashboardStore = create<DashboardState>(() => ({
  projects,
  tasks,
}));
