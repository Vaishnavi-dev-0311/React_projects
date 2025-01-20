import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="todo-items">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
