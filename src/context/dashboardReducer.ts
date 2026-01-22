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
        default:
            return state
    }
}