import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function App() {
  const [count, setCount] = useState(0);
  function onClick() {
    ReactDOM.unstable_batchedUpdates(() => {
      setCount(v => v + 1);
      setCount(v => v + 1);
    })

  }

  // useEffect로 onClick을 달아줬다가
  // return 에서 remove해준다?
  // react에서 관리되는것이 아니라 -> 외부에서 관리됨
  // render called가 두번 호출됨 
  // 외부에서 관리되는것도 ReactDOM으로 처리가 될 수 있다.
  // 동일 배치로
  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  })
  console.log('render called');

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  )
}

// 상태값 변경은 배치로 처리되어서 한개가 아닌 2개가 됨
// 상태값 변경 함수로 처리