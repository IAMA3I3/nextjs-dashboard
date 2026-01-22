"use client"

import { useDashboardContext } from "@/context/DashboardContext"
import StatusBadge from "../tasks/StatusBadge"
import { FaTrashCan } from "react-icons/fa6"
import { Project } from "@/types/project"

export default function ProjectsList() {

    const { projects, tasks, dispatch } = useDashboardContext()

    return (
        <div className="space-y-6">
            <form
                onSubmit={e => {
                    e.preventDefault()

                    const newProject: Project = {
                        id: crypto.randomUUID(),
                        name: "New Project"
                    }

                    dispatch({ type: "ADD_PROJECT", payload: newProject })
                }}
            >
                <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-md"
                >
                    Add Project
                </button>
            </form>
            {
                projects.map(project => {
                    const projectTasks = tasks.filter(task => task.projectId === project.id)

                    return (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm border-2 border-gray-200 dark:border-slate-800"
                        >
                            <div className=" flex gap-4 justify-between items-start">
                                <h3 className="text-lg font-semibold mb-4">{project.name}</h3>
                                <button
                                    title="Empty task before deleting project"
                                    onClick={() => {
                                        if (projectTasks.length === 0) {
                                            dispatch({ type: "DELETE_PROJECT", payload: { id: project.id } })
                                        }
                                    }}
                                    className={`${projectTasks.length === 0 ? " bg-red-300 text-red-700 cursor-pointer" : " bg-red-200 text-white"} w-8 aspect-square rounded flex justify-center items-center`}
                                >
                                    <FaTrashCan />
                                </button>
                            </div>

                            {
                                projectTasks.length === 0 ? (
                                    <p className="text-gray-500">No tasks for this project.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {
                                            projectTasks.map(task => (
                                                <div
                                                    key={task.id}
                                                    className="flex gap-4 flex-col sm:flex-row justify-between sm:items-center p-3 border rounded-md border-gray-300 dark:border-slate-800"
                                                >
                                                    <span>{task.title}</span>
                                                    <div className=" flex gap-4 items-center justify-between sm:justify-start">
                                                        <StatusBadge onClick={() => dispatch({ type: "UPDATE_TASK_STATUS", payload: { id: task.id } })} status={task.status} />
                                                        <FaTrashCan onClick={() => dispatch({ type: "DELETE_TASK", payload: { id: task.id } })} className=" text-red-500 cursor-pointer" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}