import React, {useState, useRef, useEffect} from 'react';

export default function App() {
    const timerIdRef = useRef(-1);

    useEffect(() => {
        timerIdRef.current = setTimeout(() => {}, 1000);
    });

    useEffect(() => {
        if(timerIdRef.current >= 0) {
            clearTimeout(timerIdRef.current);
        }
    })
}

// ref객체는 엘리먼트 뿐만이 아니라 다른 값들도 사용할 수 있음
// 렌더링과 상관없는 값을 처리할때 좋다
// useState를 사용하지 않는 것은 변화가 되면 렌더링이 될텐데(UI데이터가 아니기때문에)
// useRef를 사용하면 렌더링이 되지 않는다.