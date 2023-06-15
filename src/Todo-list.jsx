import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("normal");

  const addTodo = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Math.random(),
        text: inputValue,
        priority: priorityValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      setPriorityValue("normal");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText, newPriority) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText, priority: newPriority };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h1>Todo List</h1>
          <br />
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <select
              value={priorityValue}
              onChange={(e) => setPriorityValue(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="medium">Medium</option>
              <option value="important">Important</option>
            </select>
            <button onClick={addTodo}>Add</button>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} className={`priority-${todo.priority}`}>
                  <input
                    type="text"
                    value={todo.text}
                    onChange={(e) =>
                      updateTodo(todo.id, e.target.value, priorityValue)
                    }
                  />
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
