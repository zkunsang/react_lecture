import React, {useContext, createContext, useState} from 'react';

// 여러개의 컨텍스트로 관리하는게 유리 렌더링에 유리
// 사용자 정보만 바뀌었을때
// 테마 정보만 바뀌었을때


const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App() {
  const [user, setUser] = useState({username: 'mike', age: 123});
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  console.log("App");
  // 아래처럼 {username, age}는 새로운 객체가 생성!
  // 따라서 useState를 사용해서 사용한다.
  return (
      <div>
          <UserContext.Provider valeu={user}>
              <Profile />
              <button onClick={() => setCount(count + 1)}>증가</button>
          </UserContext.Provider>
      </div>
  )
}

function Profile() {
    return (
        <div>
            <Greeting />
        </div>
    )
}

function Greeting() {
  const username = useContext(UserContext);

  return (
      <p>{`${username}님 안녕하세요`}</p>
  )
}