"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "../ui/Button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useDashboardContext } from "@/context/DashboardContext"
import { Project } from "@/types/project"

type AddProjectFormData = {
    name: string
}

const initialData: AddProjectFormData = {
    name: ""
}

export default function AddProjectForm() {

    const router = useRouter()
    const { dispatch } = useDashboardContext()

    const [data, setData] = useState<AddProjectFormData>(initialData)
    const [isLoading, setIsLoading] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const newProject: Project = {
            id: crypto.randomUUID(),
            name: data.name
        }

        await new Promise<void>(resolve => setTimeout(resolve, 2000)) // to simulate delay

        dispatch({ type: "ADD_PROJECT", payload: newProject })

        // console.log(data)
        setIsLoading(false)
        setData(initialData)
        toast.success("Project Added")
        router.replace("/projects")
    }

    return (
        <form onSubmit={onFormSubmit} className=" w-full rounded-lg p-6 shadow-lg bg-white dark:bg-slate-700 border-2 border-gray-200 dark:border-slate-800">
            <div className=" space-y-4">
                <div className=" flex gap-1 flex-col items-start">
                    <label htmlFor="name" className=" text-sm text-muted font-semibold">Project Name</label>
                    <input value={data.name} onChange={onInputChange} required type="text" id="name" name="name" className=" py-1 px-3 rounded w-full outline-none border-2 border-gray-200 dark:border-slate-800 focus:border-blue-500" />
                </div>
                <Button type="submit" text="SUBMIT" isLoading={isLoading} />
            </div>
        </form>
    )
}