import React, { useState, useEffect } from 'react';

export default function Profile({ userId }) {
    const [user, setUser] = useState(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        getUserApi(userId).then(data => setUser(data));
    }, [userId]);

    // 빈 배열을 넣게 되면 한번만 렌더링 되고 다음부터는 렌더링이 안된다.
    // 의존성 배열에는 지역변수나 지역 함수 같은 것들은

    // getUserApi는 외부에 있으니 입력을 안해도 되지만
    // 상태값 변경 함수는 의존성 배열에 안넣어도됨
    // userId는 내부값이므로 입력

    // 지역변수를 넣고 의존성에 넣지 않으면 린트 에러가 발생

    // func1은 렌더링 될때마다 실행되게되는 함수이므로 
    // function makes the dependencies of useEffect Hook (at line 14) change on every render 이런 에러가 발생한다
    // useCallback의 메모이제이션을 사용하도록 하자




    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    )
}

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };

function getUserApi(userId) {
    return new Promise(res => {
        setTimeout(() => { res(userId % 2 ? USER1 : USER2) }, 500);
    });
}