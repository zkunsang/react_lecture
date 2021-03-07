// 가상돔과 실제 돔 사이의 최적화
import React, { useEffect, useState } from 'react';

export default function App() {
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        setTimeout(() => setFlag(prev => !prev), 1000);
    });

    if (flag) {
        return (
            <div>
                <Counter />
                <p>사과</p>
                <p>바나나</p>
            </div>
        )
    } else {
        return (
            <span>
                <Counter />
                <p key="apple">사과</p>
                <p key="banana">바나나</p>
                <p key="pineapple">파인애플</p>
            </span>
        )
    }
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => setCount(prev => prev + 1), 100);
        return () => clearTimeout(id);
    });

    return <p>count: {count}</p>
}
// 파인 애플만 추가가된다. 리액트가 이전 녀석과 변화되는 내용을 알고 있음
// 만약 파인애플이 들어가게 되면
// 순서 정보가 변경되면 바나나역시 영향을 받게 된다.

// key값을 입력하면 리액트가 렌더링을 효율적으로 할 수 있게 도와준다.
// key입력값ㅇ