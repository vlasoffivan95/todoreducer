import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  changeStatus,
} from "../../store/slices/todoSlice";
import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const taskLists = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTask(input.trim()===''?'Nothing here yet...':input));
    setInput("");
  };

  const taskList = taskLists.todos.map((value, index) => (
    <li key={value.id} className={value.status?styles.liTask:styles.liTaskTrue}>
      <p className={styles.pTask}>{value.task}</p>
      <div>
        <input type="checkbox" value={value.id} onClick={() => dispatch(changeStatus(value.id))} disabled={value.status?false:true} />
        <button
          className={styles.btnDel}
          onClick={() => dispatch(deleteTask(value.id))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return (
    <main className={styles.todocontainer}>
      <p className={styles.pContainer}>Todo List</p>
      <form className={styles.containerTask} onSubmit={addTodo} disabled={true} >
        <input
          className={styles.inputTask}
          placeholder="Input task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btnAddTask}>Add Task</button>
      </form>
      <ul>{taskList}</ul>
    </main>
  );
};

export default TodoList;
