// 메모이제이션에 특화
// () => saveToServer(name, age)는 상위 컴포넌트가 계속해서
// 호출되어 UserEdit이 지속적으로 다시 랜더링하게 된다.
// 새로운 함수가 만들어져서 전송되기때문에
// v1만 변경됐음에도 memo를 사용했음에도
// render가 지속적으로 실행됨

import React, { useState, useCallback } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [v1, setV1] = useState(0);

    const onSave = useCallback(() => saveToServer(name, age), [name, age]);

    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
            <UserEdit 
                onSave={onSave}
                setName={setName}
                setAge={setAge}
                />
            <p>{`v1: ${v1}`}</p>
            <button onClick={() => setV1(Math.random())}>v1 수정</button>
        </div>
    )
}

const UserEdit = React.memo(function({onSave,setName, setAge}) {
    console.log('useredit render')
    return null;
});

function saveToServer(name, age) {}