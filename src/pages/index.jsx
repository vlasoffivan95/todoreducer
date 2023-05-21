import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./style.module.scss";

const TodoPage = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.ulList}>
        <li>
          <Link to="/todo" className={styles.aList}>Todo Reducer</Link>
        </li>
        <li>
          <Link to="/todoserver" className={styles.aList}>Todo Reducer with Server</Link>
        </li>
      </ul>
    </div>
  );
};

export default TodoPage;
