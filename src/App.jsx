import React, { useState, useContext, useEffect, createContext } from "react";

// Create a Context for the to-do list
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul style={styles.todoList}>
      {todos.map((todo, index) => (
        <li key={index} style={styles.todoItem}>{todo}</li>
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const { setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div style={styles.addTodo}>
      <h1 style={styles.header}>Name: ABAYISENGA Anitha</h1>
      <h1 style={styles.header}>CLASS: l5sod</h1>
      <p style={styles.description}>A hook is a special function that allows you to use state and other React features in functional components</p>
      <p>useState: This hook allows you to add state to a functional component</p>
      <p>useEffect: This hook lets you perform side effects in your components, such as data fetching, subscriptions, or manually changing the DOM</p>
      <p>useContext: This hook lets you subscribe to React context without introducing nesting
      </p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddTodo} style={styles.button}>Add To-Do</button>
    </div>
  );
};

const App = () => {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    console.log("To-do list updated:", todos);
  }, [todos]);

  return (
    <div style={styles.app}>
      <AddTodo />
      <TodoList />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9"
  },
  addTodo: {
    marginBottom: "20px"
  },
  header: {
    color: "#333",
  },
  description: {
    color: "#555",
    marginBottom: "10px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  button: {
    padding: "10px 20px",
    marginLeft: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
  },
  todoList: {
    listStyle: "none",
    padding: 0
  },
  todoItem: {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  }
};

export default () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);
