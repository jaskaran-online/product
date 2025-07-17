import { useState } from "react";

function useCounter(counterValue = 0) {
  const [count, setCount] = useState(counterValue);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }

  let hookValues = {
    count: count,
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
  };

  return hookValues;
}

export default useCounter;
