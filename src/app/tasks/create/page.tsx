import AddTaskForm from "@/components/tasks/AddTaskForm";

export default function Createtask() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">
                Add Task
            </h2>
            <div className=" w-full max-w-150 mx-auto">
                <AddTaskForm />
            </div>
        </>
    )
}