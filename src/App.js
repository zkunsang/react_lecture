import React from "react";
import Counter from "./Counter";

// Fragment 최근에 추가된 기능
// div를 원치 않게 사용되는것을 막는다.
function App() {
  return (
    <React.Fragment>
      <Counter></Counter>
      <p>안녕</p>
      <p>하세요</p>
    </React.Fragment>
  );
}

export default App;
