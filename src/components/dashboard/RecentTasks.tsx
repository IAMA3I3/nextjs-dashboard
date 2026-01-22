"use client"

import { useDashboardContext } from "@/context/DashboardContext"
import BasicCard from "./BasicCard"
import StatusBadge from "../tasks/StatusBadge"
import { useMounted } from "@/lib/useMounted"

export default function RecentTasks() {

    const { tasks } = useDashboardContext()

    const mounted = useMounted();

    if (!mounted) {
        return null;
    }

    return (
        <BasicCard>
            <div className=" flex gap-4 flex-wrap justify-between">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Recent Tasks
                </h3>
            </div>
            <div className=" space-y-4">
                {
                    [...tasks].reverse().slice(0, 3).map(task => (
                        <div
                            key={task.id}
                            className=" bg-white dark:bg-slate-700 border-2 border-gray-100 dark:border-slate-800 p-4 rounded-lg shadow dark:shadow-black/40 flex flex-col sm:flex-row justify-between gap-4 sm:items-center"
                        >
                            <p className=" font-medium">{task.title}</p>
                            <div className=" flex gap-4 items-center justify-between sm:justify-start">
                                <StatusBadge status={task.status} />
                            </div>
                        </div>
                    ))
                }
                {
                    tasks.length === 0 && (
                        <div className="bg-white p-6 rounded-lg text-center text-gray-500">
                            No tasks found
                        </div>
                    )
                }
            </div>
        </BasicCard>
    )
}