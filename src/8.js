function MyComponent({ onClick }) {
    const onClickRef = useRef();

    onClickRef.current = onClick;
}

// 컴포넌트에서 바로 Ref의 값을 직접 수정하면 안된다!
// 컨 커런트 모드에서 렌더링이 취소 될 수 있기 때문
// 렌더링이 취소 되었는데 ref에는 값이 수정되게 되면 문제가 발생된다.