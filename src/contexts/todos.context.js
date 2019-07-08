import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Lorem ipsum dolor sit amet consectetur", completed: false },
  { id: 2, task: "Adipisicing elit. Unde, numquam!", completed: true }
];

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
