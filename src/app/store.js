import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todos/todosSlice';
import alertReducer from '../features/alert/alertSlice';
export default configureStore({
    reducer: {
        todos: todoReducer,
        alert: alertReducer,
    },
});