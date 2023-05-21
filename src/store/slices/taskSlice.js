import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "api";
import { act } from "react-dom/test-utils";
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteTask = createAsyncThunk(
  `${SLICE_NAME}/deletetask`,
  async (taskID, thunkAPI) => {
    try {
      const {
        data: { data: taskList },
      } = await API.deleteTask(taskID);

      return taskList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const editTask = createAsyncThunk(
  `${SLICE_NAME}/editTask`,
  async (task, thunkAPI) => {
    try {
      const {
        data: { data: taskList },
      } = await API.changeStatusTask(task.id, {
        text: task.text,
        isDone: !task.isDone,
      });
      return taskList;
    } catch (error) {
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
      state.taskList = [...state.taskList, action.payload];
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.taskList = state.taskList.filter(
        (task) => task.id !== +action.payload
      );
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(editTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editTask.fulfilled, (state, action) => {
      state.isLoading = false;
      for (let task of state.taskList) {
        if (task.text === action.payload.text) {
          task.isDone = action.payload.isDone;
        }
      }
    });

    builder.addCase(editTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getTaskList, addTask, deleteTask, editTask };

export default tasksSlice.reducer;
