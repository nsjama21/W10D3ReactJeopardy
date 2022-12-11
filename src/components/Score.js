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
      <span className="score">Score: {count}</span>
      <section>
        <button className="increase" onClick={handleIncrement}>Increase</button>
        <button className="decrease" onClick={handleDecrement}>Decrease</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </section>
    </>
  );
}