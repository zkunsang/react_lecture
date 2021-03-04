import React, { useState, useEffect } from "react";
import Counter from './Counter';

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((v) => v + 1);
    }, 1000);
  });

  // component가 추가되는것은 mount 
  // component가 제거되는것은 unmount
  // component가 mount되면 useState의 초기값으로 할당이 된다.
  // key를 넣으면 mount / unmount
  // 동일하게 조건부 렌더링으로도 가능
  return (
    <div>
      {seconds % 2 === 0 && <Counter key={seconds} />}
      <h1 style={{ color: seconds % 2 ? "blue" : "red" }}>안녕하세요</h1>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  );
}
