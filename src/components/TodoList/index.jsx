import React from "react";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../store/slices/todoSlice";

const task = [
  { id: 1, task: "Eat", status: false },
  { id: 2, task: "Code", status: false },
  { id: 3, task: "Review", status: false },
];

const TodoList = (props) => {
  const taskLists = useSelector(state=>state.todo)
  const dispatch=useDispatch()
// const addTaskNew = (newTask)=>dispatch(addTask(newTask))


  console.log(taskLists)

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
