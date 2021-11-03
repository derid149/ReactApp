import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log("todos: ", ...todos);
  };

  return (
    <div>
      <h1>Whats the plan for Today?</h1>
      <TodoForm onSubmit={(todo) => addTodo(todo)} />
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
