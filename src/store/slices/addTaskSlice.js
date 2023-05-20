import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";

const SLICE_NAME = "addtask";

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
  newTask: null,
  isLoading: false,
  error: null,
};

const addTaskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newTask = action.payload;
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { addTask };
export default addTaskSlice.reducer;
