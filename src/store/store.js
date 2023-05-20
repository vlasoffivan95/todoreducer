import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import taskSliceReducer from "./slices/taskSlice";
import taskAddReducer from './slices/addTaskSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tasks: taskSliceReducer,
    addTask: taskAddReducer,
  },
});

export default store;
