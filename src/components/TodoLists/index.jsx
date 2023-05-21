import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskList,
  addTask,
  deleteTask,
  editTask,
} from "store/slices/taskSlice";
import { Field, Form, Formik } from "formik";
import styles from './styles.module.scss'

const initialState = {
  text: "",
};

function TodoLists(props) {
  const { taskList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const SubmitHandler = (values, formikBag) => {
    dispatch(addTask(values));
    formikBag.resetForm();
  };

  useEffect(() => {
    dispatch(getTaskList("Hello"));
  }, []);

  const todoLists = taskList.map((todo, index) => (
    <div key={todo.id} className={todo.isDone? styles.fieldTaskComplete:styles.fieldTask}>
      <div className={styles.textTask}>{todo.text}</div>
      <div className={styles.btnContainer}>
        <button className={styles.btnDel} onClick={() => dispatch(deleteTask(todo.id))}>Delete</button>
      <button
        onClick={() =>
          dispatch(
            editTask({ id: todo.id, text: todo.text, isDone: todo.isDone })
          )
        }
      className={styles.btnStatus}>
        Change Status
      </button></div>
    </div>
  ));

  return (
    <div className={styles.todoContainer}>
      <h1>ToDo List with Server</h1>
      <Formik initialValues={initialState} onSubmit={SubmitHandler}>
        <Form>
          <Field name="text" placeholder="addTask" className={styles.inputField}/>
          <button type="submit" className={styles.btnAddTask}>Add Task</button>
        </Form>
      </Formik>
      <div>{todoLists}</div>
    </div>
  );
}

export default TodoLists;
