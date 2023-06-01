import React from "react";
import TodoList from "./TodoList";

const TodoInput = () => {
  return (
    <div>
      <div className="max-w-[1240px] m-auto text-center my-10 h-[150px] bg-slate-100 rounded-lg shadow-2xl">
        <h1 className="text-xl md:text-3xl font-bold p-2">Enter Tasks</h1>
        <input
          placeholder="Enter todo"
          type="text"
          className="px-6 py-2 mr-2 border border-slate-200 rounded-md"
        />
        <button className="bg-black px-6 py-2 text-white rounded-md mt-2">
          ADD
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default TodoInput;
