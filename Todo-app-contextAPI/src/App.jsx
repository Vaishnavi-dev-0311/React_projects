import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

/*What is this code doing?
This is a React app that manages a list of todo items. It allows the user to:

Add new todo items.
Delete todo items.
The Context API is used to easily share the todo list and related functions between different parts of the app, so components like "AddTodo", "TodoItems", and "WelcomeMsg" can all access and update the todo list.

Step-by-Step Breakdown:
Importing Components and Libraries:

The code starts by importing some other files and components that are needed for the app to work, like AppName, AddTodo, TodoItems, and WelcomeMsg.
It also imports a CSS file (App.css) for styling and useState from React, which is a hook to manage the state of the app (like the todo list).
TodoItemsContext is imported from ./store/todo-items-store to give components access to the todo list and functions for adding and deleting items.
useState Hook:

const [todoItems, setTodoItems] = useState([]);
This line creates a piece of state called todoItems. It starts as an empty array [], which means there are no todo items initially.
todoItems is the current list of todo items.
setTodoItems is a function that updates the todoItems list.
addNewItem Function:

addNewItem = (itemName, itemDueDate) => {...}; This function is responsible for adding a new todo item. It takes two parameters:
itemName (the name of the todo item)
itemDueDate (the due date for that todo item)
It creates a new list, newTodoItems, that includes the old todoItems plus the new item (with its name and due date).
Then, it updates the todoItems state with this new list using setTodoItems.
deleteItem Function:

deleteItem = (todoItemName) => {...}; This function deletes a todo item based on its name.
It uses the filter() method to create a new list, newTodoItems, that only includes the items whose name is not equal to the todoItemName (the one you want to delete).
Then, it updates the todoItems state with this filtered list.
Providing the Context:

<TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}> This is where the Context is used.
TodoItemsContext.Provider is like a container that makes data (in this case, the todo list and the functions to add and delete items) available to all components inside it.
value={{ todoItems, addNewItem, deleteItem }} is the data that is shared with all the components inside Provider. Any component that wants to access this data can use useContext(TodoItemsContext).
App Structure:

Inside the Provider, the following components are used:
<AppName />: This component might show the app's name or title.
<AddTodo />: This component will allow the user to add new todo items.
<WelcomeMsg />: This might display a welcome message to the user.
<TodoItems />: This component will show the list of todo items.
All these components are wrapped inside a < className="todo-container"> tag for styling (to center the content on the page).
Exporting the App:

export default App; makes this App component available for use in other parts of the app (like the main entry file of the app).
Simplified Explanation in Plain Words:
This is a simple React app that lets users add and remove todo items.
State (todoItems) keeps track of the todo list.
The addNewItem function adds a new item to the list, and the deleteItem function removes an item.
The Context API is used to make the todo list (todoItems) and these functions (addNewItem, deleteItem) available to any component inside the app (like "AddTodo", "TodoItems", etc.) without needing to pass props manually.
The TodoItemsContext.Provider is like a box that holds the todo list and functions. Any component inside it can access that box and use the data.
Finally, it’s all wrapped in the App component, which is exported and used as the main part of the app. */
