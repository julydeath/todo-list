import React, { useState } from "react";
import {
  RiDeleteBin5Line,
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

const TodoList = ({ todo }) => {
  const [complete, setComplete] = useState(false);
  return (
    <div className="max-w-[840px] m-auto flex justify-between border border-gray-300 my-4 px-12 py-4 rounded-xl shadow-md">
      <div>
        <p className={complete ? "line-through text-xl" : "text-xl"}>{todo}</p>
      </div>
      <div className="flex">
        {complete ? (
          <RiCheckboxCircleFill
            size={20}
            className="mx-4 text-green-600 mt-1 hover:cursor-pointer"
            onClick={() => setComplete(!complete)}
          />
        ) : (
          <RiCheckboxCircleLine
            size={20}
            className="mx-4 text-green-600 mt-1 hover:cursor-pointer"
            onClick={() => setComplete(!complete)}
          />
        )}
        <RiDeleteBin5Line
          size={20}
          className="mx-4 text-red-600 mt-1 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TodoList;
