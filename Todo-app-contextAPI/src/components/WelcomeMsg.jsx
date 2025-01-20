import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import React from "react";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};

export default WelcomeMsg;
