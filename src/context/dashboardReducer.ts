import { DashboardAction, DashboardState } from "./DashboardContext"

export function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
    switch (action.type) {
        case "SET_TASKS":
            return {
                ...state,
                tasks: action.payload
            }
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "UPDATE_TASK_STATUS":
            return {
                ...state,
                tasks: state.tasks.map(task => (
                    task.id === action.payload.id ?
                        {
                            ...task,
                            status: task.status === "todo" ?
                                "in-progress"
                                :
                                task.status === "in-progress" ?
                                    "done"
                                    :
                                    "todo"
                        }
                        : task
                ))
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case "SET_PROJECTS":
            return {
                ...state,
                projects: action.payload
            }
        case "ADD_PROJECT":
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload.id)
            }
        default:
            return state
    }
}