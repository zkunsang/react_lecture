import React, { createContext, useContext, useState } from 'react';
const UserContext = createContext('unknown');

// Provider
// Provider에서 값이 변경된다면
// 하위에 있는 컴포넌트들도 변경된다.
export default function App() {
  const [name, setName] = useState('mike');
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>uppper menu</div>
        <Profile />
        <div>bottom menu</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </UserContext.Provider>
    </div>
  )
}

// 이렇게 하면은 Greeting 하위 컴포넌트가 변하면서 
// 해당 컴포넌트도 변함
// function Profile() {
//     console.log("Profile rendered!");
//     return (
//         <div>
//             <Greeting />
//         </div>
//     )
// }

// React.memo 변경되는 값이 없으면 렌더링이 되지 않음.
const Profile = React.memo(() => {
  console.log("Profile rendered!");
  return (
    <div>
      <Greeting />
    </div>
  )
})

// Consumer와
// renderProps childrend을 함수를 호출하는 형태로 사용
// {useranem => <p>{`${}`}}
// 부모를 찾아나가서 Provider를 사용
function Greeting() {
  const username = useContext(UserContext);

  return (
      <p>{`${username}님 안녕하세요`}</p>
  )
}