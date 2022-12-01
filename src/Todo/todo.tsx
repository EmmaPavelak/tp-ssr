import React from "react";
import "./todo.css";

function Todo(props: any) {
  const todos = props.todos;
  const indexTodo = props.indexTodo;

  if (indexTodo < todos.length - 1) {
    return (
      <ul>
        {
          <li
            key={indexTodo}
            className={todos[indexTodo].completed ? "completed" : ""}
          >
            Element: {todos[indexTodo].title}
          </li>
        }
      </ul>
    );
  } else {
    return <div></div>;
  }
}

export default Todo;
