import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, title: "Todo 1", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, updatedTodo) => {},
  removeTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = TodoContext.Provider;
