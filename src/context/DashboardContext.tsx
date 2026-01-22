"use client";

import { createContext, Dispatch, useContext } from "react";
import { Project } from "@/types/project";
import { Task } from "@/types/task";

export type DashboardAction = {
    type: "ADD_TASK"
    payload: Task
} | {
    type: "SET_TASKS"
    payload: Task[]
} | {
    type: "UPDATE_TASK_STATUS"
    payload: { id: string }
} | {
    type: "DELETE_TASK"
    payload: { id: string }
} | {
    type: "SET_PROJECTS"
    payload: Project[]
} | {
    type: "ADD_PROJECT"
    payload: Project
} | {
    type: "DELETE_PROJECT"
    payload: { id: string }
}

export type DashboardState = {
    projects: Project[]
    tasks: Task[]
}

type DashboardContextType = DashboardState & {
    dispatch: Dispatch<DashboardAction>
}

export const DashboardContext = createContext<DashboardContextType | null>(null);

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) {
        throw new Error("useDashboardContext must be used within DashboardProvider");
    }
    return context;
}
