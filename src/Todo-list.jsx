import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("normal");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="main">
        <div>
          <h1>Todo List</h1>
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
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredTodos.map((todo) => (
                <li key={todo.id} className={`priority-${todo.priority}`}>
                  <input
                    type="text"
                    value={todo.text}
                    onChange={(e) =>
                      updateTodo(todo.id, e.target.value, todo.priority)
                    }
                  />
                  <button
                    onClick={() =>
                      updateTodo(todo.id, todo.text, priorityValue)
                    }
                  >
                    Edit
                  </button>
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
