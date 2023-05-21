import TodoLists from "components/TodoLists";
import TodoList from "./components/TodoList";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import TodoPage from "pages";

function App() {
  return (
    <>
      <TodoPage />
      <Switch>
        <Route exact path="/todo" component={TodoList} />
        <Route exact path="/todoserver" component={TodoLists} />
      </Switch>
    </>
  );
}

export default App;
