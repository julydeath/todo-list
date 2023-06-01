import React, { useRef, useState } from "react";
import Todos from "./Todos";

const TodoInput = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleSubmmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputRef.current.value]);
    inputRef.current.value = "";
  };

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
      <Todos todos={todos} />
    </div>
  );
};

export default TodoInput;