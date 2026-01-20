import { Task } from "@/types/task"
import StatusBadge from "./StatusBadge"

type Props = {
    tasks: Task[]
}

export default function TasksList({ tasks }: Props) {

    return (
        <div className=" space-y-4">
            {
                tasks.map(task => (
                    <div
                        key={task.id}
                        className=" bg-white dark:bg-slate-700 border-2 border-gray-100 dark:border-slate-800 p-4 rounded-lg shadow dark:shadow-black/40 flex justify-between gap-4 items-center"
                    >
                        <p className=" font-medium">{task.title}</p>
                        <StatusBadge status={task.status} />
                    </div>
                ))
            }
            {
                tasks.length === 0 && (
                    <p className=" text-gray-500">No tasks found.</p>
                )
            }
        </div>
    )
}