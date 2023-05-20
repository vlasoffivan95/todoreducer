import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import taskSliceReducer from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    tasks: taskSliceReducer,
  },
});

export default store;
