# Redux & React-Redux: A Comprehensive Overview

## Table of Contents

- [Redux \& React-Redux: A Comprehensive Overview](#redux--react-redux-a-comprehensive-overview)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction to Redux](#1-introduction-to-redux)
  - [2. Understanding Flux](#2-understanding-flux)
    - [Key Features of Flux](#key-features-of-flux)
  - [3. Evolution of Redux](#3-evolution-of-redux)
  - [4. Core Principles of Redux](#4-core-principles-of-redux)
  - [5. Redux Toolkit](#5-redux-toolkit)
  - [6. Difference Between Redux and Redux Toolkit](#6-difference-between-redux-and-redux-toolkit)
  - [7. Important Concepts of Redux Toolkit](#7-important-concepts-of-redux-toolkit)
    - [1. Store](#1-store)
    - [2. Reducers](#2-reducers)
    - [**1️⃣ Exporting Actions**](#1️⃣-exporting-actions)
    - [**2️⃣ Exporting the Reducer**](#2️⃣-exporting-the-reducer)
    - [**Why Are These Two Steps Necessary?**](#why-are-these-two-steps-necessary)
    - [3. useSelector](#3-useselector)
    - [4. useDispatch](#4-usedispatch)

---

## 1. Introduction to Redux

- Redux is an independent state management library used in JavaScript applications.
- It enables predictable and centralized state management.
- Works well with React but can also be used with other frameworks.
- We need react-redux to implement Redux in a React application.

---

## 2. Understanding Flux

- Flux is a state management pattern introduced by Facebook.
- It was designed to handle data flow and central storage issues in React.
- It introduced Unidirectional Data Flow for better data consistency.

### Key Features of Flux

- Centralized Store: Data is managed in a single location.
- Unidirectional Data Flow: Values are passed from one component to another via a store.
- Prevents Direct Mutations: Helps maintain consistency across the application.

---

## 3. Evolution of Redux

- In 2015, at React Conf, Dan Abramov introduced Redux as an improvement over Flux.
- Redux follows the Flux pattern but simplifies implementation.
- Introduced the Single Source of Truth and Read-Only State.
- Encourages immutability – state should never be mutated directly.
- Changes are made using pure functions (reducers).

---

## 4. Core Principles of Redux

- Predictable State Management: Ensures consistency across applications.
- Centralized Store: All state-related data is stored in a single store.
- Read-Only State: The only way to change the state is via actions.
- Pure Functions (Reducers): Used to update the state without side effects.

---

## 5. Redux Toolkit

- Redux Toolkit is an optimized version of Redux with built-in utilities.
- Batteries-included: Provides tools to streamline store configuration.
- Higher Abstraction Level: Reduces boilerplate code.
- Slicers: Helps manage state more efficiently using slices.
- Built-in Middlewares: Includes `redux-thunk` for async actions.

---

## 6. Difference Between Redux and Redux Toolkit

| Feature             | Redux                                    | Redux Toolkit                                   |
| ------------------- | ---------------------------------------- | ----------------------------------------------- |
| Boilerplate Code    | Requires a lot of manual setup           | Reduces boilerplate significantly               |
| Store Configuration | Needs manual setup with `createStore()`  | Simplified using `configureStore()`             |
| Reducers            | Uses separate reducers with switch cases | Uses slices to handle state                     |
| Middleware          | Needs manual integration                 | Includes built-in middleware like `redux-thunk` |
| Immutability        | Enforced manually                        | Managed automatically with Immer                |
| Complexity          | More complex, especially for beginners   | Easier and more developer-friendly              |

---

## 7. Important Concepts of Redux Toolkit

Redux Toolkit simplifies Redux state management by providing built-in utilities for handling store configuration, reducers, and actions. Below are the key concepts:

### 1. Store

- The **store** is a centralized place where the entire application's state is kept.
- It allows components to access the application state efficiently.
- In Redux Toolkit, the store is created using `configureStore()`, which automatically sets up good defaults like Redux DevTools and middleware.

Example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

---

### 2. Reducers

- A **reducer** is a function that determines how the state will change in response to an action.
- In Redux Toolkit, reducers are typically created inside **slices** using `createSlice()`.
- Reducers **must be pure functions** and should not mutate the existing state directly.

Example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

In Redux Toolkit, these two steps are essential to properly manage actions and reducers in a modular way. Let's break it down:

### **1️⃣ Exporting Actions**

```javascript
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
```

- `todoSlice.actions` contains all the action creators automatically generated by `createSlice()`.
- We **extract and export** them so they can be used in components to dispatch actions.
- This allows components to trigger state changes easily.

**Example Usage in a Component:**

```javascript
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoComponent = () => {
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: 1, text: "Learn Redux Toolkit" }));
  };

  return <button onClick={handleAddTodo}>Add Todo</button>;
};
```

---

### **2️⃣ Exporting the Reducer**

```javascript
export const todoReducer = todoSlice.reducer;
```

- `todoSlice.reducer` contains the reducer function created inside `createSlice()`.
- We **export it separately** so it can be included in the store configuration.

**Example Usage in Store Configuration:**

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer, // Integrating our reducer into the store
  },
});

export default store;
```

---

### **Why Are These Two Steps Necessary?**

1. **Separation of Concerns** – Actions and reducers have different purposes:
   - Actions trigger changes (dispatched in components).
   - Reducers define how the state changes (used in store configuration).
2. **Modular Code** – Keeping actions and reducers separate makes the code more maintainable and reusable.

3. **Flexibility** – If needed, we can:
   - Import only the actions in a component.
   - Import only the reducer in `configureStore()`.

By following this pattern, Redux Toolkit makes state management more structured and efficient. 🚀

---

### 3. useSelector

- `useSelector` is a React hook used to **extract data from the Redux store state**.
- It allows components to subscribe to specific pieces of the store and re-renders when the selected state changes.

Example:

```javascript
import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((state) => state.counter.value);

  return <h1>Counter: {counter}</h1>;
};
```

---

### 4. useDispatch

- `useDispatch` is a React hook that allows components to **dispatch actions to update the store**.
- It is used to trigger state changes in response to user interactions or events.

Example:

```javascript
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
```
