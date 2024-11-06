import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>count is {count}</div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        increment
      </button>
      <button type="button" onClick={() => setCount((count) => count - 1)}>
        decrement
      </button>
    </div>
  );
};

export default App;
