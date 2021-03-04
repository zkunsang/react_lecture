import React, { useState } from "react";
import Title from "./Title";

// 오브젝트로 넣었을 때 상태값이 변하지 않는다.
export default function Counter() {
  const [count, setCount] = useState({ value: 0 });
  function onClick() {
    setCount({ ...count, value: count.value + 1 });
  }

  return (
    <div>
      {count.value !== 0 && <Title title={`${count.value}`} />}
      <button onClick={onClick}>increse</button>
    </div>
  );
}
