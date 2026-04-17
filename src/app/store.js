import { configureStore } from "@reduxjs/toolkit";
import { taskList } from "../features/tasks/taskList";

export default configureStore({
    reducer: {
        tasks: taskList.reducer
    }
})