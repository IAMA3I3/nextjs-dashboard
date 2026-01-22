"use client"

import { useDashboardContext } from "@/context/DashboardContext";
import { useStateContext } from "@/context/StateContext";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export default function TaskCompletionChart() {

    const { isDarkTheme } = useStateContext()
    const { tasks } = useDashboardContext()

    const completedTasks = tasks.filter(task => task.status === "done")

    const data = completedTasks.reduce<Record<string, number>>(
        (acc, task) => {
            const day = new Date(task.createdAt).toLocaleDateString("en-US", { weekday: "short" })
            acc[day] = (acc[day] || 0) + 1
            return acc
        }, {}
    )

    const chartData = Object.entries(data).map(([name, completed]) => ({
        name,
        completed
    }))

    return (
        <div className=" w-full p-8 rounded-xl shadow-lg bg-linear-60 from-black/15 dark:from-white/20 via-black/10 dark:via-white/30 to-black/15 dark:to-white/20">
            <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                    Tasks Completed This Week
                </h3>
                <p className="text-xs sm:text-sm text-muted mb-4">
                    Daily task completion tracking
                </p>
            </div>

            <div className="px-2 sm:px-6 pb-4 sm:pb-6">
                <div className="h-64 sm:h-72 md:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <LineChart
                            data={chartData}
                            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkTheme ? "#e3e3e3" : "#666666"} />
                            <XAxis
                                dataKey="name"
                                tick={{ fontSize: 12, fill: isDarkTheme ? "#e3e3e3" : "#666666" }}
                                tickLine={{ stroke: isDarkTheme ? "#e3e3e3" : "#666666" }}
                                axisLine={{ stroke: isDarkTheme ? "#e3e3e3" : "#666666" }}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: isDarkTheme ? "#e3e3e3" : "#666666" }}
                                tickLine={{ stroke: isDarkTheme ? "#e3e3e3" : "#666666" }}
                                axisLine={{ stroke: isDarkTheme ? "#e3e3e3" : "#666666" }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDarkTheme ? "#2d2d2d" : "white",
                                    border: `1px solid ${isDarkTheme ? "#666666" : "#e3e3e3"}`,
                                    borderRadius: '8px',
                                    fontSize: '12px',
                                }}
                                labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="completed"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                dot={{ fill: '#3b82f6', r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}