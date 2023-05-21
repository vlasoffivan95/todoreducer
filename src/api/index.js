import axios from "axios";

export const getTask = async()=> axios.get('http://127.0.0.1:5001/api/tasks')

export const addTask = async(taskData)=> axios.post( 'http://127.0.0.1:5001/api/tasks', taskData)

export const deleteTask = async(taskID) => axios.delete(`http://127.0.0.1:5001/api/tasks/${taskID}`)

export const changeStatusTask = async(taskID, taskData) => axios.put(`http://127.0.0.1:5001/api/tasks/${taskID}`, taskData)