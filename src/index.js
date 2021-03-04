import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    window.onpopstate = function (event) {
      setPageName(event.state); // 요 내용을 바꾸지 않으면 돌아가기 버튼을 했을때 해당 아래 컴포넌트 부분을 그려주지 않는다.
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);

  function onClick1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }

  function onClick2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }

  return (
    <div>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>
      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </div>
  );
}

function Home() {
  return <h2>여기는 홈페이지 입니다. 원하는 페이지 버튼을 클릭하세요</h2>;
}
function Page1() {
  return <h2>여기는 페이지1 입니다</h2>;
}

function Page2() {
  return <h2>여기는 페이지2 입니다</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
