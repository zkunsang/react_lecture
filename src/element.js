import React, {useRef, useEffect} from 'react';

// 클래스형일때 해당 컴포넌트(인스턴스)의 함수를 호출 가능
// 함수형일때는 useInperativeHandle 를 사용하면 변수화 함수를 외부로 노출 가능

export default function App() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <Box ref={inputRef}/>
            <button>저장</button>
        </div>
    )
}

function Box() {}