// 컴포넌트 렌더링을 할때 부수효과가 발생되는것은 프로그램의 복잡도를 증가
// 유닛 테스트 힘들어지고
// 렌더링 후에 처리해도 될 것이다
// 

import react, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  });

  // useEffect에서 첫번째 함수를 부수효과 함수라고 한다.
  // 렌더링 후에 부수효과가 실행된다.

  return <button onClick={(() => setCount(v => v + 1))}>increase</button>
}