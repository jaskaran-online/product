import useCounter from "../hooks/useCounter";

export default function CartItem() {
  const { count, incrementCounter, decrementCounter } = useCounter();
  return (
    <div>
      <h1>Cart Item</h1>
      <button onClick={decrementCounter}>-</button>
      <p>{count}</p>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}
