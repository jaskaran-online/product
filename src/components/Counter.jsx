import useCounter from "../hooks/useCounter";

function Counter({ startCounterFrom }) {
  const { incrementCounter, count, decrementCounter } =
    useCounter(startCounterFrom);

  return (
    <div>
      <h1>Counter</h1>
      <p>number is {count}</p>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

export default Counter;
