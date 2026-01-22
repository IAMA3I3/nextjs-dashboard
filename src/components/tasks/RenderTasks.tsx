"use client"

import { Suspense, useState } from "react";
import Filters, { FiltersTab } from "./Filters";
import TasksList from "./List";
import { Task } from "@/types/task";
import { useDashboardContext } from "@/context/DashboardContext";

export default function RenderTasks() {

    const { tasks, dispatch } = useDashboardContext()

    const [filter, setFilter] = useState<FiltersTab>("all")

    const filteredTasks = filter === "all" ? tasks : tasks.filter(task => task.status === filter)

    return (
        <>
            <Filters status={filter} setFilter={setFilter} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    const newTask: Task = {
                        id: crypto.randomUUID(),
                        title: "New Task",
                        projectId: "1",
                        status: "todo",
                        createdAt: new Date().toISOString()
                    };

                    dispatch({ type: "ADD_TASK", payload: newTask })
                }}
                className="mb-6"
            >
                <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md"
                >
                    Add Task
                </button>
            </form>

            <Suspense fallback={"Loading..."}>
                <TasksList tasks={filteredTasks} />
            </Suspense>
        </>
    )
}