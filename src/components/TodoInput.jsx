import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Todos from "./Todos";
import { nanoid } from "nanoid";
import { useUserAuth } from "./auth/UserAuth";

const TodoInput = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const { user } = useUserAuth();
  const token = user && user.accessToken;
  const id = nanoid()
  const [loading, setLoading] = useState(true)


  const featchData = async () => {
    try {
      const data = await axios.get(
        "https://choice-heron-50.hasura.app/api/rest/add-todos",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTodos(data.data.todos);
      setLoading(false)
    } catch (err) {
      console.log("error", err);
    }
  };

  const postData = async () => {
    try {
      const data = await axios.post("https://choice-heron-50.hasura.app/api/rest/add-todo", {
        "id": id,
        "task": inputRef.current.value
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    featchData();
  }, [token]);

  const handleSubmmit = async (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return setError("Input field empty");
    }
    setTodos([...todos, { id: id, task: inputRef.current.value }]);
    await postData()
    inputRef.current.value = "";
  };

  const todoList = (id) => {
    const newlist = todos.filter((todo) => todo.id !== id);
    setTodos(newlist);
  };

  if (loading) {
    return (
      <h1 className="text-4xl text-center items-center mt-6">Loading ...</h1>
    )
  }

  return (
    <div>
      <div className="max-w-[1240px] m-auto text-center my-10 h-[150px] bg-slate-100 rounded-lg shadow-2xl">
        <h1 className="text-xl md:text-3xl font-bold p-2">Enter Tasks</h1>
        <form onSubmit={handleSubmmit}>
          <input
            placeholder="Enter todo"
            type="text"
            ref={inputRef}
            className="px-6 py-2 mr-2 border border-slate-200 rounded-md"
          />
          <button className="bg-black px-6 py-2 text-white rounded-md mt-2">
            ADD
          </button>
        </form>
      </div>
      <Todos todos={todos} todoList={todoList} />
    </div>
  );
};

export default TodoInput;
