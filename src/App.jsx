import { useReducer, useState } from "react";

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
  // const [count, setCount] = useState(0);
  let initialValue = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
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
    <div>
      <div>
        <ul>
          {todosState.length > 0 && (
            <>
              {todosState.map((todo, index) => (
                <li key={index}>{todo.title}</li>
              ))}
            </>
          )}
        </ul>
      </div>

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

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}
