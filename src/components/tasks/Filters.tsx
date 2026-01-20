import { TaskStatus } from "@/types/task";
import { Dispatch, SetStateAction } from "react";

export type FiltersTab = TaskStatus | "all"

type Props = {
    status: FiltersTab,
    setFilter: Dispatch<SetStateAction<FiltersTab>>
}

const tasksStatus: FiltersTab[] = ["all", "todo", "in-progress", "done"]


export default function Filters({ status, setFilter }: Props) {

    return (
        <div className=" w-full mb-6 pb-4 overflow-x-auto">
            <div className=" flex gap-2">
                {
                    tasksStatus.map(item => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`
                            ${item === status ?
                                    "bg-slate-700 dark:bg-slate-900 dark:border-slate-900 text-white"
                                    :
                                    "hover:bg-black/20 dark:border-gray-500 text-slate-700 dark:text-gray-300"
                                }
                            px-4 py-2 rounded-md text-sm font-semibold border-2
                            border-slate-700 cursor-pointer text-nowrap
                        `}
                        >
                            {item.replace("-", " ")}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}