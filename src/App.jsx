import { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  let initialValue = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Counter App</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" }}>Decrement</button>
    </div>
  );
}

function todoReducer(state, action) {
  if (action.type === "ADD_TODO") {
    return [...state, { id: state.length, title: action.payload }];
  } else if (action.type === "REMOVE_TODO") {
    return [state.pop()];
  } else {
    return state;
  }
}

function Todo() {
  const [input, setInput] = useState("");
  const todos = [
    {
      id: 1,
      title: "jaskaran",
    },
  ];

  const [todosState, todoDispatch] = useReducer(todoReducer, todos);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>
      <ul>
        {todosState.length > 0 && (
          <>
            {todosState.map((todo, index) => (
              <li key={index}>{todo.title}</li>
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

      <button
        onClick={() => todoDispatch({ type: "ADD_TODO", payload: input })}
      >
        Add Todo
      </button>
      <button onClick={() => todoDispatch({ type: "REMOVE_TODO" })}>
        Remove Todo
      </button>
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to React Router Tutorial</h1>
      <p>Navigate using the links above to explore different sections!</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
          <a href="/" style={{ marginRight: "10px" }}>Home</a>
          <a href="/counter" style={{ marginRight: "10px" }}>Counter</a>
          <a href="/todo">Todo</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
