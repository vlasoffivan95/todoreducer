import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const initialState = {
    todos: [],
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const todo = {
                id: uuid(),
                task: action.payload,
                status: true,
            }

            state.todos.push(todo)

        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        changeStatus: (state, action) => {
            const findIndex = state.todos.find(todo => todo.id === action.payload).id
            const newToDo = state.todos.map((todo) => { if (todo.id === findIndex) { return { ...todo, status: false } } return todo })
            state.todos = newToDo

        }
    }



})



const { reducer, actions } = taskSlice;
const { addTask, deleteTask, changeStatus } = actions;


export default reducer;
export { addTask, deleteTask, changeStatus }