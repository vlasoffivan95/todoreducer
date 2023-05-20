import axios from "axios";

export const getTask = async()=> axios.get('http://127.0.0.1:5001/api/tasks')