"use client"

import { useDashboardContext } from "@/context/DashboardContext"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Task } from "@/types/task";

type AddTaskFormData = {
    title: string
    projectId: string
}

const initialData: AddTaskFormData = {
    title: "",
    projectId: ""
}

export default function AddTaskForm() {

    const router = useRouter()
    const { projects, dispatch } = useDashboardContext()

    const [data, setData] = useState<AddTaskFormData>(initialData)
    const [isLoading, setIsLoading] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const newTask: Task = {
            id: crypto.randomUUID(),
            title: data.title,
            projectId: data.projectId,
            status: "todo",
            createdAt: new Date().toISOString()
        }

        await new Promise<void>(resolve => setTimeout(resolve, 2000)) // to simulate delay

        dispatch({ type: "ADD_TASK", payload: newTask })

        // console.log(data)
        setIsLoading(false)
        setData(initialData)
        toast.success("Task Added")
        router.replace("/tasks")
    }

    return (
        <form onSubmit={onFormSubmit} className=" w-full rounded-lg p-6 shadow-lg bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-800">
            <div className=" space-y-4">
                <div className=" flex gap-1 flex-col items-start">
                    <label htmlFor="title" className=" text-sm text-muted font-semibold">Title</label>
                    <input value={data.title} onChange={onInputChange} type="text" id="title" name="title" required className=" py-1 px-3 rounded w-full outline-none border-2 border-gray-200 dark:border-slate-800 focus:border-blue-500" />
                </div>
                <div className=" flex gap-1 flex-col items-start">
                    <label htmlFor="project" className=" text-sm text-muted font-semibold">Project</label>
                    <select value={data.projectId} onChange={onSelectChange} name="projectId" id="project" required className=" py-1 px-3 rounded w-full outline-none border-2 border-gray-200 dark:border-slate-800 focus:border-blue-500">
                        <option value="">Select Project</option>
                        {
                            projects.map(project => (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            ))
                        }
                    </select>
                    <Link href={"/projects/create"} className=" mt-1 text-xs font-semibold text-blue-500 hover:underline flex gap-2 items-center"><span className=" leading-0">Create Project</span> <FaArrowRight /></Link>
                </div>
                <Button type="submit" text="SUBMIT" isLoading={isLoading} />
            </div>
        </form>
    )
}