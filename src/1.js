import { useEffect } from "react";

function Profile({ userId }) {
    const [user, setUser] = useState();

    async function fetchAndSetUser(needDetail) {
        const data = await fetchUser(userId, needDetail);
        setUser(data);
    }

    useEffect(() => {
        if (!user || user.id !== userId) {
            fetchAndSetUser(false);
        }
    });
}

// 가능하다면 의존성 배열을 사용하지 않는게 좋습니다.
// 부수효과 함수 내에서 실행 시점을 조절할 수 있어. 

// 느낌은 Profile에서 들어오는 UserId가 변경되었다
// 아직 이 컴포넌트에서 사용되는 state가 변하지 않아 rendering되지 않는다.
// 다른 아이디가 들어오게 되고
// fetchAndSetuser를 실행하게 되면 setUser를 통해 state값이 변하게 된다
// 그래서 re rendering