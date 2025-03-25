import { useState } from "react";
import UserInfo from "../UserInfo/UserInfo";

function ReactMemoDemo() {
  const [name, setName] = useState("Alice");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>React.memo Demo</h1>
      <UserInfo name={name} />
      <button onClick={() => setName(name === "Alice" ? "Bob" : "Alice")}>Toggle Name</button>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter ({counter})</button>
    </div>
  );
}

export default ReactMemoDemo;
