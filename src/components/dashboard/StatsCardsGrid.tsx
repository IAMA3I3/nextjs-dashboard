"use client"

import StatsCard from "./StatsCard"
import { useDashboardContext } from "@/context/DashboardContext"

export default function StatsCardsGrid() {

    const { projects, tasks } = useDashboardContext()

    const completedTasks = tasks.filter(task => task.status === "done")

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Total Projects" value={projects.length} />
            <StatsCard title="Total Tasks" value={tasks.length} />
            <StatsCard title="Completed Tasks" value={completedTasks.length} />
        </div>
    )
}