import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskList } from "store/slices/taskSlice";

function TodoLists(props) {
  const { taskList, isLoading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  return (
    <div>
      {/* {taskList.length > 0 && */}
        {taskList.map((t) => <article key={t.id}><div>{t.text}</div></article>)}
        {/* <section>{taskList}</section> */}
    </div>
  );
}

export default TodoLists;
