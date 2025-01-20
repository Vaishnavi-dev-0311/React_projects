import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    // if (count < 20) {
    setCount(count + 1);
    //}
  }

  function decrease() {
    //if (count > 0) {
    setCount(count - 1);
    // }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
