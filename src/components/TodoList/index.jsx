import React from "react";
import styles from "./styles.module.scss";

const task = [
  { id: 1, task: "Eat", status: false },
  { id: 2, task: "Code", status: false },
  { id: 3, task: "Review", status: false },
];

const TodoList = () => {
  const taskList = task.map((value, index) => (
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
      <div className={styles.containerTask}>
        <input
          className={styles.inputTask}
          placeholder="Input task"
          type="text"
        />
        <button className={styles.btnAddTask}>Add Task</button>
      </div>
      <ul>{taskList}</ul>
    </main>
  );
};

export default TodoList;
