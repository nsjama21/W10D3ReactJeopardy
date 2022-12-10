import { useState } from "react";

export default function Score() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 100);
  };

  const handleDecrement = () => {
    setCount(count - 100);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <span>Score: {count}</span>
      <section>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </>
  );
}