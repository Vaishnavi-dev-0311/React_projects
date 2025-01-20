import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Like the youtube page",
      dueDate: "29/07/2024",
    },
    {
      name: "share the youtube page",
      dueDate: "29/07/2024",
    },
    {
      name: "subscribe the youtube page",
      dueDate: "29/07/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
