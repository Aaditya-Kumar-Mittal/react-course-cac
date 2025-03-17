# Theme Switcher - A Project Demonstrating Application of Context API in React

<!-- markdownlint-disable MD024 -->

## Table of Contents

- [Theme Switcher - A Project Demonstrating Application of Context API in React](#theme-switcher---a-project-demonstrating-application-of-context-api-in-react)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [Theme Button](#theme-button)
    - [Card UI](#card-ui)
    - [App UI](#app-ui)
  - [Tailwind Configuration](#tailwind-configuration)
  - [How Context API is Used](#how-context-api-is-used)
    - [Understanding `ThemeContext` and `useTheme` Hook](#understanding-themecontext-and-usetheme-hook)
      - [1. **Creating the Context**](#1-creating-the-context)
      - [2. **Creating a Provider**](#2-creating-a-provider)
      - [3. **Custom Hook: `useTheme`**](#3-custom-hook-usetheme)
    - [Usage](#usage-1)
  - [Conclusion](#conclusion)

## Introduction

Theme Switcher is a React project demonstrating the application of the Context API to manage global state. This project allows users to toggle between light and dark themes using a switch button. Additionally, it showcases a simple product card UI.

## Project Structure

```plaintext
ThemeSwitcher/
│-- src/
│   │-- components/
│   │   │-- ThemeBtn.js
│   │   │-- Card.js
│   │-- context/
│   │   │-- ThemeContext.js
│   │   │-- ThemeProvider.js
│   │-- App.js
│-- index.js
│-- tailwind.config.js
```

## Features

- Theme toggling between light and dark mode.
- Context API for global state management.
- Modern UI with Tailwind CSS and Glassmorphism effects.
- Simple and reusable components.

## Installation

To set up the project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/your-repo/theme-switcher.git

# Navigate to project directory
cd theme-switcher

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage

1. Open the app in your browser.
2. Toggle the theme using the Theme Switch button.
3. View the product card in the selected theme.

## Components

### Theme Button

The `ThemeBtn` component provides a toggle switch for changing the theme.

```javascript
export default function ThemeBtn() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
```

### Card UI

The `Card` component represents a sample product card with a Glassmorphism effect.

```javascript
export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
```

### App UI

This represents the overall layout and structure of the application.

```javascript
<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
    <div className="w-full max-w-sm mx-auto"></div>
  </div>
</div>
```

## Tailwind Configuration

Ensure that the Tailwind CSS is correctly configured in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## How Context API is Used

1. **Creating the Context** - The ThemeContext is created to manage the global theme state.
2. **Providing the Context** - The ThemeProvider component wraps the entire application to provide theme-related state and functions.
3. **Consuming the Context** - The ThemeBtn component uses `useContext` to toggle between themes.

### Understanding `ThemeContext` and `useTheme` Hook

This code defines a **Theme Context API** in React for managing a **light/dark theme switcher**. Let’s break it down step by step:

#### 1. **Creating the Context**

```javascript
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
```

- This creates a **context** using `createContext()`.
- It provides an **initial value** where:
  - `themeMode: "light"` → Sets the default theme as **light**.
  - `darkTheme: () => {}` and `lightTheme: () => {}` → These are **placeholder functions** to prevent errors when the context is accessed before being updated.

#### 2. **Creating a Provider**

```javascript
export const ThemeProvider = ThemeContext.Provider;
```

- `ThemeProvider` is assigned to `ThemeContext.Provider`, allowing us to **wrap components** that should have access to the theme context.

#### 3. **Custom Hook: `useTheme`**

```javascript
export default function useTheme() {
  return useContext(ThemeContext);
}
```

- This is a **custom hook** that allows components to easily access the `ThemeContext` using `useContext(ThemeContext)`.
- Instead of calling `useContext(ThemeContext)` directly in every component, we simply call `useTheme()` to get the theme state and functions.

---

### Usage

To use the theme in any component:

```javascript
const { themeMode, darkTheme, lightTheme } = useTheme();
```

- `themeMode`: Current theme (`"light"` or `"dark"`).
- `darkTheme()`: Function to switch to dark mode.
- `lightTheme()`: Function to switch to light mode.

## Conclusion

This project effectively demonstrates the use of the Context API for global state management in a React application. With a well-structured component-based approach and Tailwind CSS integration, the Theme Switcher project serves as an excellent reference for building scalable and modern web applications.
