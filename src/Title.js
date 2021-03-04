import React from "react";

// Counter 에서만 사용되는 count2가 변경되었음에도 불구하고 Title도 렌더링을 다시한다.
//
export default function Title({ title }) {
  console.log("Title render");
  return <p>{title}</p>;
}
