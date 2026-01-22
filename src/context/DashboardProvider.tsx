"use client"

import { useEffect, useReducer } from "react"
import { DashboardContext, DashboardState } from "./DashboardContext"
import { dashboardReducer } from "./dashboardReducer"
import { projects as initialProjects } from "@/data/projects";
import { tasks as initialTasks } from "@/data/tasks";

const initialState: DashboardState = {
    projects: initialProjects,
    tasks: initialTasks
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(dashboardReducer, initialState)

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks")
        const storedProjects = localStorage.getItem("projects")
        dispatch({
            type: "SET_TASKS",
            payload: storedTasks ? JSON.parse(storedTasks) : initialTasks
        })
        dispatch({
            type: "SET_PROJECTS",
            payload: storedProjects ? JSON.parse(storedProjects) : initialProjects
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }, [state.tasks])

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(state.projects))
    }, [state.projects])

    return (
        <DashboardContext.Provider value={{ projects: state.projects, tasks: state.tasks, dispatch }}>
            {children}
        </DashboardContext.Provider>
    )
}