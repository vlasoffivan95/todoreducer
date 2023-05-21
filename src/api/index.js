import axios from "axios";

export const getTask = async()=> axios.get('http://127.0.0.1:5001/api/tasks')

export const addTask = async(taskData)=> axios.post( 'http://127.0.0.1:5001/api/tasks', taskData)