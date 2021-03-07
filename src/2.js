// 가상돔과 실제 돔 사이의 최적화
import React, { useEffect, useState } from 'react';

export default function App() {
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });


    return (
        <div
            className={flag ? 'yes' : 'no'}
            style={{ color: 'black', backgroundColor: flag ? '#ffaaaa' : '#aaffaa' }}
        >
            <Counter />
            <p>사과</p>
            <p>바나나</p>
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => setCount(prev => prev + 1), 100);
        return () => clearTimeout(id);
    });

    return <p>count: {count}</p>
}

// 자식 요소가 많은 녀석을 다시 그리면 끊기는 느낌이 들 수 있어
// 스타일을 바꾸는데 있어서 자식 컴포넌트에도 변화가 없음
