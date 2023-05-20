import TodoLists from "components/TodoLists";
import TodoList from "./components/TodoList";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/tasks" component={TodoLists} />
    </Switch>
  );
}

export default App;
