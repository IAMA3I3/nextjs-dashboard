import AddProjectForm from "@/components/projects/AddProjectForm";

export default function CreateProject() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">
                Add Project
            </h2>
            <div className=" w-full max-w-150 mx-auto">
                <AddProjectForm />
            </div>
        </>
    )
}