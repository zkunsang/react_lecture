// 조건 부 일때
// input 요소가 존재하지 않을때 inputRef.current를 사용하게 되면 문제가 발생될 수 있다.
// current 요소를 검사하는 코드가 필요

import {useRef, useState} from 'react';

export default function App() {
    const inputRef =useRef();
    const [showText, setShowText] = useState(true);

    return (
        <div>
            {showText && <input type = "text" ref={inputRef}/>}
            <button onClick={() => setShowText(!showText)}>
                텍스트 보이기/가리기
            </button>
            <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
        </div>
    )
}