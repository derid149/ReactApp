import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{counter}</span>
    </div>
  );
}

export default Counter;
