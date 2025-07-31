import { useState, useEffect } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  console.log("Render every time 🔃");
  //. OR
  useEffect(() => {
    console.log("Render every time 🔃");
  });

  //   This will run only once when the component is mounted
  //   Empty dependency array [] means it runs only on mount
  //   Use case: Initial setup, API calls, event listeners
  useEffect(() => {
    console.log("log for first time 💚");
  }, []);

  //   This will run every time the name changes
  //   No dependency array means it runs after every render
  //   Use case: Side effects that need to run on every state change
  useEffect(() => {
    console.log("Name changed to: ❤️", name);
  }, [name]);

  //   This will run every time the count changes
  //   [count] dependency array means it runs when count changes
  //   Use case: Side effects that depend on specific state values
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
