import React, { useState } from "react";
import TodoList from "./TodoList";
import axios from "axios";
import { useUserAuth } from "./auth/UserAuth";


const Todos = ({ todos, todoList }) => {
  const { user } = useUserAuth();
  const token = user && user.accessToken;

  const newTodo = async (id) => {
    todoList(id);
    console.log(id)
    await deleteTodo(id)
  };

  const deleteTodo = async (id) => {
    try {
      const data = await axios.delete("https://choice-heron-50.hasura.app/api/rest/delete",
        {
          data: {
            id
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
      )
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {<TodoList todo={todo} newTodo={newTodo} />}
        </div>
      ))}
    </div>
  );
};

export default Todos;
