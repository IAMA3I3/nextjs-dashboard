"use client"

import { useDashboardStore } from "@/store/useDashboardStore"
import StatsCard from "./StatsCard"

export default function StatsCardsGrid() {

    const { projects, tasks } = useDashboardStore()

    const completedTasks = tasks.filter(task => task.status === "done")

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard title="Total Projects" value={projects.length} />
            <StatsCard title="Total Tasks" value={tasks.length} />
            <StatsCard title="Completed Tasks" value={completedTasks.length} />
        </div>
    )
}