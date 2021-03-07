import { useEffect } from "react";

function MyComponent({ onClick }) {
    useEffect(() => {
        window.addEventListener('click', () => {
            onClick
        })
    }, [onClick]);
}

// ??? 부수효과 함수가 불필요하게 자주 호출 될 수 있죠.
// useRef를 사용