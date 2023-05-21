import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";
const SLICE_NAME = "tasks";

const getTaskList = createAsyncThunk(
  `${SLICE_NAME}/getTask`,
  async (arg, thunkAPI) => {
    try {
      const {
        data: { data: taskList },
      } = await API.getTask(arg);
      return taskList;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const addTask = createAsyncThunk(
  `${SLICE_NAME}/addtask`,
  async (taskData, thunkAPI) => {
    try {
      const {
        data: { data: taskList },
      } = await API.addTask(taskData);
      return taskList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const initialState = {
  taskList: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTaskList.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getTaskList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = action.payload;
    });
    builder.addCase(getTaskList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = [...state.taskList, action.payload]
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getTaskList, addTask };

export default tasksSlice.reducer;
