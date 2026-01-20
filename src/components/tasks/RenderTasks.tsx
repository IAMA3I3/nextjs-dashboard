"use client"

import { useState } from "react";
import Filters, { FiltersTab } from "./Filters";
import TasksList from "./List";
import { useDashboardStore } from "@/store/useDashboardStore";

export default function RenderTasks() {

    const { tasks } = useDashboardStore()

    const [filter, setFilter] = useState<FiltersTab>("all")

    const filteredTasks = filter === "all" ? tasks : tasks.filter(task => task.status === filter)

    return (
        <>
            <Filters status={filter} setFilter={setFilter} />
            <TasksList tasks={filteredTasks} />
        </>
    )
}