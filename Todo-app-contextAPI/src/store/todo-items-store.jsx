import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

/*Explanation:
import { createContext } from "react";

Here, we are importing the createContext function from the React library. This function is used to create a Context in React, which helps share data across different components in an app without passing it through every level of components manually.

export const TodoItemsContext = createContext({...});

This line creates a Context called TodoItemsContext.

The createContext function takes an initial value as its argument, and in this case, the initial value is an object with 3 properties:
todoItems: []: This represents an empty list of todo items at the start. It will eventually hold all the todo items in your app.
addNewItem: () => {}: This is an empty function. It’s meant to represent a function that adds a new item to the todo list. Right now, it doesn't do anything (empty function).
deleteItem: () => {}: This is another empty function, which represents a function that would delete an item from the todo list. Again, it doesn’t do anything right now (empty function). */
