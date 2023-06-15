import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import TodoList from "./Todo-list";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <TodoList /> */}
    <App />
  </React.StrictMode>
);
