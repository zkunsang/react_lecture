import React from "react";
let color = "red";

export default function App() {
  function onClick() {
    color = "blue";
  }

  //이렇게 하면 동작하지 않음
  // 왜? 리액트가 변경되었는지 알 수가 없음

  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      good!
    </button>
  );
}
