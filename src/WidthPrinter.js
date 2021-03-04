import React, { useState, useEffect } from 'react';

export default function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        console.log('useEffect 1')

        return () => {
            window.removeEventListener('resize', onResize)
            console.log('useEffect 2')
        }
    });

    // 부수 효과 함수에서 반환하는 함수는 다음 부수 효과 함수가 호출되기 직전에 호출됨
    // 또는 컴포넌트가 unmount 되기 직전에 마지막으로 한번 호출됨
    // [] 컴포넌트가 생성될때만 호출되고 
    // 컴포넌트가 종료될때만 호출된다.

    // 빈 배열을 입력하지 않음 []를 제거하면
    // width가 변경될때마다 component가 렌더링 된다!
    // 부수 효과 함수가 계속해서 발생하게됨

    return <div>{`width is ${width}`}</div>
}