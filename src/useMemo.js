// 계산값이 많은것일때
// useMemo첫번째 인자에는 함수가 들어감
// 두번째 인자값 배열이 이 변경된다면 실행됨(의존성 배열)

import React, {useMemo, useState} from 'react';

export default function App() {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
    const [v3, setV3] = useState(0);

    const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
    return (
        <>
            <p>{`value is ${value}`}</p>
            <button
                onClick={() => {
                    setV1(Math.random());
                    setV2(Math.random())
                }}>
                    v1/v2수정
                </button>
            <p>{`v3 is ${v3}`}</p>
            <button onClick={() => setV3(Math.random())}>v3 수정</button>
        </>
    )
}

function runExpensiveJob(v1, v2) {
    console.log('runExpensiveJob is called');
    return v1 + v2;
}