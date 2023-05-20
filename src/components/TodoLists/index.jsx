import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskList } from "store/slices/taskSlice";
import {addTask} from "store/slices/addTaskSlice"
import { Field, Form, Formik } from "formik";

const initialState = {
  text: "",
};

function TodoLists(props) {
  const { taskList} = useSelector((state) => state.tasks);
  const {isLoading, error} = useSelector((state)=> state.addTask)
  const dispatch = useDispatch();
  const SubmitHandler = (values, formikBag) => {
    dispatch(addTask(values))
    formikBag.resetForm()
  }

  useEffect(() => {
    dispatch(getTaskList('Hello'));
  }, []);




  return (
    <>
    <Formik initialValues={initialState} onSubmit={SubmitHandler}>
        <Form>
            < Field name = "text" placeholder = "addTask" />
            <button type = "submit">Add Task</button>
        </Form>
    </Formik>
      <div>
        {/* {taskList.length > 0 && */}
        {taskList.map((t) => (
          <article key={t.id}>
            <div>{t.text}</div>
          </article>
        ))}
        {/* <section>{taskList}</section> */}
      </div>
    </>
  );
}

export default TodoLists;
