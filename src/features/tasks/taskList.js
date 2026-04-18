import { createSlice } from "@reduxjs/toolkit";

export const taskList = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                taskId: 'T1',
                task: "Get Groceries from the market.",
                status: "Pending",
                date: "2024-07-15"
            },
             { 
                taskId: 'T2',
                task: "Go to Gym.",
                status: "Completed",
                date: "2024-07-15"
            },
             {
                taskId: 'T3',
                task: "Water the plants.",
                status: "Completed",
                date: "2024-07-15"
            },
            {
                taskId: 'T4',
                task: "Go to the park.",
                status: "Completed",
                date: "2024-07-16"
            },
            {
                taskId: 'T5',
                task: "Get my room cleaned.",
                status: "Pending",
                date: "2024-07-16"
            },
        ]
    },
    reducers: {
        taskStatusButton: (state, action) => {
            const task = state.tasks.find((task) => task.taskId === action.payload)
            if (task) {
                task.status = task.status === "Completed" ? "Pending" : "Completed"
            }
        }
    }
})

export const { taskStatusButton } = taskList.actions

export default taskList.reducer;