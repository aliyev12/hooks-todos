import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Lorem ipsum dolor sit amet consectetur", completed: false },
  { id: 1, task: "Adipisicing elit. Unde, numquam!", completed: true }
];

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={useTodoState(defaultTodos)}>
      {children}
    </TodosContext.Provider>
  );
};
