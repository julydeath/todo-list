import React from "react";
import TodoList from "./TodoList";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>{<TodoList todo={todo} />}</div>
      ))}
    </div>
  );
};

export default Todos;
