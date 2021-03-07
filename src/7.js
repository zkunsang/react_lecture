import { useEffect } from "react";

function MyComponent({ onClick }) {
    const onClickRef = useRef();

    useEffect(() => {
        onClickRef.current = onClick;
    });

    useEffect(() => {
        window.addEventListener('click', () => {
            onClickRef.current();
        })
    })
}

// 리액트 훅의 단점
// 의존성 배열을 사용안하려고 너무 노력하는 느낌이 든다