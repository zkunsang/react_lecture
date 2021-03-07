function MyComponent(props) {

}

function isEqual(prevProps, nextProps) {

}

React.memo(MyComponent, isEqual);

// 속성값 비교함수를 입력하지 않으면 
// 기본 함수가 사용됨
// memo함수를 사용안하면 항상 다시 그림
// 부모 컴포넌트가 렌더링 될 때마다 다시 그림