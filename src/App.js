import { Divider } from "antd";
import { lazy } from "react";

const AddTodo = lazy(() => import("./components/AddTodo"));
const ChangeLanguage = lazy(() => import("./components/ChangeLanguage"));
const Filters = lazy(() => import("./components/Filter"));
const TodoList = lazy(() => import("./components/TodoList"));
const AppTitle = lazy(() => import("./components/AppTitle"));

function App() {
  return (
    <div
      style={{
        maxWidth: "500px",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
      }}
    >
      <ChangeLanguage />
      <AppTitle />
      <Filters />
      <Divider />
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
