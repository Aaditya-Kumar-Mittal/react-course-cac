import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid is a unique id generator

const initialState = {
  todos: [
    {
      id: 1,
      desc: "Task-1",
    },
  ],
};

// Creating a Slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // It takes properties and functions
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        desc: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.desc = action.payload.desc;
        }
      });
    },
  },
});

// Exporting actions from the slice, so that it can be used in components easily
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Creating a Reducer, beacuse store also needs awareness about the reducer for its configuration. This store is restrictive and doesnot allow changes to the state without reducers.
export const todoReducer = todoSlice.reducer;