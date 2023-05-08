import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const initialState = {
    todos:[],
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const todo = {
                id: uuid(),
                task: action.payload
            }

            state.todos.push(todo)

        }
        
    }

})



const { reducer, actions } = taskSlice;
const { addTask } = actions;


export default reducer;
export { addTask }