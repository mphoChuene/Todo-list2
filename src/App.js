import React from "react";
/* import "react-toastify/dist/react-toastify.css"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* importing pages  */
import TodoList from "./Todo-list";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

export const App = () => {
  return (
    <>
      {/*   routing of pages */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
      ;
    </>
  );
};
