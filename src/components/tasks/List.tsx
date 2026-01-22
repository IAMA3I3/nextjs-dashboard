import { Task } from "@/types/task"
import StatusBadge from "./StatusBadge"
import { useMounted } from "@/lib/useMounted";
import { useDashboardContext } from "@/context/DashboardContext";
import { FaTrashCan } from "react-icons/fa6";

type Props = {
    tasks: Task[]
}

export default function TasksList({ tasks }: Props) {

    const { dispatch } = useDashboardContext()

    const mounted = useMounted();

    if (!mounted) {
        return null;
    }


    return (
        <div className=" space-y-4">
            {
                tasks.map(task => (
                    <div
                        key={task.id}
                        className=" bg-white dark:bg-slate-700 border-2 border-gray-100 dark:border-slate-800 p-4 rounded-lg shadow dark:shadow-black/40 flex flex-col sm:flex-row justify-between gap-4 sm:items-center"
                    >
                        <p className=" font-medium">{task.title}</p>
                        <div className=" flex gap-4 items-center justify-between sm:justify-start">
                            <StatusBadge onClick={() => dispatch({ type: "UPDATE_TASK_STATUS", payload: { id: task.id } })} status={task.status} />
                            <FaTrashCan onClick={() => dispatch({ type: "DELETE_TASK", payload: { id: task.id } })} className=" text-red-500 cursor-pointer" />
                        </div>
                    </div>
                ))
            }
            {
                tasks.length === 0 && (
                    <div className="bg-white p-6 rounded-lg text-center text-gray-500">
                        No tasks found for this filter.
                    </div>
                )
            }
        </div>
    )
}