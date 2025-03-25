import React, { useCallback, useState } from "react";
import DoubledCountDisplay from "../DoubledCountDisplay/DoubledCountDisplay";

const MemoizationDemoMain = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div>
      <h1>Memoizataion Demo</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      <DoubledCountDisplay count={count} />

      <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Type something' />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default MemoizationDemoMain;
