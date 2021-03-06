import React from 'react';

export default function App() {
    return (
        <div>
            <div>상단 메뉴</div>
            <Profile username="mike" />
            <div>하단 메뉴</div>
        </div>
    )
}

// 자신은 사용하지 않으면서 username이라는것을 전달해야한다.
function Profile({username}) {
    return (
        <div>
            
            <Greeting username={username}/>
        </div>
    )
}

function Greeting({username}) {
return <p>{`${username}님 안녕하세요`}</p>
}