import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskList, addTask } from "store/slices/taskSlice";
import { Field, Form, Formik } from "formik";

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
    <div key={todo.id}>
      {todo.text}
      <button>Delete</button>
    </div>
  ));

  return (
    <>
      <Formik initialValues={initialState} onSubmit={SubmitHandler}>
        <Form>
          <Field name="text" placeholder="addTask" />
          <button type="submit">Add Task</button>
        </Form>
      </Formik>
      <div>{todoLists}</div>
    </>
  );
}

export default TodoLists;
