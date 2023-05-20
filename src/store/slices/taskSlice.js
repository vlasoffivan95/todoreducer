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

const initialState = {
  taskList: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTaskList.pending(), (state, action) => {
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
  },
});

export { getTaskList };

export default tasksSlice.reducer;
