import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/slices/todoSlice";
import { useState } from "react";


const TodoList = (props) => {
  const [input, setInput] = useState("");
  const taskLists = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTask(input));
  };
  console.log(taskLists)


 const taskList = taskLists.todos.map((value, index) => (
    <li key={value.id} className={styles.liTask}>
      <p className={styles.pTask}>{value.task}</p>
      <div>
        <input type="checkbox" value={true} />
        <button className={styles.btnDel}>Delete</button>
      </div>
    </li>
  ));

  return (
    <main className={styles.todocontainer}>
      <p className={styles.pContainer}>Todo List</p>
      <form className={styles.containerTask} onSubmit={addTodo}>
        <input
          className={styles.inputTask}
          placeholder="Input task"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.btnAddTask}>Add Task</button>
      </form>
      <ul>{taskList}</ul>
    </main>
  );
};

export default TodoList;
