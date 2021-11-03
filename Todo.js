import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <p>{todo.text}</p>
    </div>
  );
};

export default Todo;
