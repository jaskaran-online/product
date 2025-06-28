import { useState, useEffect } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("Render every time 🔃");

  useEffect(() => {
    console.log("Name changed to: 🔃", name);
  });

  useEffect(() => {
    console.log("log for first time 💚");
  }, []);

  useEffect(() => {
    console.log("Count changed to: 🧡", count);
  }, [count]);

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h1>Name: {name}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DemoUseEffect;
