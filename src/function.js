import React, { useState, useCallback } from 'react';


// ref에 함수를 호출하게도 
// ref 엘리먼트가 생성될 때는 해당 함수가 호출 된다.
// 사라질때는 null

// 인풋요소에 값을 입력해도 변하지 않음
// 컴포넌트가 렌더링 될때마다 
// ref함수가 계속해서 호출되기 때문에
// INITIAL_TEXT만 계속나옴
// 함수를 고정할 필요 => useCallback

export default function App() {
    const [text, setText] = useState(INITAIL_TEXT);
    const [showText, setShowText] = useState(true);

    const setInitialText = useCallback(ref => ref && setText(INITAIL_TEXT), []);

    return(
        <div>
            {showText && (
                <input  
                    type="text"
                    ref={setInitialText}
                    value={text}
                    onChange={e => setText(e.target.value)}/>
            )}
            <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
        </div>
    )
}

const INITAIL_TEXT = '안녕하세요';