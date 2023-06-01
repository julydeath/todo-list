import React from "react";
import TodoList from "./TodoList";

const Todos = ({ todos, todoList }) => {
  const newTodo = (id) => {
    todoList(id);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {<TodoList todo={todo.task} newTodo={() => newTodo(todo.id)} />}
        </div>
      ))}
    </div>
  );
};

export default Todos;
