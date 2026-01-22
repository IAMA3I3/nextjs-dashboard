"use client"

import { useEffect, useReducer } from "react"
import { DashboardContext, DashboardState } from "./DashboardContext"
import { dashboardReducer } from "./dashboardReducer"
import { projects as initialProjects } from "@/data/projects";
import { tasks as initialTasks } from "@/data/tasks";

const initialState: DashboardState = {
    projects: [],
    tasks: initialTasks
}

export function DashboardProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(dashboardReducer, initialState)

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks")
        dispatch({
            type: "SET_TASKS",
            payload: storedTasks ? JSON.parse(storedTasks) : initialTasks
        })
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks))
    }, [state.tasks])

    return (
        <DashboardContext.Provider value={{ projects: initialProjects, tasks: state.tasks, dispatch }}>
            {children}
        </DashboardContext.Provider>
    )
}