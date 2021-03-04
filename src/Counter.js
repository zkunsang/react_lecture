import React, { useState } from "react";
import Title from "./Title";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function onClick() {
    setCount(count + 1);
  }

  function onClick2() {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <Title title={`${count}`} />
      <button onClick={onClick}>increse</button>
      <button onClick={onClick2}>increase2</button>
    </div>
  );
}
