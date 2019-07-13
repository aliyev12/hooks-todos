import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Lorem ipsum dolor sit amet consectetur", completed: false },
  { id: 2, task: "Adipisicing elit. Unde, numquam!", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  console.log("todos = ", todos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
