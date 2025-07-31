import { useState } from "react";

import useAuth from "./useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        backgroundColor: "lightblue",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <h1>LoginPage</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => login(input)}>Login</button>
        </div>
      </div>
    </div>
  );
}
