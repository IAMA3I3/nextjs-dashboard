import { TaskStatus } from "@/types/task";

type Props = {
    status: TaskStatus;
};

export default function StatusBadge({ status }: Props) {

    return (
        <span
            className={`
                ${status === "todo" && "bg-gray-200 text-gray-700"}
                ${status === "in-progress" && "bg-yellow-200 text-yellow-800"}
                ${status === "done" && "bg-green-200 text-green-800"}
                px-3 py-1 rounded-full text-xs font-medium text-nowrap
            `}
        >
            {status.replace("-", " ")}
        </span>
    );
}
