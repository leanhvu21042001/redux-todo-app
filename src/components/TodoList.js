import { useSelector } from "react-redux";

import { todosRemainingSelector } from "../lib/redux/selectors";

import Todo from "./TodoItem";

export default function TodoList() {
  const todoList = useSelector(todosRemainingSelector);

  return Object.values(todoList).map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      name={todo.name}
      priority={todo.priority}
      completed={todo.completed}
    />
  ));
}
