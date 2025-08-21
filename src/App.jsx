import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "jaskaran",
    },
  ]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), title: input }]);
      setInput("");
    }
  };

  const removeTodo = () => {
    if (todos.length > 0) {
      setTodos(todos.slice(0, -1));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <ul>
        {todos.length > 0 && (
          <>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </>
        )}
      </ul>

      <div>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <button onClick={addTodo}>Add Todo</button>
      <button onClick={removeTodo}>Remove Last Todo</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
}
