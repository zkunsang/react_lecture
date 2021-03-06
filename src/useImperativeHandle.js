// ref를 사용해서 클래스형 자식컴포넌트의 함수 변수를 
// 지양 해야하지만
// useImperativeHandle을 사용하면 class가 아니여도 사용할 수 있음

import React, { forwardRef, useState, useImperativeHandle } from 'react';

function Profile(_, ref) {
    const [name, setName] = useState('mike');
    const [age, setAge] = useState(0);

    useImperativeHandle(ref, () => ({
        addAge: value => setAge(age + value),
        getNameLength: () => name.length
    }));

    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>
        </div>
    )
}

export default forwardRef(Profile);